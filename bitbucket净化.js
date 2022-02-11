// ==UserScript==
// @name         bitbucket净化
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  zh-cn
// @author       aries.zhou
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('header').append("<style> .aui-banner-error {display:none;} </style>");

})();
