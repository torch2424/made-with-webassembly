import { Component } from "preact";

import showcaseJson from "../../assets/showcase.json";

// Main content for proejct page for the app

export default class Project extends Component {
  componentDidMount() {
    // Set that we are loading
    this.setState({
      loading: true
    });
    /*

    const fetchProjectHtmlTask = async () => {
      const fetchResponse = await fetch(
        `/assets/showcase/${this.props.id}.html`
      );
      const projectHtml = await fetchResponse.text();

      this.setState({
        loading: false,
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
    */
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
    } else {
      const project = showcaseJson[this.props.id];
      console.log(project);
      view = (
        <div class="project__view">
          <h1>{project.name}</h1>
          <div class="project__view__links">
            {project.website ? <a href={project.website}>Website</a> : ""}
            {project.source_url ? (
              <a href={project.source_url}>Source Code</a>
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
