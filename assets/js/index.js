parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function t(){e(this,t),document.addEventListener("DOMContentLoaded",function(){var e=new XMLHttpRequest,t=document.getElementsByClassName("fa-sync")[0];e.onload=function(){if(e.status>=200&&e.status<300){t.style.display="none";var a=JSON.parse(e.response),n=document.getElementsByClassName("author-social")[0],o=document.getElementsByClassName("projects-list")[0],c=document.getElementsByClassName("events-list")[0],s=function(e,t){var a=document.createElement("tr");a.innerHTML=e,t.getElementsByTagName("tbody")[0].appendChild(a)};n&&a.social_urls.forEach(function(e){var t='<a href="'.concat(e.url,'" title="').concat(e.name,'" target="_blank" rel="noopener"><i class="').concat("envelop"==e.icon?"fas":"fab"," fa-").concat(e.icon,'" aria-hidden="true"></i></a>'),a=document.createElement("span");a.innerHTML=t,n.appendChild(a)}),o&&a.projects.forEach(function(e){var t="<td>".concat(e.name,"</td><td>").concat(e.description,'</td><td class="text-center"><a href="').concat(e.url,'" title="Fork ').concat(e.name,'" target="_blank"><i class="fas fa-code-branch"></i></a></td>');s(t,o)}),c&&a.events.forEach(function(e){var t="<td>".concat(e.name,"</td><td>").concat(e.year,'</td><td class="text-center"><div class="row">').concat(e.slides?'<div class="one-half column"><a href="'.concat(e.slides,'" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>'):"").concat(e.video?'<div class="one-half column"><a href="'.concat(e.video,'" title="Video"><i class="fas fa-video"></i></a></div>'):"").concat(e.url?'<div class="one-half column"><a href="'.concat(e.url,'" title="More"><i class="fas fa-link"></i></a></div>'):"","</div></td>");s(t,c)})}else console.log("Could not connect to the api!")},(window.location.href.includes("/projects")||window.location.href.includes("/speaking")||window.location.href.includes("/about"))&&(e.open("GET","/custom/api"),e.send())})};exports.default=t;var a=new t;
},{}]},{},["Focm"], null)