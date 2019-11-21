import { Component } from "preact";

// Main content for About page for the app

export default class About extends Component {
  render() {
    return (
      <div class="about">
        About
        <div>
          Made by{" "}
          <a href="https://aaronthedev.com/">Aaron Turner (torch2424)</a> with
          help from <a href="https://www.loxodrome.io/">James Milner</a> and
          some{" "}
          <a href="https://github.com/torch2424/made-with-webassembly/graphs/contributors">
            Amazing Contributors
          </a>
          .
        </div>
        <div class="footer__additional-links">
          <div>
            <a href="/all-projects">All Projects</a>
          </div>
          <div>
            <a href="https://github.com/torch2424/made-with-webassembly">
              Source Code (Github)
            </a>
          </div>
          <div>
            <a href="https://oss.ninja/mit?organization=Aaron%20Turner">
              License
            </a>
          </div>
        </div>
      </div>
    );
  }
}
