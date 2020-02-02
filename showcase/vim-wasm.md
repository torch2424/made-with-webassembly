---
name: vim.wasm
logo_url: https://github.com/rhysd/vim.wasm/raw/wasm/wasm/images/vim-wasm-logo-128x128.png
website: https://rhysd.github.io/vim.wasm/
source_url: https://github.com/rhysd/vim.wasm
description: This project is an experimental fork of Vim editor by @rhysd
keywords: vim text editor emscripten c c++ plus events web api
---

This project is an experimental fork of [Vim editor][https://en.wikipedia.org/wiki/vim_(text_editor)] by [@rhysd][https://github.com/rhysd] to compile it into WebAssembly using [emscripten][https://emscripten.org/] and [binaryen][https://github.com/webassembly/binaryen]. Vim runs on [Web Worker][https://developer.mozilla.org/en-us/docs/web/api/web_workers_api/using_web_workers] and interacts with the main thread via [`SharedArrayBuffer`][https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/sharedarraybuffer].

![vim.wasm screenshot](https://github.com/rhysd/vim.wasm/raw/wasm/wasm/images/readme/main-screen.png)

This is a great example of WebAssembly, as it shows off how you can take large applications in a language other than JavaScript and bring them to the web by writing a thin UI layer in Javascript! Even for programs like Vim, which are highly dependant of system level API access.

# Additional Resources

- [(English) VimConf 2018 (Nov. 24th, 2018)](https://speakerdeck.com/rhysd/vim-ported-to-webassembly-vimconf-2018)
- [(Japanese) Emscripten&WebAssembly night!! #8 (Jul. 24th, 2019)](https://speakerdeck.com/rhysd/vim-compiled-to-webassembly)

Please see the Source Code for additional resources as well!
