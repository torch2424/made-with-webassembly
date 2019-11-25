---
name: Binjgb
logo_url: https://github.com/binji/binjgb/raw/master/images/debugger.png
source_url: https://github.com/binji/binjgb
website: http://binji.github.io/binjgb/
description: Gameboy emulator implemented in C. Runs in the browser using WebAssembly.
keywords: game boy gameboy emulator c c++ emscripten emulation library benchmark gaming
---

Gameboy emulator implemented in C. Runs in the browser using WebAssembly.

![binjgb debugger screenshot](https://github.com/binji/binjgb/raw/master/images/debugger.png)

Binjgb uses Wasm for it's emulation core, which runs all of the compuationally heavy logic of emulating the GameBoy. This is written in C, and compiled to WebAssembly using [Emscripten](https://emscripten.org/).

Gameboy emulation on the web, has historically been for desktop web and high-end mobile devices that could handle heavy computation that is required for emulation. But, with WebAssembly, this type of emulation can be run faster, and thus run on lower-end devices. Which I (Aaron Turner), have personally tested Binjgb to do this, and is awesome for people who could not afford a web-enabled devices with the performance characteristics that were required the old JavaScript GameBoy emulators.

Though it is not a direct WebAssembly vs. JavaScript performance compariosn. Binjgb outperforms the most popular JavaScript Gameboy emualtor, [GameBoy Online](https://github.com/taisel/GameBoy-Online). This can be tested on the "Enable of emulators" on [WasmBoy Benchmark](https://wasmboy.app/benchmark/).
