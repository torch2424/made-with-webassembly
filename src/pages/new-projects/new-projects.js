import { Component } from "preact";

import ProjectsList from "../../components/projects-list/projects-list";

import showcaseJson from "../../assets/showcase.json";

// List of the newest projects added to the website
export default class NewProjects extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    // Show the 15 newest projects
    const projectsSortedByDate = Object.values(showcaseJson);
    projectsSortedByDate.sort((a, b) => {
      if (a.createdDate < b.createdDate) {
        return -1;
      } else if (a.createdDate > b.createdDated) {
        return 1;
      }

      return 0;
    });
    projectsSortedByDate.reverse();

    this.setState({
      projects: projectsSortedByDate
    });
  }

  render() {
    return (
      <div class="new-projects">
        <h1 class="new-projects__title">New Projects</h1>
        <p class="new-projects__description">
          These are all projects added to Made With Webassembly, sorted by the
          date they were added. You can add your project by opening a pull
          request on the{" "}
          <a
            href="https://github.com/torch2424/made-with-webassembly"
            target="_blank"
          >
            Made With WebAssembly Github Repo
          </a>
          .
        </p>

        <ProjectsList projects={this.state.projects} showDateAdded={true} />
      </div>
    );
  }
}
