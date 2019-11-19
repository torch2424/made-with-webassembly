import { Component } from "preact";

import VirtualList from "preact-virtual-list";

import * as Fuse from "fuse.js";

import showcaseJson from "../../assets/showcase.json";

// Main content for Home page for the app

export default class Home extends Component {
  constructor() {
    super();

    console.log("showcase json:", showcaseJson);
    console.log("Fuse:", Fuse);

    this.state = {
      search: "",
      results: ["a", "b", "c"]
    };
  }

  onInput(event) {
    const { value } = event.target;
    console.log("search value: ", value);
    this.setState({
      search: value
    });
  }

  render() {
    return (
      <div class="home">
        <h1 class="search-title">
          Search for a use case, technology, or project:
        </h1>
        <input
          class="search-input"
          type="text"
          placeholder="E.g Games, Rust, Wasm By Example ..."
          onInput={event => this.onInput(event)}
        />
        <VirtualList
          data={this.state.results}
          renderRow={row => <div>{row}</div>}
          rowHeight={22}
          overscanCount={10}
          sync
        />
      </div>
    );
  }
}
