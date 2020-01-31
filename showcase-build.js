// Require our file navigation
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const recursiveReadDir = require("recursive-readdir");
const recursiveCopy = require("recursive-copy");

// Require our command execution for git
const util = require("util");
const exec = util.promisify(require("child_process").exec);

// Require our Markdown parsing
const showdown = require("showdown");
const showdownConverter = new showdown.Converter({ metadata: true });

// Start our building task
const buildTask = async () => {
  console.log(" ");
  console.log("Building showcase...");
  console.log(" ");

  // Create our build output folder
  mkdirp.sync("./src/assets");
  mkdirp.sync("./src/assets/showcase");

  // Recursively get all showcase markdown files
  const showcaseFiles = await recursiveReadDir("showcase");

  // Start our metadata JSON
  const metadataJson = {};

  // Start our Preact Prerender JSON
  const preactPrerenderJson = [
    {
      url: "/"
    },
    {
      url: "/about"
    },
    {
      url: "/all-projects"
    },
    {
      url: "/new-projects"
    }
  ];

  for (let i = 0; i < showcaseFiles.length; i++) {
    const file = showcaseFiles[i];

    // Get the contents of the file
    const text = fs.readFileSync(file, "utf8");

    // Get the date when the file was added to the repo, and format it
    // to only display the date
    // https://stackoverflow.com/questions/11533199/git-find-commit-where-file-was-added
    // https://stackoverflow.com/questions/22497597/get-the-last-modification-data-of-a-file-in-git-repo
    let gitAddedToRepoDate;
    const { stdout } = await exec(
      `git log --diff-filter=A --pretty="format:%ci" -- ${file}`
    );
    if (stdout) {
      gitAddedToRepoDate = new Date(stdout);
    }

    // Get the name, html, and metadata of the file
    const name = path.basename(file, ".md");
    const html = showdownConverter.makeHtml(text);
    const metadata = showdownConverter.getMetadata();

    // Add the metadata
    metadata["key"] = name;
    if (gitAddedToRepoDate) {
      metadata["createdDate"] = gitAddedToRepoDate.valueOf();
    }

    // Add the metadata to our metadata JSON we will be saving to our showcase.json
    metadataJson[name] = metadata;

    // Add the Prerender Data
    preactPrerenderJson.push({
      url: `/showcase/${name}`,
      html: html,
      project: metadata
    });

    // Create the HTML output
    fs.writeFileSync(`./src/assets/showcase/${name}.html`, html);
  }

  // Create our showcase json (minified)
  fs.writeFileSync(`./src/assets/showcase.json`, JSON.stringify(metadataJson));

  // Create our preact prerender json (minified)
  fs.writeFileSync(
    `./src/prerender-urls.json`,
    JSON.stringify(preactPrerenderJson)
  );

  console.log("Done!");
  console.log(" ");
};
buildTask();
