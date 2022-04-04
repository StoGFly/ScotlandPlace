// ==UserScript==
// @name         Scotland Logo template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       oralekin
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
const overlay = "https://github.com/StoGFly/ScotlandPlace/new/main/rscotlandplaceoverlay.png?tstamp=" + Math.floor(Date.now() / 10000);

if (window.top !== window.self) {
    console.log("Placing overlay for r/Scotland:", overlay);

    const overlay_img = document.createElement("img");
    overlay_img.src = overlay;
    overlay_img.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1999px;height: 1999px;";

    window.addEventListener('load', () => {
        const canvas = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0];
        canvas.appendChild(overlay_img);
    }, false);
}
