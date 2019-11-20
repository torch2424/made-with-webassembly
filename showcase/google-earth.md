---
name: Google Earth
logo_url: https://miro.medium.com/max/1560/0*YxeGMxX6L0I7XvXt.
website: https://g.co/earth/beta
description: Google Earth renders a 3D representation of Earth based primarily on satellite imagery on the Web.
keywords: graphics 3d google production rendering port porting app application native
---

# Google Earth

Google Earth renders a 3D representation of Earth based primarily on satellite imagery on the Web.

![Google Earth Wasm ScreenShot](https://www.continuation-labs.com/projects/d3wasm/img/SC1.jpg)

Google Earth uses emscripten to port pieces from the old native application for Google Earth, to the web! This is quite notable, as it proves that WebAssembly can bring these large C/C++ codebases using Emscripten to the web, to run impressive 3d graphics. They also highlight in their WasmSf Talk (in the additional resources), how this also allowed their code to be more portable across Google in general, because now they can have one C codebase used on different codebases and platforms!

If you are interested in porting C/C++ libraries, I'd highly reccomend [Ben Smith's (binji) SFHTML5 Talk](https://youtu.be/FQJrcX4Ae8A) on porting C projects to the web. This talk is unrealted to Google Earth, but can help drive what goes into porting these types of applications.

## Additional Resources

- [Web / Wasm Launch Article](https://blog.chromium.org/2019/06/webassembly-brings-google-earth-to-more.html)
- [Jordon Mears, Google Earth, WasmSF Talk](https://youtu.be/ms5_0wOl79I)
