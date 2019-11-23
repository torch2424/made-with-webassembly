---
name: Ebay Mobile Web Barcode Scanner
logo_url: https://miro.medium.com/max/780/1*u1owB0nCcAgTfo9Fyb3O2Q.png
website: https://medium.com/ebaytech/webassembly-at-ebay-a-real-world-use-case-ef888f38b537
description: Ebay is an ecommerce platform, that used WebAssembly to bring barcode scanning to the mobile web app.
keywords: graphics image detection ecommerce native port emscripten c c++
---

Ebay is an ecommerce platform, that used WebAssembly to bring barcode scanning to the mobile web app.

![Ebay Wasm ScreenShot](https://miro.medium.com/max/780/1*u1owB0nCcAgTfo9Fyb3O2Q.png)

Ebay used WebAssembly to bring their barcode scanning feature found in their native, Android and iOS, apps to their mobile web app! Originally, Ebay had an implementation of this feature in JavaScript, but since the task was very computationally intensive, the experience was very inaccurate, and extremely slow. But since WebAssembly is suited for these tasks, Ebay was able to port a fast, accurate Barcode scanning library written in C++, using Emscripten. Thus, they were able to bring the C++ library to the web, and offer a great user experience!

## Additional Resources

- [Ebay Wasm Barcode Scanner Article](https://medium.com/ebaytech/webassembly-at-ebay-a-real-world-use-case-ef888f38b537)
