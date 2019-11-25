---
name: Fastq.bio
logo_url: /assets/showcase-assets/fastq-bio.jpg
website: http://www.fastq.bio/v2.0.1/index.html
description: Genomics analysis web tool that saw a 20X speedup thanks to WebAssembly
keywords: c c++ genomics bio analytics data analysis math emscripten infomatics production
---

fastq.bio, an interactive genomics web tool for analyzing genomics data.

![Fastq dot bio ScreenShot](/assets/showcase-assets/fastq-bio.jpg)

fastq.bio was originally implemented as a JavaScript rewrite of a C library so that it could run in the browser. However, this approach had the potential for introducing errors and imposed a huge cost on development. With WebAssembly, they were able to port the industry standard C library so it could run in the browser. Not only did this reduce the risk for errors, but it also led to a 20X speed-up and a better user experience.

The talk listed in the additional resources is highly reccomended!

## Additional Resources

- [fastq.bio, an interactive genomics web tool, Robert Aboukhalil](https://youtu.be/o-2PLhMVBYU)
- [How We Used WebAssembly To Speed Up Our Web App By 20X (Case Study)](https://www.smashingmagazine.com/2019/04/webassembly-speed-web-app/)
