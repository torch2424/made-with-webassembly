---
name: Fluence Compute Engine
website: https://github.com/fluencelabs/fce
description: engine for running multi-module WebAssembly applications with interface-types support
keywords: interface-types multi-module shared-nothing
---

Engine for running multi-module WebAssembly applications with interface-types support

Fluence Compute Engine is intended to run multi-module WebAssembly applications with interface-types like interfaces. It supports shared-nothing linking scheme with help of handy [rust-sdk](https://github.com/fluencelabs/rust-sdk). The sdk allows passing by value the following types: `bool`, `u8`, `u16`, `u32`, `u64`, `i8`, `i16`, `i32`, `i64`, `f32`, `f64`, `String`, `Vec<_>`, `struct` (inner structs and vectors of element such as `Vec<Vec<Vec<String>` is also possible).

 Some examples can be found [here](https://github.com/fluencelabs/fce/tree/master/examples).   

## Additional Resources

- [fce repo](https://github.com/fluencelabs/fce)
- [rust sdk](https://github.com/fluencelabs/rust-sdk)
