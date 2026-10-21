---
name: NeoQCP
logo_url: https://avatars.githubusercontent.com/u/45902222?s=200
source_url: https://github.com/SciQLop/NeoQCP
website: https://sciqlop.github.io/NeoQCP/
description: NeoQCP is a fast, interactive 2D plotting library for Qt 6, drawn on the GPU. Its C++ gallery runs in the browser through WebAssembly and WebGL.
keywords: plotting charts data visualization science graphics 2d c c++ qt emscripten webgl open source
---

NeoQCP is a fast, interactive 2D plotting library for Qt 6 applications. It is a modernized fork of QCustomPlot that draws on the GPU and plots millions of points without copying them.

![NeoQCP gallery: magnetic field time series above an ion spectrogram](https://raw.githubusercontent.com/SciQLop/NeoQCP/main/docs/images/gallery-space-weather.png)

NeoQCP uses WebAssembly to run the same C++ code on the desktop and in the browser. It is built with Emscripten and Qt for WebAssembly. Its renderer goes through Qt's QRhi, which uses Vulkan, Metal or Direct3D on the desktop and WebGL in the browser. The online gallery is the library's own example code, compiled to Wasm: you can pan, zoom and select through ten million points without installing anything.

NeoQCP draws the plots of [SciQLop](https://github.com/SciQLop/SciQLop), a tool for browsing space plasma data from satellites.

## Additional Resources

- [Live gallery](https://sciqlop.github.io/NeoQCP/)
- [Documentation](https://neoqcp.readthedocs.io/en/latest/)
- [Source code](https://github.com/SciQLop/NeoQCP)
