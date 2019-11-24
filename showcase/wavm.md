---
name: WAVM
logo_url: /assets/showcase-assets/wavm.jpg
source_url: https://github.com/WAVM/WAVM
description: WAVM is a WebAssembly virtual machine, designed for use in non-web applications.
keywords: runtime wasi server servers side server-side emscripten language rust c c++ containers docker container containerization
---

WAVM uses [LLVM](https://llvm.org/) to compile WebAssembly code to machine code with close to native performance. It can even beat native performance in some cases, thanks to the ability to generate machine code tuned for the exact CPU that is running the code.

![WAVM screen shot](/assets/showcase-assets/wavm.jpg)

Server side runtimes for WebAssembly highlight the portability of WebAssembly. WebAssembly provides a compile target for multiple languages to be used in many different contexts. This also allows for some level of containerization of your application or library, due to the sandboxed nature of WebAssembly's linear memory, and Capability-based security model.
