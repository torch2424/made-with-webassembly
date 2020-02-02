---
name: LiveSplit
logo_url: https://raw.githubusercontent.com/LiveSplit/LiveSplit/master/LiveSplit/Resources/Icon.png
website: https://livesplit.org/
source_url: https://github.com/LiveSplit/LiveSplitOne
description: A sleek, highly customizable timer for speedrunners
keywords: rust gaming games speed run applications production timer
---

LiveSplit is a timer program for speedrunners that is both easy to use and full of features.

![LiveSplit Screenshot](https://livesplit.org/images/livesplittimer.png)

The developer of LiveSplit, [CryZe](https://twitter.com/CryZe107), gave us the following excerpt on Livesplit:

> We started out with LiveSplit being written in C# with strong assumptions that it's going to be used on Windows. We made a really well working speedrun timer that quickly got used by pretty much all the speedrunners. It's in a good shape now where it pretty has most of the features we want it to have.

> However long term we wanted to restructure LiveSplit to work across all kinds of platforms, and for many more use cases. Basically we wanted a much more maintainable long term solution that would work for even completely new platforms and situations. Maybe even an extension for Twitch, or as a library for some app that analyzes the speedrun data, or to directly built it into a game and so on. And that's how LiveSplit One was born. The "One" standing for "one codebase across all platforms". The new codebase is in Rust and we are slowly porting all the logic over into it. We are planning for various different frontends. A native desktop frontend that uses DirectX 12, Vulkan, Metal and co. to render the timer. A web frontend that uses TypeScript and React. Also mobile apps, a terminal version, a Twitch extension, an OBS plugin, ...

> And the one using WebAssembly is the web version where the codebase is compiled to WASM and then TypeScript and React are used to built the frontend. We do as little as possible in React (basically the stuff that can't be shared across the platforms). At the moment the networking code is still in TypeScript but with Rust's new async await capabilities, I'm slowly moving the networking code over into Rust too, so it can be used in the native versions and co. as well.

Which I totally agree was an awesome way to go! To me, this shows the portability of WebAssembly, in which you can target the web with a language of your choice. And that smae exact source code is also used across many different platforms! Meaning you then only have to write a thin UI layer, but the bulk of your project is written in a shared codebase!

# Additional Resources

- [LiveSplit One - The webassembly build of livesplit for browsers](https://one.livesplit.org/)
