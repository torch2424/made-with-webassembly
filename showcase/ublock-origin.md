---
name: uBlock Origin
logo_url: https://lh3.googleusercontent.com/uwCFi5hZM9GcRUbd3y7X3yqJRJrrts7aucQDq3-0ESze2Ma7WSevcpG5iGahTBu-czDZuIxHZg=w128-h128-e365
source_url: https://github.com/gorhill/uBlock
description: An efficient blocker add-on for various browsers. Fast, potent, and lean.
keywords: ad blocker regex trie data processing searching computer science production data
---

An efficient blocker add-on for various browsers. Fast, potent, and lean.

![uBlock Origin Screenshot from Chrome Web Store](https://lh3.googleusercontent.com/D30qjN39EHoi5LYEDUh6CdLUwlYAgTkNKpu6XNRpKrpja-9E2bkoXEh_n3EWZRz8ijF54iVIK38=w640-h400-e365)

uBlock Origin is a very popular add-on, and uses WebAssembly for multiple parts of it's codebase. The most notable being, uBlock Origin uses Wasm for hostname lookup for it's data structures that contain the list of origins it intends to block. This is a great use of WebAssembly, as it offered them better performance, compared to a JavaScript implementation, in the web browser for doing computationally intensive processing tasks over a large set of data. This can be tested in your own browser, by checking out the [benchmark](https://raw.githack.com/gorhill/uBlock/master/docs/tests/hnset-benchmark.html).

## Additional Resources

- [Article outlining the WebAssembly implementation in uBlock Origin](https://www.ghacks.net/2018/12/03/ublock-origin-performance-improvements-thanks-to-wasm-firefox-only-for-now/)
- [Benchmark of JS vs. Wasm implementations](https://raw.githack.com/gorhill/uBlock/master/docs/tests/hnset-benchmark.html)
