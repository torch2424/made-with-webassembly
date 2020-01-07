---
name: JavaScript/WASM Performance Comparison
website: http://whealy.com/Rust/mandelbrot.html
description: A performance comparison tool for fractal image calculation in JavaScript and Web Assembly
keywords: javascript wasm web assembly fractal mandelbrot julia performance comparison
---

A performance comparison tool for fractal image calculation in JavaScript and Web Assembly

You can switch between using JavaScript to perform the calculations (press 'j') or Web Assembly (press 'w')

This tool creates an image of the Mandelbrot Set, then as you move the mouse pointer over the image, the corresponding Julia Set for that location is dynamically calculated and the calculation time displayed.

![Performance Comparison ScreenShot](https://raw.githubusercontent.com/ChrisWhealy/fractal_explorer/master/img/Screenshot.png)

## IMPORTANT

The Web Assembly runtimes are quite consistent across different browsers; however, the JavaScript runtimes are not particularly consistent, and values will vary depending on the JavaScript engine your browser uses

<table border="1" cellspacing="0" cellpadding="3">
<tr><th>Engine</th>
    <th>Browser</th>
    <th>Comments</th></tr>
<tr><td>SpiderMonkey</td>
    <td>Firefox</td>
    <td>Tends to be the fastest - sometimes being as fast as, or slightly faster than Web Assembly</td></tr>
<tr><td>JavaScriptCore</td>
    <td>Safari</td>
    <td>Tends to be a little slower than SpiderMonkey</td></tr>
<tr><td>V8</td>
    <td>Brave<br>Google&nbsp;Chrome/Chromium</td>
    <td>Tends to be slower than either SpiderMonkey or JavaScriptCore</td></tr>
<tr><td>Chakra</td>
    <td>Microsoft Edge</td>
    <td>No data</td></tr>
</table>

## Additional Resources

- The Rust part of this application can be found in this [Git Repository](https://github.com/ChrisWhealy/fractal_explorer)
