const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");function n(){r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}timerId=null,t.addEventListener("click",(function(t){n(),timerId=setInterval(n,1e3),t.currentTarget.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.03ce5d57.js.map