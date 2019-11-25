---
name: Wheel of WebAssembly
logo_url: https://github.com/boyanio/wasm-wheel/raw/master/assets/wasm-wheel-screenshot.jpg
website: https://boyan.io/wasm-wheel/
source_url: https://github.com/boyanio/wasm-wheel/
description: The Wheel of WebAssembly aims to show the diversity of languages that compile to WebAssembly in a fun way.
keywords: wasm programming language example examples webassembly playground
---

The Wheel of WebAssembly aims to show the diversity of languages that compile to WebAssembly in a fun way.

![Wheel of WebAssembly screenShot](https://github.com/boyanio/wasm-wheel/raw/master/assets/wasm-wheel-screenshot.jpg)

Each wheel part is compiled to WebAssembly from a different language and is loaded completely independently (using JavaScript). The compiled code for each wheel part contains two functions: `name()` - returning the name of the wheel part (i.e., the programming language) and `feelingLucky()` - returning a random number from 1 to 100. The project aims to show how simple code can be compiled to WebAssembly for different programming languages.

## Additional Resources

- [Using Docker multi-stage builds to produce WebAssembly](https://boyan.io/docker-multi-stage-builds-webassembly/)
