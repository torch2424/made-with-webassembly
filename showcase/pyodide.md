---
name: Pyodide
logo_url: https://i.imgur.com/HBsLPBj.png
website: https://alpha.iodide.io/notebooks/300/
source_url: https://github.com/iodide-project/pyodide/
description: The Python scientific stack, compiled to WebAssembly
keywords: python portable portability science big data processing math computer science deep learning machine learning emscripten c++ c plus mozilla
---

Pyodide brings the Python runtime to the browser via WebAssembly, along with the Python scientific stack including NumPy, Pandas, Matplotlib, parts of SciPy, and NetworkX.

![Pyodide render gif](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2019/04/311-oakdark-inferno-edited-cropped.gif)

Pyodide uses WebAssembly as it takes CPython, a Python interpreter written in C, and uses Emscripten to compile it to WebAssembly. That way, they can then run the python code to do scienctific operations in the browser, by using the WebAssembly compiled Python interpreter. This shows off two great features of WebAssembly:

1. Portability. WebAssembly allows bringin new languages to the web. Both by allowing them to be compiled to WebAssembly to be run in the browser, but also, allowing languages to be run by an interpreter or a compiler, compiled to WebAssembly, to then run in the browser! Therefore, even languages like Python that can't be compiled to WebAssembly (currently), can now be run inside of a web browser!

2. Performance. Interpreting languages is a very computationally intensive task. Attempting to interpet python with JavaScript would be very slow, and not have predictable performance. WebAssembly fixes this by offering predictable performance, allowing high level languages like python to be interpreted or run at a usable speed!

Please see the Mozilla Hacks article for a deep dive of Pyodide.

## Additional Resources

- [Mozilla Hacks - Pyodide: Bringing the scientific Python stack to the browser](https://hacks.mozilla.org/2019/04/pyodide-bringing-the-scientific-python-stack-to-the-browser/)
