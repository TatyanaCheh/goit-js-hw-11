import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(n){const o="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"44652974-093c0b9338f58db6242e87a44",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${a}`;return fetch(e).then(t=>t.json()).catch(t=>{iziToast.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})}function p(n){const o=n.map(r=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${r.largeImageURL}">
        <image class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"/>
        </a>
        <div class="gallery-card-container">
        <p> <strong>Likes:</strong> ${r.likes}</p>
        <p> <strong>Views:</strong> ${r.views}</p>
        <p> <strong>Comments:</strong> ${r.comments}</p>
        <p> <strong>Downloads:</strong> ${r.downloads}</p>
        </div>
        </li>`).join("");s.gallery.innerHTML=o,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){s.loader.classList.remove("hidden")}function c(){s.loader.classList.add("hidden")}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements.text.value.trim();if(o===""){s.gallery.innerHTML=" ",l.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"});return}g(),s.gallery.innerHTML=" ",d(o).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),c(),s.form.reset();return}c(),s.form.reset(),p(r.hits)}).catch(r=>{l.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
