// ==UserScript==
// @name         echarts 文档自动展开节点
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://echarts.apache.org/zh/opti**
// @match        https://echarts.apache.org/en/opt**
// @icon         https://www.google.com/s2/favicons?domain=apache.org
// @grant        none
// ==/UserScript==

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener('load',async function () {
    for (let i = 0; i < 10; i++) {
        var nodes = document.getElementsByClassName('expand-toggle el-icon-circle-plus-outline');
        console.log(nodes.length)
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].click();
        }
        await sleep(500);
    }
})();
