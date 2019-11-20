// Require our file navigation
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const recursiveReadDir = require("recursive-readdir");
const recursiveCopy = require("recursive-copy");
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

  showcaseFiles.forEach(file => {
    // Get the contents of the file
    const text = fs.readFileSync(file, "utf8");

    // Get the name, html, and metadata of the file
    const name = path.basename(file, ".md");
    const html = showdownConverter.makeHtml(text);
    const metadata = showdownConverter.getMetadata();

    // Add the metadata
    metadata["key"] = name;
    metadataJson[name] = metadata;

    // Create the HTML output
    fs.writeFileSync(`./src/assets/showcase/${name}.html`, html);
  });

  // Create our showcase json (minified)
  fs.writeFileSync(`./src/assets/showcase.json`, JSON.stringify(metadataJson));

  console.log("Done!");
  console.log(" ");
};
buildTask();
