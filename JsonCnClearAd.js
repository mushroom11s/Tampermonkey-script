// ==UserScript==
// @name         Json.cn净化
// @namespace    http://tampermonkey.net/
// @version      0.7.5
// @description  json.cn 纯净版
// @author       aries.zhou
// @match        https://www.json.cn/**
// @grant        none
// ==/UserScript==

window.onload = function () {
    var style = document.createElement("style");
    style.innerHTML = 'main {height: 100%!important;} ';
    document.head.appendChild(style);

    var jsonsrc = document.getElementById('json-src');
    var alt = '请输入json数据....';
    if(jsonsrc){
      jsonsrc.setAttribute('placeholder', alt);
    }

    var backdrop = document.getElementsByClassName('modal-backdrop fade in');
    var dialog = document.getElementsByClassName('modal-dialog');
    var headernav = document.getElementsByClassName('header-nav-list first-nav comt-top-nva');
    var foot = document.getElementsByClassName('relative b-large-margin');
    var container = document.getElementsByClassName('container');
    var loginmodule = document.getElementsByClassName('login-module');
    var liTag = document.getElementsByTagName('li');
    var rowfluid =  document.getElementsByClassName('row-fluid');
    if (headernav) {
        headernav[0].parentNode.removeChild(headernav[0]);
    }
    if (foot) {
        foot[0].parentNode.removeChild(foot[0]);
    }
    if (container) {
        container[0].parentNode.removeChild(container[0]);
    }
    if (loginmodule) {
        loginmodule[0].parentNode.removeChild(loginmodule[0]);
    }
    if (liTag) {
        liTag[0].parentNode.removeChild(liTag[0]);
    }
    if (rowfluid) {
        rowfluid[0].parentNode.removeChild(rowfluid[0]);
    }
    if (backdrop) {
        backdrop[0].parentNode.removeChild(backdrop[0]);
    }
    if (dialog) {
        dialog[0].parentNode.removeChild(dialog[0]);
    }
};
