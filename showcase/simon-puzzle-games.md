---
name: Simon Puzzle Games
website: https://puzzles-game.com/en/games/
description: Play 101 logic puzzles in the browser with C puzzle engines compiled to WebAssembly.
keywords: games logic puzzles c emscripten webassembly
---

[Simon Puzzle Games](https://puzzles-game.com/en/games/) is an independent browser edition built around [Simon Tatham’s Portable Puzzle Collection](https://www.chiark.greenend.org.uk/~sgtatham/puzzles/) and additional pencil puzzles.

Each game has its own WebAssembly module, compiled from C with Emscripten. Opening [Bridges](https://puzzles-game.com/en/game/bridges/) loads the engine for that puzzle. It generates the board and checks the player’s moves locally. The browser interface supplies touch controls, translated rules and saved progress. The same interface can host a different C engine for a game such as Galaxies without rewriting either puzzle’s rules in JavaScript.
