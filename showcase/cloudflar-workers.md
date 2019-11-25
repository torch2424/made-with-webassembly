---
name: Cloudflare Workers
logo_url: https://res.cloudinary.com/practicaldev/image/fetch/s--Fp3OdXT5--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/organization/profile_image/788/7908fbf4-e280-4f73-961b-3d77b51cac1d.png
website: https://www.cloudflare.com/products/cloudflare-workers/
description: Cloudflare Workers provides a lightweight JavaScript and WebAssembly execution environment for serverless applications.
keywords: runtime server side server-side serverless emscripten language rust c c++ go golang ruby javascript js assemblyscript
---

Cloudflare Workers provides a lightweight JavaScript and WebAssembly execution environment for serverless applications.

![Cloudflare workers screen shot](https://blog.cloudflare.com/content/images/2018/12/image-16.png)

Cloudflar workers uses WebAssembly, as it offers a JavaScript execution environment, that can instantiate and run WebAssembly. This is awesome, as serverless applications are usually contrained by their execution time. Meaning, tht using WebAssembly for computationally intensive tasks, rather than JavaScript, can greatly reduce execution time. This is great for both budget, as well as doing something like manipualting images on demand per a network request to a server.

# Additional Resources

- [Wrangler - Cloudflare Workers CLI Tool](https://github.com/cloudflare/wrangler)
- [Rust, WebAssembly, and the future of Serverless by Steve Klabnik](https://youtu.be/CMB6AlE1QuI)
