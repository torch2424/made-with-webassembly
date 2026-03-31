---
name: RunMat
description: Open-source GPU-accelerated runtime for MATLAB-syntax math. Runs .m files in the browser via WebAssembly and WebGPU with automatic GPU acceleration. No install, no license fees.
keywords: matlab math gpu scientific-computing numerical-computing webgpu runtime plotting linear-algebra rust wasm
logo_url: https://runmat.com/logo.png
website: https://runmat.com/sandbox
source_url: https://github.com/runmat-org/runmat
---

# RunMat

RunMat is an open-source numerical computing runtime that runs MATLAB-syntax .m files with automatic GPU acceleration. The entire runtime — execution engine, JIT compiler, GPU acceleration, garbage collector, and interactive 2D/3D plotting — compiles to WebAssembly and runs in the browser.

GPU acceleration works in the browser through WebGPU. RunMat's fusion engine detects chains of elementwise operations, fuses them into optimized GPU kernels, and dispatches them on whatever GPU the browser has access to. On dense numerical workloads, RunMat achieves up to 131x speedup over NumPy and 7x over PyTorch.

The browser sandbox at [runmat.com/sandbox](https://runmat.com/sandbox) lets you write and execute MATLAB-syntax code instantly — no install, no account, no server. All computation happens locally in your browser via WASM + WebGPU.

RunMat is also available as an [NPM package](https://www.npmjs.com/package/runmat) (`npm install runmat`), allowing developers to embed the full runtime — execution, GPU acceleration, and plotting — into any web application.

Written in Rust. MIT licensed.
