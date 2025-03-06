---
name: Verifoxx CHERI-WAMR (cWAMR)
description: A CHERI-capability-aware fork of WebAssembly Micro Runtime (WAMR), enabling secure, fine-grained compartmentalization of WASM modules on CHERI-enabled platforms.
keywords: WebAssembly CHERI WAMR security compartments Morello Verifoxx DSbD PETs runtime capability-based
logo_url: https://github.com/Verifoxx-LTD/verifoxx-cheri-wamr/blob/main/assets/logo_vf.png
website: https://www.verifoxx.com/research
source_url: https://github.com/Verifoxx-LTD/verifoxx-cheri-wamr
---

**Verifoxx CHERI-WAMR** is an advanced, CHERI-enhanced fork of the WebAssembly Micro Runtime (WAMR), designed to support **capability-based memory safety** and **secure compartmentalization** for WebAssembly workloads. Built on the **CHERI Morello** architecture as part of the **UK DSbD (Digital Security by Design)** initiative, this project enables high-assurance execution of WebAssembly in both **Hybrid** and **Pure-capability** modes.

### ⚡ Key Features:
- **CHERI Capability-Aware Memory Model**: Secure pointer management and memory isolation with CHERI hardware protections.
- **Hybrid & Purecap Support**: Builds for both CHERI hybrid mode and pure-capability environments on Linux.
- **Interpreter Modes**: Full support for both **Fast** and **Classic** interpreter modes.
- **AOT Support**: Ahead-of-Time compilation supported (JIT not currently supported).
- **Experimental Compartmentalization**: A prototype "mini-product" where WAMR executes within a managed compartment, using a capability manager to control memory and system interactions safely.
- **Secure Externref Handling**: Safe passing of host references via CHERI capabilities.
- **CHERI-WASI Integration**: A capability-aware adaptation of WASI for secure system interface operations.

### 🚀 About the DSbD Ecosystem:
This work is part of the **DSbD programme** advancing secure-by-design computing through **CHERI**. More on DSbD and CHERI ecosystem:
👉 [https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/](https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/)
👉 [https://www.dsbd.tech/](https://www.dsbd.tech/)
### 📝 Important Notes:
- **Pure-cap builds** are limited to simpler WebAssembly workloads.
- **Compartmentalized WAMR** is experimental and currently lacks full feature parity (AOT and advanced system features are limited).

For full documentation, build guides, and technical reports, visit the project repository:
👉 [https://github.com/Verifoxx-LTD/verifoxx-cheri-wamr](https://github.com/Verifoxx-LTD/verifoxx-cheri-wamr)
