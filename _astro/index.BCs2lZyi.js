import{s as x,t as k}from"./art-scene.Bgn4RvH4.js";/* empty css                        */import"./index.CzGW6FVa.js";import"./story.BGBw0qPS.js";const E="#0E1C21",g="#18363B",C="#22393F",l="#EEF4F2",e="#8CD8B6",L="#1C353B",i=328,a=262,$=168,u=2*Math.PI*$,f=t=>u*(1-t/60),d=42,F={x:150,y:540},M={x:506,y:540},m=(t,o,r)=>`<g class="${t}">
    <circle cx="${o.x}" cy="${o.y}" r="58" fill="${L}"/>
    <circle class="${t}-lit" cx="${o.x}" cy="${o.y}" r="58" fill="url(#imt-lit)" opacity="${r?1:0}"/>
  </g>`,T=()=>`<g stroke="${l}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <circle cx="${i}" cy="176" r="27"/>
    <path d="M${i} 205V286"/>
    <path d="M${i} 222L284 282M${i} 222L372 282"/>
    <path d="M${i} 286L282 300V352M${i} 286L374 300V352"/>
  </g>
  <circle class="imt-hl" cx="284" cy="284" r="11" fill="${e}"/>
  <circle class="imt-hr" cx="372" cy="284" r="11" fill="${l}" opacity="0.35"/>`;function p(){return`<defs><radialGradient id="imt-lit" cx="50%" cy="48%" r="50%">
      <stop offset="0" stop-color="#EAFCF3"/><stop offset="0.38" stop-color="#A9E6CB"/><stop offset="0.62" stop-color="${e}"/><stop offset="1" stop-color="#5FAE8E"/>
    </radialGradient></defs>
    <rect width="656" height="656" fill="${E}"/>
    <circle cx="${i}" cy="${a}" r="250" fill="${g}" opacity="0.7"/>
    <circle cx="${i}" cy="${a}" r="${$}" fill="none" stroke="${C}" stroke-width="18"/>
    <circle class="imt-ring" cx="${i}" cy="${a}" r="${$}" fill="none" stroke="${e}" stroke-width="18" stroke-linecap="round"
      stroke-dasharray="${u}" stroke-dashoffset="${f(d)}" transform="rotate(-90 ${i} ${a})"/>
    ${T()}
    ${m("imt-l",F,!0)}
    ${m("imt-r",M,!1)}`}function y(t,o,r,c){t.to(o(".imt-l-lit"),{opacity:c?1:0,duration:.12},r),t.to(o(".imt-r-lit"),{opacity:c?0:1,duration:.12},r),t.to(o(".imt-hl"),{attr:{fill:c?e:l},opacity:c?1:.35,duration:.12},r),t.to(o(".imt-hr"),{attr:{fill:c?l:e},opacity:c?.35:1,duration:.12},r)}function h(t,o,r,c,s){t.fromTo(o(".imt-ring"),{strokeDashoffset:f(r)},{strokeDashoffset:f(d),duration:s,ease:"none"},c)}function B(t,o){return k(t,o,"imt",p(),(r,c)=>{h(r,c,46,0,1.6),[!1,!0,!1,!0].forEach((s,n)=>y(r,c,.05+n*.4,s))})}function G(t,o){return x(t,o,"imt",p(),(r,c)=>{const s=60-d;h(r,c,60,0,s*.4);for(let n=0;n<s;n++)y(r,c,n*.4,n%2===1)})}export{G as mount,B as mountTile};
