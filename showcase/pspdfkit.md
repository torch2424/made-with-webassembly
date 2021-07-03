---
name: PSPDFKit
logo_url: https://pspdfkit.com/images/shared/pspdfkit-88b0e3a3.png
website: https://pspdfkit.com/
description: PSPDFKit is a framework for working with PDF files on multiple platforms.
keywords: graphics 2d production rendering app application sandbox sand box c c++ emscripten pdf documents engine
---

PSPDFKit is a framework for working with PDF files on multiple platforms.

![PSPDFKit benchmark ScreenShot](https://pbs.twimg.com/media/Dgyw2jZWsAADq2T.jpg)

PSPDFKit uses WebAssembly, as they compile their C PDF rendering engine to WebAssembly, using Emscripten. This is awesome, as it shows off the portability of WebAssembly to bring other languages to the web. They also note that, they brought their engine to WebAssembly for their web framework, as they wanted to render documents directly on the browser, and not reuire a server. As having a browser-only solution, lowered the barrier to entry for their users. Which shows off the performance aspect of WebAssembly. JavaScript, even hyper-optimized solutions like asm.js, realtivley are slower than WebAssembly at computationally intensive tasks. WebAssembly unlocks bringing these tasks and applications that depend on these tasks to the web.

## Additional Resources

- [PSPDFKit - A Real-World WebAssembly Benchmark](https://pspdfkit.com/blog/2018/a-real-world-webassembly-benchmark/)
- [Tweet explaining JavaScript Sandboxing](https://twitter.com/giuseppegurgone/status/1171098425653415936)
