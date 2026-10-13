---
name: RetouchPi
logo_url: https://retouchpi.com/apple-icon.png
website: https://retouchpi.com/en/retouchpi
description: RetouchPi is a Photoshop-like raster editor that runs in the browser, with its pixel kernels written in Rust and compiled to WebAssembly.
keywords: photo editor image editing retouching psd raw layers rust wasm-bindgen production app browser
---

RetouchPi is a raster editor that runs in a browser tab: 54 tools, layers, masks, channels, ten layer styles, layered PSD read and write, and the file formats most web editors refuse (CMYK, Lab and grayscale, 16-bit PSD and TIFF, HEIC, and camera RAW).

![RetouchPi editor screenshot](https://retouchpi.com/retouchpi/shot-en.webp)

## How it uses WebAssembly

Every per-pixel operation runs in a Rust core compiled to wasm (328 KB as shipped, 52 exported functions behind a numeric-handle ABI). The workspace is two crates:

- `webcompositor-core` - the kernels: blend modes, tone adjustments, colour-space conversion, resampling, convolution, selections, brushes, healing and the compositor. It has no dependencies at all and no wasm-bindgen, so it builds and unit-tests natively with `cargo test`.
- `webcompositor-wasm` - a thin `cdylib` over the core whose only dependency is wasm-bindgen.

The release profile is picked for throughput-bound code: `opt-level = 3`, `lto = "fat"` and `codegen-units = 1`, so the compositor inlines into the blend kernels and LLVM sees the whole program. `panic = "abort"` is deliberate as well - unwinding across the wasm boundary traps anyway, and dropping the landing pads is real bytes in an artifact the browser has to download. The consequence is that the ABI must never panic on caller input: every entry point validates and returns a negative sentinel instead, and a test (`abi_no_panic`) holds that contract.

Two other decisions that shaped the artifact:

- **Image decoding stays out of Rust.** PNG and JPEG decode through the browser's `createImageBitmap`; a Rust decoder would be a second source of truth for the same bytes and would roughly triple the artifact for no gain.
- **There is a TypeScript twin of every kernel,** held bit-identical to the Rust one by a parity contract in the test suite. If the wasm module fails to load (old browser, a proxy that strips the `application/wasm` MIME type), the editor keeps running on the JS twin - slower, but not broken.

Editing a file never leaves the tab: decoding, editing and export all run locally. The one step that goes to a server is AI generation and AI edits, which are metered at 1 credit = 1 US cent.
