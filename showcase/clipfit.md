---
name: ClipFit
website: https://compressmyclip.com/
description: Browser video compressor that encodes to a chosen file size for Discord's per-file upload limits, using FFmpeg compiled to WebAssembly.
keywords: ffmpeg.wasm webassembly video compression discord mp4 bitrate browser local encoding
---

ClipFit is a browser video compressor built around Discord's per-file upload limits. It runs [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm), FFmpeg compiled to WebAssembly, entirely inside the page. The user picks a target size, the tool derives the video bitrate from the clip's duration and the account's upload ceiling, encodes locally, and reports the actual output byte count. No video is uploaded and there is no server-side transcode step.

The bitrate arithmetic and three measured browser encodes behind it are published as an open dataset (CSV, raw run records and ffprobe output), archived on Zenodo as DOI 10.5281/zenodo.23904986. The dataset covers 3 MB, 8 MB and 10 MB targets on 10-second clips and states its own coverage limits: it checks the arithmetic, it is not a validation suite across media types and durations.
