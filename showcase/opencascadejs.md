---
name: OpenCascade.js
logo_url: https://github.com/donalffons/opencascade.js/blob/master/images/logo%20no%20text.svg
website: https://ocjs.org/
source_url: https://github.com/donalffons/opencascade.js
description: Port of the OpenCascade CAD library to JavaScript and WebAssembly via Emscripten.
keywords: CAD OpenCascade Emscripten Embind BREP 3D
---

OpenCascade.js is a fully featured CAD Kernel that can be used via WebAssembly.

It is built by
1. analyzing the source code of the OpenCascade CAD library (written in C++)
2. automatically generating bindings via Emscripten's embind and
3. automatically generating typescript definitions.

The project is shipped via an NPM package ("opencascade.js") and a Docker Image ("donalffons/opencascade.js"). For creating small and lightweight applications, a system for manual treeshaking ("custom builds") is available via the Docker Image.

## Additional Resources

- [Reference Documentation](https://ocjs.org/reference-docs/)
- [Guide Documentation](https://ocjs.org/)
- [OpenCascade (CAD Kernel written in C++)](https://dev.opencascade.org/)
