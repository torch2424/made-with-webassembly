---
name: JavaScriptCore
logo_url: https://avatars0.githubusercontent.com/u/6458?s=400&v=4
website: https://mbbill.github.io/JSC.js/
source_url: https://github.com/mbbill/JSC.js
description: JSC.js is a JavaScript engine which can run on top of you browser’s JavaScript engine.
keywords: programming code language engine runtime interpreter emscripten c c++ production sandbox
---

> JSC.js is a JavaScript engine which can run on top of you browser’s JavaScript engine. It’s based on the JavaScript engine (JavaScriptCore) of WebKit and compiled to wasm with emscripten. Therefore, if you’re using Safari, you are literally running its JavaScript engine on top of itself.

- [JSC.js website introduction](https://mbbill.github.io/JSC.js/)

![JSC.js screenshot](https://sites.google.com/site/mbbill/jsc3.png)

This is a great use of WebAssembly, as it shows off the portability of WebAssembly! In that you can take a pre-existing project not written and C, and bring it to the web!

And this project shows off a very unique case for WebAssembly as well, which is sandboxing! For example, let's say you want to run untrusted JavaScript on your webpage? This is not possible, as Function and eval in Javascript would allow access to objects like window, and can completely ruin a user experience. However, if you use a WebAssembly compiled JavaScript Engine, that runs in he browser. You can then safely run untrusted javascript in this other engine (other than the one built in), that will not have access to the JavaScript currently running on the page! In fact, this is [exactly what another project, PSPDFKit is doing](/showcase/pspdfkit).
