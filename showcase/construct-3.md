---
name: Construct 3
logo_url: https://upload.wikimedia.org/wikipedia/commons/7/79/Construct_3_Logo.svg
website: https://www.construct.net/en
description: Construct 3 is a cross-platform game creator.
keywords: graphics game gaming engine gaming audio physics generate generation decoding endcoding native fill the gap missing features feature
---

Construct 3 is a cross-platform game creator.

![Construct 3 ScreenShot](https://s1.construct.net/images/v721/home/new/hero.png)

"Construct 3 uses WebAssembly for audio re-encoding in the editor. In the runtime it uses it for physics simulation, coherent noise generation and audio decoding ( for platforms that don't support opus )." - From the tweet listed in Additional Resources.

First, this use-case shows the performance benefits of WebAssembly relative to JavaScript. The Construct editor runs in the browser, so historically, these computationally itensive tasks had to be written and run in JavaScript. Now with WebAssembly, which is great for running this type of heavy logic in tasks like audio re-encoding, this can be done faster, for a better user-experience for your users.

Another great highlight here, is that WebAssembly can be used to **fill the gaps in APIs or support a web enviornment may be missing**. As we see here, using WebAssembly, Construct was able to build their own Opus decoding engine, which works well in browsers that don't support Opus natively!

## Additional Resources

- [Tweet by Construct engineer explaining how they use Wasm](https://twitter.com/IainShorter/status/1158769551229816833)
