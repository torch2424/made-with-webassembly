---
name: SSVM
logo_url: https://www.secondstate.io/assets/img/logo.png
website: https://www.secondstate.io
source_url: https://github.com/second-state/SSVM
description: SSVM is a high performance, hardware optimal Wasm Virtual Machine for AI and Blockchain applications.
keywords: ewasm runtime wasi server server-side c++ ethereum onnx onnc
---

SSVM is a high performance, hardware optimal Wasm Virtual Machine for AI and Blockchain applications.

For different purposes, SSVM provides several tools to grant the best performance for each application.

- For AI applications, SSVM provides AI mode.
  - SSVM-QITC can improve the performance of AI operators by leverage customized wasi to interact with [ONNC runtime](https://github.com/ONNC/onnc-runtime).
- For blockchain applications, SSVM is compatible with [Ethereum Client-VM connector API(EVMC)](https://github.com/ethereum/evmc) and supports [Ethereum Environment Interface](https://ewasm.readthedocs.io/en/mkdocs/)(EEI) as a wasi extension.
  - SSVM-EVMC implements both EVMC and EEI, which makes the integrations with Ethereum client easier.
- For server-side applications, SSVM provides core-wasi mode.
  - SSVM-PROXY works with [SSVMRPC](https://github.com/second-state/SSVMRPC) service, which facilitates both code-deployment and code-execution interactions.

# Additional Resources

- [ONNC](https://github.com/ONNC)
- [EVMC](https://evmc.ethereum.org/)
- [Ewasm](https://ewasm.readthedocs.io/en/mkdocs/)
- [SSVMRPC](https://github.com/second-state/SSVMRPC)
