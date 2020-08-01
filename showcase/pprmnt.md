---
name: pprmt.cc
website: https://pprmnt.cc/
source_url: https://github.com/johncalvinroberts/pprmnt
description: Secure MP3 Encoder
keywords: mp3 audio dsp wav
---

pprmnt is a secure MP3 encoder that works directly in your browser, powered by Web Assembly. Convert your lossless audio to MP3 for better portability, without sacrificing the privacy and security of your intellectual property. [Try it out](https://pprmnt.cc/).

![pprmnt screenshot](https://user-images.githubusercontent.com/11850362/80774995-00504200-8b91-11ea-8e4f-1673ca04c4c3.png)



### The use case

When musicians or sound artists need to share audio files, or upload them somewhere, they often need to first convert them to MP3. The lossless WAV version that the DAW software exports is often way too big to send easily, and can cause performance issues when uploading online.

Sometimes it's easier to send a quick MP3, instead of a huge WAV or FLAC audio file.

### The problem

Many "file conversion" websites are harvesting your data. They upload your lossless audio to a server, convert it there, and then send it back to you. This puts you at a serious risk -- you just uploaded your audio to some random company's server. They now have full access to your audio.

Is your music licensed? Probably not. There's absolutely no legal reason stopping these companies from storing and "owning" the audio you just willfully uploaded to their server. Furthermore, after gaining access to (what used to be) your audio, there's nothing to stop that company from taking that audio, licensing it...and eventually taking legal action against you.

### The solution

pprmnt takes a different approach, by converting the audio directly in your browser, without ever even leaving your machine. Your audio is converted locally, without ever being uploaded to a third party server.

To prove this, pprmnt even works entirely offline. Try it out. Your audio never touches the internet, it all happens in your browser.

As added emphasis to the security and transparency of how pprmnt works, pprmnt is also entirely open source. The entire source code is available here on Github for your viewing enjoyment.

There are also more technical details about how pprmnt works, the limitations, and future roadmap for features in the readme on Github.

Any other questions about pprmnt can be addressed to: johnny@johnny.sh