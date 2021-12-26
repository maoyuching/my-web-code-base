// ==UserScript==
// @name         nowcoder helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.nowcoder.com/test/question/*
// @match        https://www.nowcoder.com/question/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.addEventListener('keydown', function (event) {
        var a = document.getElementsByClassName("subject-options");
        var key = event.key;

        if(key === 'x'){
            var next = document.getElementById("next");
            next.click();
            return;
        }
        var index = parseInt(event.key);
        if (index < 1) return;
        a[index-1].click();
    });
})();