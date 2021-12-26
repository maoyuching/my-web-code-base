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
    // 监听键盘事件
    document.addEventListener('keydown', function (event) {
        var a = document.getElementsByClassName("subject-options");
        var key = event.key;

        if(key === 'n'){
            var next = document.getElementById("next");
            next.click();
            return;
        }
        if(key == 'N'){
            alert("hi");
            return;
        }
        // 键入数字
        var index = parseInt(event.key);
        if (index < 1) return;
        a[index-1].click();
    });
})();