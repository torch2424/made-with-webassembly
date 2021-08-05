---
name: Kubewarden
logo_url: https://www.kubewarden.io/images/icon-kubewarden.png
website: https://www.kubewarden.io/
source_url: https://github.com/kubewarden
description: Kubernetes admission controller using WebAssembly policies to validate requests
keywords: kubewarden kubernetes authz authorization cloud
---

A Kubernetes Admission Controller using WebAssembly to validate requests.

![ScreenShot](https://www.kubewarden.io/images/how-it-works-kubewarden.svg)

Kubewarden is a policy engine for Kubernetes. Policies are WebAssembly modules
that are distributed via OCI container registries.

Policies are loaded by [Policy Server](https://github.com/kubewarden/policy-server),
which then uses them to evalute incoming Admission Requests objects sent by the
Kubernetes API server.

## Additional Resources

- [Blog](https://www.kubewarden.io/blog)
- [Docs](https://docs.kubewarden.io/)
