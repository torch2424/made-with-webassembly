---
name: Esri client-side projection engine
logo_url: https://www.esri.com/arcgis-blog/wp-content/uploads/2018/04/coordinateFormatter_3.24.gif
website: https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/introducing-the-client-side-projection-engine/
description: Esri is a geospatial mapping and analytics software company, that used WebAssembly to bring their server side client side projection engine to the web.
keywords: math earth mapping map space coordinate projection location
---

Esri is a geospatial mapping and analytics software company, that used WebAssembly to bring their server side client side projection engine to the web.

![Esri client side projection gif](https://www.esri.com/arcgis-blog/wp-content/uploads/2018/04/compare-pe-gs-project.gif)

Esri originally had a service that would be called by the client to do equation-based geographic transformations. However, they were able to bring this library to the client, with a good user experience using WebAssembly. Esri found that users would have better performance doing the computationally intensive task in WebAssembly (as WebAssembly is meant to handle this use case well), rather than waiting for the round trip call over the network. And depending on the network conditions, the slower the network, the more relatively fast the client-side WebAssembly task would be!

## Additional Resources

- [Esri Client Side Projection Engine Article](https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/introducing-the-client-side-projection-engine/)
