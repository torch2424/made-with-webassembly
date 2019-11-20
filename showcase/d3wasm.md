---
name: D3Wasm
logo_url: https://www.continuation-labs.com/projects/d3wasm/img/SC1.jpg
website: https://wasm.continuation-labs.com/d3demo/
source_url: https://github.com/gabrielcuvillier/d3wasm
description: Online demonstration running Doom 3 Demo. An experimental port of id Tech 4 engine to Emscripten / WebAssembly.
keywords: games doom emscripten c c++ gaming porting 3d graphics
---

# D3Wasm

D3wasm is an experiment to port the [id Tech 4](https://en.wikipedia.org/wiki/Id_Tech_4) engine (aka. “Doom 3 Engine”) to [Emscripten](https://emscripten.org/) / [WebAssembly](https://webassembly.org/) and [WebGL](https://www.khronos.org/webgl/), allowing to run games such as [Doom 3](https://en.wikipedia.org/wiki/Doom_3) inside modern Web Browsers.

![D3Wasm ScreenShot](https://www.continuation-labs.com/projects/d3wasm/img/SC1.jpg)

D3Wasm uses emscripten to port the "Doom 3 engine". This is quite notable, as it proves that WebAssembly can bring these large C/C++ codebases using Emscripten to the web, to run impressive 3d games. The [d3wasm blog post](https://www.continuation-labs.com/projects/d3wasm/) goes deep into detail on how the project works.

If you are interested in porting C/C++ libraries, I'd highly reccomend [Ben Smith's (binji) SFHTML5 Talk](https://youtu.be/FQJrcX4Ae8A) on porting C projects to the web. This talk is unrealted to D3Wasm, but can help drive what goes into porting these types of applications.
