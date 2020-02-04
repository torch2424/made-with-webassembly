---
name: Tensorflow
logo_url: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/957px-Tensorflow_logo.svg.png
source_url: https://github.com/tensorflow/tfjs
website: https://www.tensorflow.org/js
description: TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.
keywords: machine learning deep model models ML train training google production library c c++
---

TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.

![tensorflow j s wasm scren shot](https://d33wubrfki0l68.cloudfront.net/cb6fe339569c9e2e3ffe0d3269f14642b5eb2994/ae56f/static/44070d465bc15837e513a2e69afdddde/c35de/before.jpg)

This is a great use case for WebAssembly, as WebAssembly offers predictable performance over JavaScript. Meaning, CPU intensive, or heavy processing tasks like machine learning can greatly benefit from WebAssembly. Which is exactly what happened for Tensorflow.js! They saw ~10x speedup on their predictions when running a WebAssembly backend vs. the old JavaScript implementation. Read the Announcement blog post below for more information!

# Additonal Resources

- [Announcement Blog Post](https://yashints.dev/blog/2019/12/17/tfjs-wasm)
- [Announcement Tweet](https://twitter.com/yashints/status/1207088217838800898)
