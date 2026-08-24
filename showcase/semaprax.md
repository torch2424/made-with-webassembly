---
name: SEMAPRAX
website: https://wavect.io/semaprax/
source_url: https://github.com/wavect/semaprax
description: Experimental agent-native systems programming language with a deterministic WebAssembly Core target
keywords: semaprax programming language compiler rust webassembly wasm wasm32 systems programming semantic graph coding agents
---

[SEMAPRAX](https://wavect.io/semaprax/) is an experimental systems programming language designed around stable semantic identity, a versioned semantic graph, and evidence-gated changes for coding agents. Its compiler is implemented in Rust and lowers validated HIR through a shared target-neutral cleanup model to native and WebAssembly backends.

The current Web target emits a WebAssembly Core module plus a generated browser package. Selected stable-ID scalar functions can be exposed through bounded JavaScript and TypeScript bindings, and compiler-owned target-evidence reports bind the emitted Wasm bytes and structural validation results by digest.

SEMAPRAX is open source under Apache-2.0. Version 0.2 is pre-alpha research software: the Wasm execution slice is real and tested, but general browser SDK support, public Component Model output, and production-readiness are not claimed. The [source and examples](https://github.com/wavect/semaprax) document the currently supported surface.
