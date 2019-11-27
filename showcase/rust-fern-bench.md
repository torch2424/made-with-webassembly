---
name: Rust Fern Bench
logo_url: https://github.com/w3reality/threelet/raw/master/examples/rust-fern-bench/rust-fern-bench.png
website: https://w3reality.github.io/threelet/examples/rust-fern-bench/index.html
source_url: https://github.com/w3reality/threelet/tree/master/examples/rust-fern-bench
description: WebVR compatible 3D app for benchmarking fractal computation with Rust and WebAssembly.
keywords: rust wasm webvr webgl 3d fractal benchmark
---

WebVR compatible 3D app for benchmarking fractal computation with Rust and WebAssembly.

![ScreenShot](https://github.com/w3reality/threelet/raw/master/examples/rust-fern-bench/rust-fern-bench.png)

Rust Fern Bench is a handy benchmark utility that can measure and visualize the performance of Rust WebAssembly in comparison with its JavaScript counterpart.

The benchmark task given is to generate (thousands/millions of) WebGL vertices representing fern fractal leaves. We assign this CPU intensive task to a background Web Worker, so that we make sure this computation will not affect the app's 3D UI rendering in the main thread.

Through this app, we are trying to empirically show a first step toward the future of WebVR/XR apps, where they will be orchestrating multiple Web Workers each embeding a high performance Wasm binary.

## Additional Resources

- [Barnsley fern](https://en.wikipedia.org/wiki/Barnsley_fern)
