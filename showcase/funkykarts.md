---
name: Funky Karts
logo_url: https://www.rossis.red/wasm+fk.png
website: https://www.rossis.red/wasm.html
description: Funky Karts is a mobile and web side-scrolling racing game
keywords: games emscripten c c++ gaming porting graphics
---

Funky Karts is a mobile and web side-scrolling racing game

![Renpy web screenshot](https://renpy.beuc.net/cover-the_question-50.png)

This project uses WebAssembly as it's game engine is written in C, and uses Emscripten to output WebAssembly to run the game on the web. In this particular project, the game already ran on the web, but only on Chrome due to it being exported to [Native Client](https://developer.chrome.com/native-client). For this project, WebAssembly helped bring this game to all web browsers, and help it go beyond the chrome web store since they could be ensured that the WebAssembly would work, and give great performance on every brower.
