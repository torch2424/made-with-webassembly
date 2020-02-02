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
          help from <a href="https://www.loxodrome.io/">James Milner</a>,{" "}
          <a href="https://twitter.com/beriberikix">
            Jonathan Beri (beriberikix)
          </a>{" "}
          and some{" "}
          <a href="https://github.com/torch2424/made-with-webassembly/graphs/contributors">
            amazing Contributors
          </a>
          . With some additonal input from{" "}
          <a href="https://twitter.com/AlexStLouis10">Alex St. Louis</a>.
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
        There are two key features of WebAssembly. <b>Performance</b> and{" "}
        <b>Portability</b>. Here we will cover how and why these key features of
        WebAssembly can be used effectively for your application.
        <h3>Performance</h3>
        When we speak about performance here, we are reffering to{" "}
        <b>performance in JavaScript environments</b>. This is not a comparison
        to native speeds, as that is another question in itself. My favorite
        answer to this question is from the{" "}
        <a href="https://docs.assemblyscript.org/faq#is-webassembly-always-faster">
          AssemblyScript Documentation
        </a>
        . I'd like to provide one that is along the same lines, but remember,{" "}
        <i>
          this is a generalization and contains some metaphors. This section,
          and by looking through the projects on Made With WebAssembly can help
          you make a decision for your use case
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
        web. Such as Dom Manipulation (modifying/building views and UIs), blogs,
        ecommerce websites, using most Web APIs, etc...
        <br />
        <br />
        I like to think about WebAssembly being another tool in a developer's
        toolbelt. For example, a web developer's tools are HTML (Declaring UI),
        CSS (Styling UI), JavaScript (Adding functionality to a UI), and now
        WebAssembly (Processing heavy tasks, to give results back to the UI)! In
        which using the "right tool for the job" is what will give you the best
        results for your project, and help it be the best it can be!
        <br />
        <br />
        If you would like to see some numbers or benchmarks on comparing
        JavaScript and WebAssembly in a real world use case, I'd reccomend the{" "}
        <a href="https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193">
          WasmBoy Benchmark Article
        </a>{" "}
        and the{" "}
        <a href="https://developers.google.com/web/updates/2019/02/hotpath-with-wasm">
          Replacing a hot path in your app's JavaScript with WebAssembly
        </a>
        . There are many more benchamrks out there you can search for.
        <h3>Portability</h3>
        WebAssembly is extremely portable. This can be explained in multiple
        scenarios:
        <ul>
          <li>
            WebAssembly allows bringing other languages to JavaScript
            environments like the web browser, and node js. For Example,
            browsing the projects here, you will see a lot of huge C/C++
            applications that can now run on the web, by using WebAssembly as
            its compile target. Also, languages like Rust can have specialized
            tooling and support for WebAssembly, to offer a great experience for
            writing for the web, in languages that historically could not be run
            on the web.
          </li>
          <li>
            Standalone Server side runtimes like{" "}
            <a href="https://wasmer.io/">Wasmer</a>,{" "}
            <a href="https://github.com/bytecodealliance/wasmtime">Wasmtime</a>,
            etc.. allow for running WebAssembly on the server, as it's own
            application, or embedded in a host application written in a variety
            of languages. This is great, since you can{" "}
            <b>
              write business logic, or computationally intensive algorithms once
              and have a common shared implementation that is run in a
              lightweight runtime in your applicaiton
            </b>
            . Also, with the{" "}
            <a href="https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/">
              WebAssembly System interface
            </a>
            , you can write entire system level applications (File manipulation,
            servers once the standard is more developed, etc..) in just
            WebAssembly that is then run in a runtime. And due to the sandboxing
            nature of WebAssembly (Linear memory, capability based security,
            etc...), WebAssembly also becomes a viable way to containerize
            applications, as noted by{" "}
            <a href="https://twitter.com/solomonstre/status/1111004913222324225?lang=en">
              Solomon Hykes
            </a>
            , the co-creator of <a href="https://www.docker.com/">Docker</a>.
          </li>
          <li>
            WebAssembly can easily be bundled and distributed. Because of this,
            there is now the{" "}
            <a href="https://wapm.io/">WebAssembly Package Manager (WAPM)</a>{" "}
            which allows for publishing and distributing WebAssembly packages to
            be run standalone on WebAssembly runtimes. Also, current packages
            managers like <a href="https://youtu.be/iRV4VemBMzc">NPM</a> already
            support and push for WebAssembly to be a part of their JavaScript
            packages.
          </li>
        </ul>
        TL;DR WebAssembly is portable as it provides a common ground for
        multiple languages to come to the web, it can be run in all kinds of
        host applications and platforms using runtimes, and WebAssembly can be
        easily bundles into new and existing package managers.
        <br />
        <br />
        Thus, you may want to use WebAssembly,{" "}
        <b>
          if you want your library or code to be flexible, sandboxed, and easily
          bundled, to be shared across many platforms
        </b>
        .
        <br />
        <br />
        If you are interested in trying out / learning WebAssembly yourself, you
        can checkout <a href="https://wasmbyexample.dev/">WasmByExample</a>.
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
        <h2>WebAssembly Logo</h2>
        <p>
          Just a quick shoutout to{" "}
          <a
            href="https://github.com/carlosbaraza"
            rel="noopener"
            target="_blank"
          >
            Carlos Baraza
          </a>
          . Who created the{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/carlosbaraza/web-assembly-logo"
          >
            WebAssembly Logo
          </a>{" "}
          under a Creative Commons Universal license. The logo is used in the
          site favicon and title header.
        </p>
      </div>
    );
  }
}
