---
name: WasmEdge(Formerly SSVM)
logo_url: https://wasmedge.org/img/wasm-edge-runtime-horizontal-color.svg
website: https://wasmedge.org/
source_url: https://github.com/WasmEdge/WasmEdge
description: WasmEdge(hosted by CNCF) is a lightweight, high-performance, and extensible WebAssembly runtime.
keywords: Cloud-native runtime wasi server server-side c++ ethereum AI Edge
---

WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime. It is one of the [fastest Wasm VM](https://ieeexplore.ieee.org/document/9214403) today. WasmEdge is an official sandbox project hosted by the [CNCF](https://www.cncf.io/). Its use cases include modern web application architectures (Isomorphic & Jamstack applications), microservices on the edge cloud, serverless SaaS APIs, embedded functions, smart contracts, and smart devices.

**Feature**

WasmEdge can run standard WebAssembly bytecode programs compiled from C/C++, Rust, Swift, AssemblyScript, or Kotlin source code. It runs [JavaScript](https://wasmedge.org/book/en/dev/js.html), including 3rd party ES6, CJS, and NPM modules, in a secure, fast, lightweight, portable, and containerized sandbox. It also supports mixing of those languages (e.g., to [use Rust to implement a JavaScript API](https://wasmedge.org/book/en/dev/js/rust.html)), the [Fetch API](https://wasmedge.org/book/en/dev/js/fetch.html), and [Server-side Rendering (SSR) functions on edge servers](https://wasmedge.org/book/en/dev/js/ssr.html).

WasmEdge supports all standard WebAssembly features and many proposed extensions. It also supports a number of extensions tailored for cloud-native and edge computing uses (e.g., the [WasmEdge network sockets](https://wasmedge.org/book/en/dev/rust/networking.html), and the [WasmEdge Tensorflow extension](https://wasmedge.org/book/en/dev/rust/tensorflow.html)).

WasmEdge is an OCI-compatible runtime. So it could be managed and orchestrated by [K8s toolings](https://wasmedge.org/book/en/kubernetes.html), such as K8s, KubeEdge, OpenYurt, and SuperEdge.

Learn more about [technical highlights of WasmEdge](https://wasmedge.org/book/en/intro/features.html).



# Additional Resources

- [WasmEdge book](https://wasmedge.org/book/en/)
- [Dapr-Wasm](https://github.com/second-state/dapr-wasm)
- [quickjs-wasm](https://github.com/second-state/wasmedge-quickjs)
- [Wasm-learning](https://github.com/second-state/wasm-learning)
