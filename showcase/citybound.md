---
name: CityBound
logo_url: https://github.com/citybound/citybound/raw/master/cb.png
source_url: https://github.com/citybound/citybound
website: https://aeplay.org/citybound
description: A city building game that uses microscopic models to vividly simulate the organism of a city arising from the interactions of millions of individuals.
keywords: game gaming city people simulation math falling production rust 2d 3d
---

Citybound is a city building game with a focus on realism, collaborative planning and simulation of microscopic details. It is independently developed, open source and funded through Patreon.

![city bound screen shot](https://uploads-ssl.webflow.com/58ef666b690e1f31ad12a43a/5c24208c35af3ace29d8ff05_Screenshot%202018-12-26%20at%2014.39.29.476-p-800.png)

On the city builder website it states:

> Compiling Kay to WebAssembly allows running a fully fledged actor system node in the browser, which can communicate with the simulation backend through type-safe high-performance messages and do computation-intensive preparation work for rendering, before efficiently serialising and passing rendering-relevant information as JavaScript objects to a React app that implements the rest of the UI. The React app can call Rust hooks that were exported to JavaScript, to send Kay messages back to the simulation backend for influencing the game world based on player input.

Meaning they use WebAssembly to handle all out their computationally intensive rendering work, and all of their UI work to their React UI. This is an EXCELLENT use of WebAssembly, as it shows that you can still leverage the great UI patterns of the web and use JavaScript for what it is very good at, but replace all of the hard processing with a language that is much better suited for it. That way, your app can get much greater performance (compared to writing computationally intensive code in JavaScript) on the web!

# Additonal Resources

- [Tweet to "WebAssembly in production" Thread](https://twitter.com/mirchiseth/status/1152340160350236673)
