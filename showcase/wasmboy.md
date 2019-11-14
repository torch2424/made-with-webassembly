---
name: WasmBoy
logo_url: https://camo.githubusercontent.com/a8cb9025f16a7c9f38ebaa3685fb6788e2acacbd/68747470733a2f2f66696c65732e6161726f6e7468656465762e636f6d2f242f7737367232
source_url: https://github.com/torch2424/wasmboy
short_description: Game Boy / Game Boy Color Emulator Library, 🎮written for WebAssembly using AssemblyScript. 🚀Shell/Debugger in Preact. ⚛️
keywords: game boy gameboy emulator assemblyscript emulation library pwa progressive web app web worker service worker benchmark javascript ts typescript type script js
---

# WasmBoy

WasmBoy is a Game Boy / Game Boy Color Emulator Library, 🎮written for WebAssembly using AssemblyScript. 🚀Shell/Debugger in Preact. ⚛️

![WasmBoy gif video](https://github.com/torch2424/wasmboy/blob/master/docs/images/debuggerDesktopDemo.gif?raw=true)

WasmBoy uses Wasm for it's emulation core, which runs all of the heavy logic of emulating the GameBoy. This is all placed within a web worker, for parallel computation, and leaving the main thread to respond to user input.

WasmBoy directly acheived up to 60% speedup compared to the TypeScript compiled JavaScript implementation on low-end devices by using WebAssembly. Bringing emulation to low-end devices on the web. This was documented in this [benchmark article](https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193).
