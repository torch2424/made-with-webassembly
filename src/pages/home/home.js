import { Component } from "preact";

import VirtualList from "preact-virtual-list";

import * as Fuse from "fuse.js";

import showcaseJson from "../../assets/showcase.json";

// Main content for Home page for the app

export default class Home extends Component {
  constructor() {
    super();

    // Create a fuse instance
    this.fuse = new Fuse(Object.values(showcaseJson), {
      keys: ["name", "description", "keywords"]
    });

    this.state = {
      search: "",
      results: this.getRandomizedResults()
    };
  }

  getRandomizedResults() {
    return Object.values(showcaseJson).sort(() => 0.5 - Math.random());
  }

  onInput(event) {
    const { value } = event.target;

    if (value === "") {
      this.setState({
        search: value,
        results: this.getRandomizedResults()
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
        <h1 class="search-title">
          Search for a use case, technology, or project:
        </h1>
        <input
          class="search-input"
          type="text"
          placeholder="E.g Games, Rust, Wasm By Example ..."
          onInput={event => this.onInput(event)}
        />

        <div class="result-list-wrapper">
          {this.state.results.length === 0 ? (
            <div>No results found!</div>
          ) : (
            <VirtualList
              class="result-list"
              data={this.state.results}
              renderRow={result => {
                return (
                  <a class="search-result" href={`/project/${result.key}`}>
                    <div class="search-result__left">
                      {result.logo_url ? (
                        <img
                          src={result.logo_url}
                          alt={`${result.name} logo`}
                        />
                      ) : (
                        <img
                          src="/assets/icon.png"
                          alt={`Default WebAssembly Project logo`}
                        />
                      )}
                    </div>
                    <div class="search-result__right">
                      <h1 class="search-result__title">{result.name}</h1>
                      <div class="search-result__description">
                        {result.description}
                      </div>
                    </div>
                  </a>
                );
              }}
              rowHeight={100}
              overscanCount={10}
              sync
            />
          )}
        </div>
      </div>
    );
  }
}
