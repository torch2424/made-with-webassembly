import { Component } from "preact";

import showcaseJson from "../../assets/showcase.json";

// Page that lists all projects in the app

export default class AllProjects extends Component {
  render() {
    const allProjectLinks = [];
    Object.values(showcaseJson)
      .sort()
      .forEach(project => {
        allProjectLinks.push(
          <li>
            <a href={`/showcase/${project.key}`} class="all-projects__link">
              {project.name}
            </a>
          </li>
        );
      });

    return (
      <div class="all-projects">
        <h1>All Projects</h1>
        <ul>{allProjectLinks}</ul>
      </div>
    );
  }
}
