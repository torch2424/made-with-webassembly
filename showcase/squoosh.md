---
name: Squoosh
logo_url: https://squoosh.app/c/icon-demo-logo-326ed9b6.png
source_url: https://github.com/GoogleChromeLabs/squoosh/tree/master/src/codecs
website: https://squoosh.app/
description: Squoosh is an image compression web app by Google, that allows you to dive into the advanced options provided by various image compressors.
keywords: image optimization manipulation codec rust emscripten assemblyscript google production pwa progressive web app web worker service worker
---

Squoosh is an image compression web app by Google, that allows you to dive into the advanced options provided by various image compressors.

![squoosh screen shot](https://cdn.netlify.com/143019fb20f93302e329664ed32f7fe9bd463a0d/34752/img/blog/featured-site-screengrab-squoosh.jpg)

Squoosh uses Emscripten, Rust, and AssemblyScript for various image codecs, and image manipulation algorithms used by the app. All of the image processing is computationally intensive and done on the users devices. WebAssembly makes this possible, by making the heavy tasks feel quick for users, with fast compression times.

# Additonal Resources

- [Complex JS-heavy Web Apps, Avoiding the Slow (Chrome Dev Summit 2018)](https://youtu.be/ipNW6lJHVEs)
- [Replacing a hot path in your app's JavaScript with WebAssembly](https://developers.google.com/web/updates/2019/02/hotpath-with-wasm)
