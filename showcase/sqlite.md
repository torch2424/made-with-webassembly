---
name: sql.js
logo_url: /assets/showcase-assets/sql-js.png
website: http://kripken.github.io/sql.js/examples/GUI/
description: SQLite compiled to WebAssembly through Emscripten
keywords: c sql sqlite emscripten
---

SQLite compiled to WebAssembly through Emscripten

![ScreenShot](/assets/showcase-assets/sql-js.png)

sql.js is a port of SQLite to Webassembly, by compiling the SQLite C code with Emscripten. It uses a virtual database file stored in memory, and thus doesn't persist the changes made to the database. However, it allows you to import any existing sqlite file, and to export the created database as a JavaScript typed array.

## Additional Resources

- [sql.js repo](https://github.com/kripken/sql.js/)
