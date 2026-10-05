---
name: BlockWerk
logo_url: https://blockwerk.tech/pwa-512x512.png
website: https://blockwerk.tech
description: BlockWerk is a browser-based block diagram simulator with a Rust/WebAssembly solver engine, for control systems and dynamic system modelling.
keywords: simulation engineering control-systems block-diagram solver rust scientific modelling simulink
---

BlockWerk is a browser-based block diagram simulator for control systems and dynamic system modelling — the kind of work normally done in desktop tools like Simulink. It runs entirely client-side, with no install and no account.

![BlockWerk canvas screenshot](https://blockwerk.tech/landing-screenshot.webp)

The numerical core is written in Rust and compiled to WebAssembly. It ships fixed-step RK4 alongside adaptive RK45 (Dormand–Prince) and TR-BDF2 for stiff systems, so models that would otherwise need a desktop solver run at interactive rates in a tab. The WASM engine executes in a Web Worker and publishes results to the UI thread through a SharedArrayBuffer, which keeps plotting zero-copy and lets scopes redraw at 60 FPS while the solver is still running.

Around 99 block types are documented, from arithmetic and logic through PID controllers, transfer functions and state-space models to FFT, Bode and Nyquist analysis. Diagrams stay in the browser (IndexedDB) and are shared as LZ-compressed URLs rather than server uploads.

BlockWerk also exposes a scripting interface (`window.blockwerk.agent`) and an MCP server, so an LLM can build, run and analyse a diagram programmatically instead of driving the canvas through synthetic DOM events.

## Additional Resources

- [Block library](https://blockwerk.tech/blocks/)
- [Agent API documentation](https://blockwerk.tech/docs/agent_api)
