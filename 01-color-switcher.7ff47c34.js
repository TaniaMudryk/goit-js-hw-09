const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let n=null;function o(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(){n=setInterval(o,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(n),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.7ff47c34.js.map
