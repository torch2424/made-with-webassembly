---
name: OpenCV
logo_url: https://docs.opencv.org/3.4/opencv-logo-small.png
website: https://opencv.org/
source_url: https://github.com/opencv/opencv
description: Open Source Computer Vision Library
keywords: open source production computer vision big data processing graphics math computer science deep learning machine learning image processing emscripten c++ c plus
---

OpenCV is a very popular computer vision and image analysis library

![OpenCV Face Detection](https://docs.opencv.org/3.0-beta/_images/facerec_video.png)

OpenCV is built on top of Emscripten, which is a C++ to asm.js / WebAssembly toolchain. OpenCV is extremely dependant on performance, and when running on the web, this is even more apparent. OpenCV is a great use case for WebAssembly, as WebAssembly offers predictable performance over JavaScript, especially in use cases that require heavy processing. OpenCV switching to WebAssembly offered dramatic performance improvements, especially when used with upcoming Wasm features, like SIMD and threads. See the additional resources for more information.

## Additional Resources

- [Oh the things you’ll compile - modern WebAssembly (Chrome Dev Summit 2019) - OpenCV highlight](https://www.youtube.com/watch?v=kZrl91SPSpc&feature=youtu.be&t=650)
- [OpenCV.js introduction](https://docs.opencv.org/3.4/df/d0a/tutorial_js_intro.html)
