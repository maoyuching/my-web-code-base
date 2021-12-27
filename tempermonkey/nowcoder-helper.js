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
            let answing = document.getElementsByClassName("answering-num");
           
            return;
        }
        // 显示 网页头， 摸鱼模式
        if(key === 'x'){
            let header = document.getElementsByClassName("header-main");
            let subact = document.getElementsByClassName("subject-action");
            let footer = document.getElementsByClassName("js-nowcoder-footer"); // com-subject-wrap
            header[0].style.display = "none";
            subact[0].style.display = "none";
            footer[0].style.display = "none";
        }
        if(key === 'X'){
            let header = document.getElementsByClassName("header-main");
            let subact = document.getElementsByClassName("subject-action");
            let footer = document.getElementsByClassName("js-nowcoder-footer");
            header[0].style.display = "";
            subact[0].style.display = "";
            footer[0].style.display = "";
        }

        // 键入数字
        if(key >='0' && key <='9'){
            var index = parseInt(event.key);
            if (index < 1) return;
            a[index-1].click();
        }
    });
})();