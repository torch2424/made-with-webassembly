---
name: Quantified Self
logo_url: /assets/showcase-assets/quantified-self.png
source_url: https://github.com/jimmykane/quantified-self
website: https://quantified-self.io/home
description: Quantified Self is a tool for importing viewing and comparing tcx, fit and json files from activity trackers and smart-watches.
keywords: compression zip tar decompression decompress compress file handling unzip production library zlib
---

Quantified Self is a tool for importing viewing and comparing tcx, fit and json files from activity trackers and smart-watches.

![quantified self scren shot](/assets/showcase-assets/quantified-self.png)

Quantified Self is using WebAssembly, as they need it to uncompress the compressed files uploaded to their service that contains the data that is viewed and compared. This is a great use case for WebAssembly, as WebAssembly offers predictable performance over JavaScript. Meaning, CPU intensive, or heavy processing tasks like (de)compression can greatly benefit from WebAssembly. Quantified Self saw ~1.5x speedup on decompressing files when running a WebAssembly implementation vs. the old JavaScript implementation!

# Additonal Resources

- [Benchmark Tweet from the author](https://twitter.com/JimmyKane9/status/1210936386561413121?s=19)
