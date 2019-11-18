import { Component } from "preact";

// Header nav bar for the app

export default class Header extends Component {
  render() {
    return (
      <div class="nav">
        <div class="nav__left">
          <a class="nav__title" href="/">
            <img src="wasm-logo.jpg" />
            <h1>Made with WebAssembly</h1>
          </a>
        </div>
        <div class="nav__right">
          <a class="nav__link" href="/">
            Home
          </a>
          <a class="nav__link" href="/about">
            About
          </a>
        </div>
      </div>
    );
  }
}
