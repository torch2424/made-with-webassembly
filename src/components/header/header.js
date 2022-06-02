import { Component } from "preact";

// Header nav bar for the app

export default class Header extends Component {
  constructor() {
    super();

    this.announcementText = (
      <p>
        The maintainer of this website has a{" "}
        <a
          href="https://open.spotify.com/playlist/2L8Gm7T2aJvRj1ih03UeKv"
          target="_blank"
        >
          Spotify Coding Playlist of their Lo-fi Hip Hop beats
        </a>
        !
      </p>
    );

    const cascadiaDate = new Date(2022, 8, 30);
    if (new Date().getTime() < cascadiaDate.getTime()) {
      this.announcementText = (
        <p>
          The maintainer of this website is{" "}
          <a href="https://2022.cascadiajs.com/tickets/79" target="_blank">
            attending and emcee-ing CascadiaJS
          </a>
          , and has a{" "}
          <a
            href="https://open.spotify.com/playlist/2L8Gm7T2aJvRj1ih03UeKv"
            target="_blank"
          >
            Spotify Coding Playlist of their Lo-fi Hip Hop beats
          </a>
          !
        </p>
      );
    }
  }

  render() {
    return (
      <div class="header">
        <div class="announcements">{this.announcementText}</div>
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
