// ==UserScript==
// @name        航天云课堂刷课
// @namespace   Violentmonkey Scripts
// @match       https://train.casicloud.com/*
// @grant       none
// @version     0.1.1
// @author      aries.zhou
// @description 1/11/2022, 6:27:03 PM
// ==/UserScript==


setInterval(() => {
    let btns = document.getElementsByClassName('btn-ok');
    if(btns.length > 0){
        document.getElementsByClassName('btn-ok')[0].click();
    }
    let referse_btns = document.getElementsByClassName('videojs-referse-btn');
    if(referse_btns.length > 0){
        document.getElementsByClassName('videojs-referse-btn')[0].click();
    }
}, 60000)
