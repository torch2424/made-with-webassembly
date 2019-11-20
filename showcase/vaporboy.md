---
name: VaporBoy
logo_url: https://vaporboy.net/assets/vaporboy/512/vaporboyvhs.png
website: https://vaporboy.net/
source_url: https://github.com/torch2424/wasmboy
description: A Gameboy / Gameboy Color Emulator PWA for Android, iOS, Windows, MacOS, and Linux. ⚛️ Powered by wasmBoy. 🎮
keywords: game boy gameboy emulator assemblyscript emulation library pwa progressive web app web worker service worker benchmark javascript ts typescript type script js
---

# VaporBoy

A Gameboy / Gameboy Color Emulator PWA for Android, iOS, Windows, MacOS, and Linux. ⚛️ Powered by wasmBoy. 🎮

![VaporBoy gif video](https://github.com/torch2424/vaporBoy/raw/master/readme_assets/VaporboyWalkThrough.gif)

VaporBoy is a PWA that wraps around [WasmBoy](https://github.com/torch2424/wasmBoy). WasmBoy uses Wasm for it's emulation core, which runs all of the heavy logic of emulating the GameBoy. This is all placed within a web worker, for parallel computation, and leaving the main thread to respond to user input.

WasmBoy directly acheived up to 60% speedup compared to the TypeScript compiled JavaScript implementation on low-end devices by using WebAssembly. Bringing emulation to low-end devices on the web. This was documented in this [benchmark article](https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193).
