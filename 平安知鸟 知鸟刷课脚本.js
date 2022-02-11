// ==UserScript==
// @name        平安知鸟 知鸟刷课脚本
// @namespace   Violentmonkey Scripts
// @match       https://www.zhi-niao.com/*
// @grant       none
// @version     0.1.0
// @author      aries.zhou
// @description 2/9/2022, 9:59:01 AM
// ==/UserScript==





setInterval(() => {
    let paused_btns = document.getElementsByClassName('vjs-paused');
    if(paused_btns.length > 0){
        paused_btns[0].click();
    }
    let play_btns = document.getElementsByClassName('vjs-big-play-button');
    if(play_btns.length > 0){
        play_btns[0].click();
    }
}, 10000)
