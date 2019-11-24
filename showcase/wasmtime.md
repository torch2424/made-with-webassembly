---
name: Wasmtime
logo_url: https://hacks.mozilla.org/files/2019/11/featured-image-768x384.png
website: https://wasmtime.dev/
source_url: https://github.com/bytecodealliance/wasmtime
description: Standalone JIT-style runtime for WebAssembly, using Cranelift
keywords: runtime wasi server servers side server-side emscripten language rust c c++ containers docker container containerization
---

Wasmtime is a standalone wasm-only optimizing runtime for WebAssembly and WASI. It runs WebAssembly code outside of the Web, and can be used both as a command-line utility or as a library embedded in a larger application. Uses [Cranelift](https://github.com/bytecodealliance/cranelift) for it's WebAssembly execution.

![Wasmtime screen shot](https://hacks.mozilla.org/files/2019/11/featured-image-768x384.png)

Server side runtimes for WebAssembly highlight the portability of WebAssembly. WebAssembly provides a compile target for multiple languages to be used in many different contexts. This also allows for some level of containerization of your application or library, due to the sandboxed nature of WebAssembly's linear memory, and Capability-based security model.

Wasmtime is a project under the Bytecode Alliance, an industry partnership coming together to forge WebAssembly’s outside-the-browser future by collaborating on implementing standards and proposing new ones.

# Addtional Resources

- [WASI Announcement](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)
- [Bytecode Alliance Announcement](https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/)
