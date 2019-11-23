---
name: MongoDB Compass
logo_url: https://webassets.mongodb.com/_com_assets/cms/movies-o2aafiup8h.png
website: https://www.mongodb.com/products/compass
description: MongoDB Compass is an official electron GUI for managing MongoDB.
keywords: electron 3d mongo production application native rust
---

MongoDB Compass is an official electron GUI for managing MongoDB.

![Mongo d b compass screen shot](https://webassets.mongodb.com/_com_assets/cms/movies-o2aafiup8h.png)

MongoDB Compass has logic for sample field analysis. This was originally written in Javascript, but due to the limitations of Javascript. The operation could only relistically run on about 1000 documents before it got too slow. The team then proceeded to do a rewrite of their sample field analysis in Rust / Wasm. They saw a 40.33x speed increase (121000ms in Javascript, 3000ms in WebAssembly) with their new Wasm implementation. This is because **Wasm is great for computationally intensive tasks**. Please see the talk in Additional resources for more information.

# Additional Resources

- [RustConf 2019 - From Electron, to Wasm, to Rust (Aaand Back to Electron) by Irina Shestak](https://youtu.be/lLzFJenzBng)
