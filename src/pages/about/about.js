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
        <h2>When should I generally use WebAssembly?</h2>
        <p>
          My favorite answer to this question is from the{" "}
          <a href="https://docs.assemblyscript.org/faq#is-webassembly-always-faster">
            AssemblyScript Documentation
          </a>
          . I'd like to provide one that is along the same lines, but remember,{" "}
          <i>
            this is a generalization and contains some metaphors. This section,
            and by looking through the projects on Made With WebAssembly can
            help you make a decision for your use case
          </i>
          .
          <br />
          <br />A good rule of thumb is:{" "}
          <b>
            Use WebAssembly for computationally intensive tasks, such as games,
            image manipulation, math, physics, audio effects, etc...
          </b>
          .
          <br />
          <br />
          You still generally want to use Javascript for a lot of things on the
          web. Such as Dom Manipulation (modifying/building views and UIs),
          blogs, ecommerce websites, using most Web APIs, etc...
          <br />
          <br />
          I like to think about WebAssembly being another tool in a developer's
          toolbelt. For example, a web developer's tools are HTML (Declaring
          UI), CSS (Styling UI), JavaScript (Adding functionality to a UI), and
          now WebAssembly (Processing heavy tasks, to give results back to the
          UI)! In which using the "right tool for the job" is what will give you
          the best results for your project, and help it be the best it can be!
          <br />
          <br />
          If you are interested in trying out / learning WebAssembly yourself,
          you can checkout{" "}
          <a href="https://wasmbyexample.dev/">WasmByExample</a>.
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
