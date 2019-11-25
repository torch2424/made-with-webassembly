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

        <div class="result-list">
          <div>
            <b>{this.state.results.length} projects</b>
          </div>

          {this.state.results.length === 0 ? (
            ""
          ) : (
            <div class="result-list__virtual-list-wrapper">
              <VirtualList
                class="result-list__virtual-list"
                data={this.state.results}
                renderRow={result => {
                  return (
                    <a class="search-result" href={`/showcase/${result.key}`}>
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
                rowHeight={101}
                overscanCount={5}
                sync
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
