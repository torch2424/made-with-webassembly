---
name: RustPython
logo_url: https://github.com/RustPython/RustPython/raw/master/logo.png
website: https://rustpython.github.io/demo/
source_url: https://github.com/RustPython/RustPython
description: A Python-3 (CPython >= 3.5.0) Interpreter written in Rust
keywords: game boy gameboy emulator assemblyscript emulation library pwa progressive web app web worker service worker benchmark javascript ts typescript type script js gaming
---

RustPython is a Python-3 (CPython >= 3.5.0) Interpreter written in Rust. Runs in the browser using WebAssembly. Runs standalone on WebAssembly runtimes using [WASI](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/).

![RustPython online demo screenshot](/assets/showcase-assets/rust-python.jpg)

RustPython uses WebAssembly as it offers a WebAssembly build by using the great tooling for WebAssembly in the rust ecosystem. This is awesome, as it allows for running Python in JavaScript Environments! This really shows off how WebAssembly has the ability to bring more languages to the web! Also, there are WASI builds of the interpreter, meaning the interpreter can be run as a CLI tool in Server Side WebAssembly runtimes like [Wasmer](https://wasmer.io/), [Wasmtime](https://wasmtime.dev/), or even in the browser with [Wasmer-JS](https://github.com/wasmerio/wasmer-js)! Another thing, rustpython is distributed through [WAPM](https://wapm.io/package/rustpython), Which highlights the portability of WebAssembly, in its ability to be easily bundled and distributed.
