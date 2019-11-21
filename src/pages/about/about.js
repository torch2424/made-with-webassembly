import { Component } from "preact";

// Main content for About page for the app

export default class About extends Component {
  render() {
    return (
      <div class="about">
        <h1>About</h1>
        <h2>Made with WebAssembly</h2>
        <p>
          Made with WebAssebmly is an Open Source showcase of awesome production
          applications, side projects, and use cases made with WebAssembly (
          Wasm ). 👷
        </p>
        <h2>Author(s)</h2>
        <p>
          Made with WebAssembly is a project by{" "}
          <a href="https://aaronthedev.com/">Aaron Turner (torch2424)</a> with
          help from <a href="https://www.loxodrome.io/">James Milner</a> and
          some{" "}
          <a href="https://github.com/torch2424/made-with-webassembly/graphs/contributors">
            amazing Contributors
          </a>
          .
          <br />
          <br />
          With some additonal input from{" "}
          <a href="https://twitter.com/beriberikix">
            Jonathan Beri (beriberikix)
          </a>{" "}
          and <a href="https://twitter.com/AlexStLouis10">Alex St. Louis</a>.
        </p>
        <h2>Motivation</h2>
        <p>
          After several Twitter threads (
          <a href="https://twitter.com/torch2424/status/1194557590765596673">
            1
          </a>
          ,{" "}
          <a href="https://twitter.com/JamesLMilner/status/1151824280914731008">
            2
          </a>
          , ...) on highlighting use cases, projects, and companies in
          production using WebAssembly. Myself and a few other Wasm communitty
          members thought it'd be a great idea to have a dedicated place to find
          projects using WebAssembly, and highlight what WebAssembly can be used
          for! We were hoping it could be easy to comb through, and provide
          additional context on why/how individual project are using Wasm. 👍🏾
        </p>
        <h2>Proposing Changes to the Website</h2>
        <p>
          If you would like to add/edit/remove anything from this website,
          please see the{" "}
          <a href="https://github.com/torch2424/made-with-webassembly#contributing">
            contribution docs
          </a>{" "}
          on the project repo. You can also{" "}
          <a href="https://github.com/torch2424/made-with-webassembly/issues">
            open an issue on the repo
          </a>
          , to start a discussion or propose changes there as well!
        </p>
        <h2>Privacy</h2>
        <p>
          Google Analytics is used on Made with WebAssembly, and is only used to
          record{" "}
          <a href="https://support.google.com/analytics/answer/6004245?ref_topic=2919631">
            Basic visit data
          </a>
          , as the script is only loaded.
        </p>
        <h2>Made with WebAssembly Resources</h2>
        <ul>
          <li>
            <a href="/all-projects">All Projects Listing</a>
          </li>
          <li>
            <a href="https://github.com/torch2424/made-with-webassembly">
              Source Code (Github)
            </a>
          </li>
          <li>
            <a href="https://oss.ninja/mit?organization=Aaron%20Turner">
              License
            </a>
          </li>
        </ul>
        <h2>Additional WebAssembly Resources</h2>
        <ul>
          <li>
            <a href="https://worldofwasm.bubbleapps.io/">World of Wasm</a> -
            Another awesome WebAssembly Showcase.
          </li>
          <li>
            <a href="https://wasmbyexample.dev/">WasmByExample</a> - Set of
            hands-on introduction examples and tutorials for WebAssembly (Wasm).
          </li>
          <li>
            <a href="https://github.com/AssemblyScript/assemblyscript">
              AssemblyScript
            </a>{" "}
            - TypeScript(like) to WebAssembly compiler.
          </li>
          <li>
            <a href="https://rustwasm.github.io/book/">Rust/Wasm Book</a> - Book
            on getting started with Rust and WebAssembly.
          </li>
          <li>
            <a href="https://emscripten.org/">Emscripten</a> - Toolchain for
            compiling C / C++ to WebAssembly.
          </li>
          <li>
            <a href="https://github.com/wasienv/wasienv">WasiEnv</a> - Toolchain
            for compiling C / C++ to WebAssembly and WASI.
          </li>
        </ul>
      </div>
    );
  }
}
