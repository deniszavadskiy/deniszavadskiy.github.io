document.addEventListener("DOMContentLoaded",function(i){var a=window.navigator.userAgent,t=!!a.match(/iPad/i)||!!a.match(/iPhone/i),e=!!a.match(/WebKit/i),n=t&&e&&!a.match(/CriOS/i);console.log("iOSSafari",n),n&&document.body.classList.add("mobile-safari")});