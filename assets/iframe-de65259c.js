import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m="modulepreload",f=function(_){return"/react-image-comparison-slider/"+_},a={},o=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e),e in a)return;a[e]=!0;const r=e.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const O=t[c];if(O.href===e&&(!r||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":m,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((c,O)=>{i.addEventListener("load",c),i.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,d=R({page:"preview"});p.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const w={"./src/stories/ImageComparisonSlider.stories.tsx":async()=>o(()=>import("./ImageComparisonSlider.stories-9a97d26c.js"),["assets/ImageComparisonSlider.stories-9a97d26c.js","assets/index-e03f90b5.js","assets/_commonjsHelpers-725317a4.js","assets/tslib.es6-17d83084.js"])};async function E(_){return w[_]()}E.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:P,PreviewWeb:T,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./config-f83aa83f.js"),["assets/config-f83aa83f.js","assets/index-d475d2ea.js","assets/index-e03f90b5.js","assets/_commonjsHelpers-725317a4.js","assets/_getPrototype-2a7d3a1f.js","assets/index-356e4a49.js"]),o(()=>import("./preview-5ef354f3.js"),["assets/preview-5ef354f3.js","assets/index-d475d2ea.js","assets/index-d37d4223.js"]),o(()=>import("./preview-adfce080.js"),[]),o(()=>import("./preview-a60aa466.js"),[]),o(()=>import("./preview-770cc08b.js"),["assets/preview-770cc08b.js","assets/index-d475d2ea.js","assets/index-356e4a49.js"]),o(()=>import("./preview-25cb0eda.js"),["assets/preview-25cb0eda.js","assets/index-d475d2ea.js"]),o(()=>import("./preview-d8c963a4.js"),["assets/preview-d8c963a4.js","assets/index-d475d2ea.js","assets/index-356e4a49.js"]),o(()=>import("./preview-b79ea209.js"),["assets/preview-b79ea209.js","assets/index-d475d2ea.js"]),o(()=>import("./preview-187be37d.js"),["assets/preview-187be37d.js","assets/index-d475d2ea.js","assets/_commonjsHelpers-725317a4.js"]),o(()=>import("./preview-0b293f2a.js"),[]),o(()=>import("./preview-1e5c59db.js"),[])]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:E,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-de65259c.js.map
