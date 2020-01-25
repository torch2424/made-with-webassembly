import { Component } from "preact";

import showcaseJson from "../../assets/showcase.json";

// Main content for proejct page for the app

export default class Project extends Component {
  componentDidMount() {
    // Set that we are loading
    this.setState({
      loading: true
    });

    // Check if we have pre-render data
    let preRenderProject = undefined;
    const preRenderScript = document.querySelector(
      'script[type="__PREACT_CLI_DATA__"]'
    );
    if (preRenderScript) {
      let preRenderScriptJson = JSON.parse(preRenderScript.innerHTML);
      if (preRenderScriptJson.preRenderData) {
        preRenderProject = preRenderScriptJson.preRenderData;
      }
    }

    if (
      preRenderProject &&
      preRenderProject.project &&
      preRenderProject.project.key === this.props.id
    ) {
      this.setState({
        loading: false,
        project: preRenderProject.project,
        html: preRenderProject.html
      });
    } else {
      // Fetch the project using props and the assets
      const fetchProjectHtmlTask = async () => {
        const fetchResponse = await fetch(
          `/assets/showcase/${this.props.id}.html`
        );
        const projectHtml = await fetchResponse.text();

        const project = showcaseJson[this.props.id];
        document.title = `Made with WebAssembly - ${project.name}`;

        this.setState({
          loading: false,
          project: project,
          html: projectHtml
        });
      };
      fetchProjectHtmlTask().catch(e => {
        console.error(e);
        this.setState({
          loading: false,
          error: true
        });
      });
    }
  }

  componentWillUnmount() {
    document.title = `Made with WebAssembly`;
  }

  render() {
    let view = "";

    if (this.state.loading) {
      view = (
        <div class="project__loading">
          <div class="donut"></div>
        </div>
      );
    } else if (this.state.error) {
      view = <h1>Error fetching the project...</h1>;
    } else if (this.state.project) {
      view = (
        <div class="project__view">
          <h1>{this.state.project.name}</h1>
          <div class="project__view__links">
            {this.state.project.website ? (
              <a href={this.state.project.website}>Website</a>
            ) : (
              ""
            )}
            {this.state.project.source_url ? (
              <a href={this.state.project.source_url}>Source Code</a>
            ) : (
              ""
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        </div>
      );
    }

    return <div class="project">{view}</div>;
  }
}
