---
name: WASM-4
logo_url: https://wasm4.org/img/logo.png
source_url: https://github.com/aduros/wasm4
website: https://wasm4.org
description: WASM-4 is a virtual game console for building retro games directly in WebAssembly.
keywords: go rust golang gamedev typescript game-development webassembly wasm retrogaming 2d-game-engine assemblyscript fantasy-console fantasy-computer
---

<h1 align="center">
  <br>
  <a href="https://wasm4.org"><img src="https://wasm4.org/img/logo.svg" alt="WASM-4 Logo" width="200"></a>
  <br>
  WASM-4
  <br>
</h1>

<h3 align="center">Build retro games using WebAssembly for a fantasy console</h3>

## About

**WASM-4** is a low-level fantasy game console for building small games with WebAssembly. Game
cartridges (ROMs) are small, self-contained `.wasm` files that can be built with any programming
language that compiles to WebAssembly.

## Key Features

- **No Glue Code**: If you've ever tried to write even a simple "Hello World"
  with WebAssembly before, you'll know it usually involves writing a bunch of
  JS and HTML glue. WASM-4 removes all of that, games interface directly with
  the system through a small API.

- **Minimalist**: Fantasy consoles force developers to work with limited resources.
  This makes them simple to learn, and easier to focus on finishing your game.

- **Language Agnostic**: Use any programming language, as long as it can compile to WebAssembly. Out of
  the box we currently support: AssemblyScript, C/C++, Rust, Go.

- **Portable**: WASM-4 is designed to run on any device that can execute WebAssembly, even outside of
  the web! We're planning a lightweight implementation written in C that will run even on a potato.

## 🚀 60 Second Quickstart

```shell
# Install the w4 command
npm install -g wasm4

# Create a project
w4 new --assemblyscript hello-world

# Setup toolchain
cd hello-world
npm install

# Build and run your game!
npm run build
w4 run build/cart.wasm
```

For more info and guides, check the [full documentation](https://wasm4.org/docs).

## 🎮 Hardware Specs

- Display: 160x160 pixels, 4 customizable colors, updated at 60 Hz.
- Memory: 64 KB linear RAM, memory-mapped I/O, save states.
- Cartridge Size Limit: 64 KB.
- Input: Keyboard, mouse, touchscreen, up to 4 gamepads.
- Audio: 2 pulse wave channels, 1 triangle wave channel, 1 noise channel.
- Disk Storage: 1024 bytes.
