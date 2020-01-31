import { Component } from "preact";

import ProjectsList from "../../components/projects-list/projects-list";

import * as Fuse from "fuse.js";

import showcaseJson from "../../assets/showcase.json";

// Main content for Home page for the app

export default class Home extends Component {
  constructor() {
    super();

    // Create a fuse instance
    this.fuse = new Fuse(Object.values(showcaseJson), {
      threshold: 0.2,
      tokenize: true,
      keys: ["name", "description", "keywords"]
    });

    const randomResults = Object.values(showcaseJson).sort(
      () => 0.5 - Math.random()
    );

    this.state = {
      search: "",
      results: randomResults,
      randomResults: randomResults
    };
  }

  onInput(event) {
    const { value } = event.target;

    if (value === "") {
      this.setState({
        search: value,
        results: this.state.randomResults
      });
      return;
    }

    // Fuzzy search the results
    const searchResults = this.fuse.search(value);

    this.setState({
      search: value,
      results: searchResults
    });
  }

  render() {
    return (
      <div class="home">
        <h2 class="search-title">
          Search for a use case, technology, or project:
        </h2>
        <input
          class="search-input"
          type="text"
          placeholder="E.g Games, Rust, AssemblyScript, Wasm By Example, ..."
          onInput={event => this.onInput(event)}
        />

        <ProjectsList projects={this.state.results} />
      </div>
    );
  }
}
