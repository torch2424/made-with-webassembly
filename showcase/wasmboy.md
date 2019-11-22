---
name: WasmBoy
logo_url: https://wasmboy.app/assets/WasmBoyCartridgeLogo.png
source_url: https://github.com/torch2424/wasmboy
description: Game Boy / Game Boy Color Emulator Library, 🎮written for WebAssembly using AssemblyScript. 🚀Shell/Debugger in Preact. ⚛️
keywords: game boy gameboy emulator assemblyscript emulation library pwa progressive web app web worker service worker benchmark javascript ts typescript type script js gaming
---

WasmBoy is a Game Boy / Game Boy Color Emulator Library, 🎮written for WebAssembly using AssemblyScript. 🚀Shell/Debugger in Preact. ⚛️

![WasmBoy gif video](https://github.com/torch2424/wasmboy/blob/master/docs/images/debuggerDesktopDemo.gif?raw=true)

WasmBoy uses Wasm for it's emulation core, which runs all of the heavy logic of emulating the GameBoy. This is all placed within a web worker, for parallel computation, and leaving the main thread to respond to user input.

WasmBoy directly acheived up to 60% speedup compared to the TypeScript compiled JavaScript implementation on low-end devices by using WebAssembly. Bringing emulation to low-end devices on the web. This was documented in this [benchmark article](https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193).

# Additonal Resources

- [WebAssembly for Javascript Developers - Aaron Turner, WasmBoy & VaporBoy Author](https://youtu.be/ZlL1nduatZQ)
