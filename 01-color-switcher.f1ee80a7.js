!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;function d(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){a=setInterval(d,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(a),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.f1ee80a7.js.map
