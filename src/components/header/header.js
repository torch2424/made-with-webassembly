import { Component } from "preact";

// Header nav bar for the app

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <nav class="nav">
          <div class="nav__left">
            <a class="nav__title" href="/">
              <img src="/assets/icon.png" alt="WebAssembly Logo" />
              <h1>Made with WebAssembly</h1>
            </a>
          </div>
          <div class="nav__right">
            <a class="nav__link" href="/">
              Home
            </a>
            <a class="nav__link" href="/new-projects">
              New Projects
            </a>
            <a class="nav__link" href="/about">
              About
            </a>
          </div>
          <label for="nav__hamburger__checkbox" class="nav__hamburger">
            <div class="nav__hamburger__line"></div>
            <div class="nav__hamburger__line"></div>
            <div class="nav__hamburger__line"></div>
          </label>
          <input type="checkbox" id="nav__hamburger__checkbox" />
          <div class="mobile-dropdown">
            <a class="mobile-dropdown__link" href="/">
              Home
            </a>
            <a class="mobile-dropdown__link" href="/about">
              About
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
