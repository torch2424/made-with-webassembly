import { Component } from "preact";

import VirtualList from "preact-virtual-list";

// List of the newest projects added to the website
export default class ProjectsList extends Component {
  render() {
    return (
      <div class="project-list">
        {this.props.projects.length === 0 ? (
          ""
        ) : (
          <div class="project-list__virtual-list-wrapper">
            <VirtualList
              class="project-list__virtual-list"
              data={this.props.projects}
              renderRow={project => {
                return (
                  <a
                    class="project-list__project"
                    href={`/showcase/${project.key}`}
                  >
                    <div class="project-list__project__left">
                      {project.logo_url ? (
                        <img
                          src={project.logo_url}
                          alt={`${project.name} logo`}
                        />
                      ) : (
                        <img
                          src="/assets/icon.png"
                          alt={`Default WebAssembly Project logo`}
                        />
                      )}
                    </div>
                    <div class="project-list__project__right">
                      <h1 class="project-list__project__title">
                        {project.name}
                      </h1>
                      <div class="project-list__project__description">
                        {project.description}
                      </div>

                      {this.props.showDateAdded ? (
                        <div class="project-list__project__date">
                          Date Added:{" "}
                          {new Date(project.createdDate).toLocaleDateString(
                            undefined,
                            {
                              dateStyle: "short"
                            }
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </a>
                );
              }}
              rowHeight={101}
              overscanCount={10}
              sync
            />
          </div>
        )}
      </div>
    );
  }
}
