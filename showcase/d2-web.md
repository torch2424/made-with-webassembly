---
name: D2-Web
website: https://diablo2.virtastic.app
source_url: https://github.com/Virtastic/d2-web
description: Diablo II Lord of Destruction 1.13c reimplemented in C++20 and compiled to 64-bit WebAssembly, playable in a browser tab with your own game files.
keywords: games emscripten c++ wasm64 gaming diablo porting
---

D2-Web runs Diablo II: Lord of Destruction, patch 1.13c, in desktop Chrome. Players point it at their own Diablo II and LoD files, which are read locally; no Blizzard files are included or hosted.

The engine is written in C++20 and built with Emscripten for 64-bit WebAssembly (wasm64). It aims to be 1:1 with 1.13c, and that is checked by replaying recorded play sessions through the original game and through D2-Web and counting every difference.

Video: https://www.youtube.com/watch?v=Uz75GvhtzuY

Free, open source (MIT), and a fan project, not affiliated with Blizzard.
