---
name: Asset Melt
source_url: https://github.com/mehditareghi/assetmelt
website: https://assetmelt.com/
description: Asset Melt is a free image compressor that runs entirely in the browser, using WebAssembly builds of MozJPEG, AVIF, WebP, Oxipng and JPEG XL.
keywords: image optimization compression codec mozjpeg avif webp oxipng jpeg xl emscripten rust web worker privacy client side batch zip pwa
---

Asset Melt is a free image compressor that runs entirely in the browser, using WebAssembly builds of MozJPEG, AVIF, WebP, Oxipng and JPEG XL. It needs no account, and image bytes never leave the device.

Asset Melt runs every encoder as WebAssembly inside web workers, so compression happens on the user's own machine instead of on a server. This makes it possible to drop a whole folder of images into the page, compress them in parallel, and download the results as a ZIP without uploading anything. It also supports targeting a file size budget (for example under 50, 100 or 200 KB), which works by re-encoding with the Wasm codecs until the output fits.

Because the codecs are the same C/C++ and Rust libraries used in native tooling, compiled to Wasm, the browser can run the same compression logic offline and privately.
