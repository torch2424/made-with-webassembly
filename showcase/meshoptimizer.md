---
name: meshoptimizer
source_url: https://github.com/zeux/meshoptimizer
description: Mesh optimization library that makes meshes smaller and faster to render
keywords: gpu gtlf
---

Mesh optimization library that makes meshes smaller and faster to render

When a GPU renders triangle meshes, various stages of the GPU pipeline have to process vertex and index data. The efficiency of these stages depends on the data you feed to them; this library provides algorithms to help optimize meshes for these stages, as well as algorithms to reduce the mesh complexity and storage overhead.

The library provides a C and C++ interface for all algorithms; you can use it from C/C++ or from other languages via FFI (such as P/Invoke). If you want to use this library from Rust, you should use meshopt crate.
