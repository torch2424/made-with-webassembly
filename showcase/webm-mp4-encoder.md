---
name: webm/mp4 Encoder
logo_url: https://w3reality.github.io/async-thread-worker/examples/wasm-ffmpeg/encoder-trim.png
website: https://w3reality.github.io/async-thread-worker/examples/wasm-ffmpeg/index.html
source_url: https://github.com/w3reality/async-thread-worker/tree/master/examples/wasm-ffmpeg
description: An FFmpeg based webm/mp4 encoder using Wasm binaries compiled by Emscripten.
keywords: webm mp4 encoder converter ffmpeg emscripten worker thread
---

An FFmpeg based webm/mp4 encoder using Wasm binaries compiled by Emscripten.

![ScreenShot](https://w3reality.github.io/async-thread-worker/examples/wasm-ffmpeg/encoder-trim.png)

This webm/mp4 encoder was created inspired by [PaulKinlan](https://github.com/PaulKinlan)'s article: "Running FFMPEG with WASM in a Web Worker".

Internally, media transcoding is performed by the wasm/js output pair of `ffmpeg.js` compiled by Emscripten (specifically, mp4-to-webm conversion is done by `ffmpeg-webm.{wasm,js}`, and webm-to-mp4 by `ffmpeg-mp4.{wasm,js}`).

This in-browser app will help you casually transcode video files at hand, but for videos with a larger size, it might be too slow due to FFmpeg itself not running in a multi-threaded mode. Give it a try :)

## Additional Resources

- [Running FFMPEG with WASM in a Web Worker](https://paul.kinlan.me/running-ffmpeg-with-wasm-in-a-web-worker/)
- [ffmpeg.js repo](https://github.com/Kagami/ffmpeg.js)
