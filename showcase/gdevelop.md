---
name: GDevelop
logo_url: https://gdevelop-app.com/static/landing-screen.505f42bb.png
website: https://gdevelop-app.com/
source_url: https://github.com/4ian/GDevelop
description: GDevelop is an open-source, cross-platform game engine designed to be used by everyone.
keywords: graphics game gaming engine gaming emscripten c c++
---

GDevelop is an open-source, cross-platform game engine designed to be used by everyone. The app is a **complete game editor**, allowing to create any kind of 2D games: platformers, puzzles, shoot 'em up, strategy, 8-bit games... Games can be exported to various platforms, from iOS and Android to desktop (Windows, macOS, Linux) and as web games too.

![GDevelop ScreenShot](https://gdevelop-app.com/static/landing-screen.505f42bb.png)

GDevelop uses _Emscripten_ to port pieces from the legacy desktop application (written in C++), to the web! This is quite notable, as it proves that WebAssembly can bring these large C/C++ codebases using Emscripten to the web. The new application is an hybrid app, with the _whole interface made in JavaScript_ with React and the _core of the software written in C++_, compiled with Emscripten.

This allows to reuse an existing, proven codebase while benefiting from the _portability_, _fast iterations_ and _high delivery speed_ of the web.

If you are interested in porting C/C++ libraries, I'd highly recommend [Ben Smith's (binji) SFHTML5 Talk](https://youtu.be/FQJrcX4Ae8A) on porting C projects to the web. This talk is unrelated to GDevelop, but can help drive what goes into porting these types of applications. You can also inspect the source code of GDevelop as an example of a large app running in the browser backed by a C++ core.

## Additional Resources

- [Native Web Apps: React and WebAssembly to Rewrite Native Apps - Florian Rival | ReactiveConf 2019](https://youtu.be/sMfNWIbWUb0)
- [Slides of "Native Web Apps" talk](https://slides.com/florianrival/native-web-apps-2#/)
- [Source code on Github](https://github.com/4ian/GDevelop)
- [Sources of the bindings of the C++ codebase for Emscripten](https://github.com/4ian/GDevelop/tree/master/GDevelop.js)
