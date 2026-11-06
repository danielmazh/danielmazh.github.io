import{g as a}from"./index.CzGW6FVa.js";import{s as f,t as v}from"./story.BGBw0qPS.js";const p={src:"/_astro/sunrise-forest.IijFTGxv.jpg",width:540,height:960,format:"jpg"},u={src:"/_astro/sea-cliffs.BmaC3b3b.jpg",width:540,height:960,format:"jpg"},m={src:"/_astro/ridge.DK3XnqNf.jpg",width:540,height:960,format:"jpg"},o=t=>typeof t=="string"?t:t.src,g=Array.from({length:24},(t,n)=>{const i=n*15*Math.PI/180,[s,e]=n%6?[40,44]:[37,44];return`<path d="M${50+Math.cos(i)*s} ${50+Math.sin(i)*s}L${50+Math.cos(i)*e} ${50+Math.sin(i)*e}"/>`}).join(""),$=`<svg class="ni-emblem" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46"/><g>${g}</g><circle class="ni-dot" cx="50" cy="50" r="7"/></svg>`,y=`<div class="ni-foot">${$}<span>@nekudatsheket</span></div>`,r=(t,n,i,s,e)=>`
  <div class="ni-frame ${n}" dir="rtl">
    <img class="ni-photo" src="${t}" alt="" />
    <div class="ni-panel" style="--size:${e}"><b>${i}</b><em>${s}</em></div>
    ${y}
  </div>`,w=[["Nov 3, 8:30 PM","Reel","את מי אתה עדיין שואל אם מותר לך?","Published"],["Nov 4, 12:30 PM","Reel","מתי אמרת תודה בפעם האחרונה, ובאמת התכוונת?","Published"]],b={en:"List read back on 2026-11-04.",he:"הרשימה נקראה בחזרה ב-2026-11-04."};function M(t,n){const i=document.createElement("div");if(i.className="ni ni-tile",i.dir="ltr",i.innerHTML=`
    ${r(o(u),"ni-side is-left","אני לא מחכה","לאף אחד.","9.6cqw")}
    ${r(o(m),"ni-side is-right","אני לא צריך רשות,","כדי להיות מי שאני.","7.8cqw")}
    ${r(o(p),"ni-main","ארבע אותיות","שיכולות להזיז את כל היום.","7.2cqw")}`,t.replaceChildren(i),n.reduced)return{enter(){},leave(){},destroy:()=>t.replaceChildren()};const s=a.utils.selector(i),e=a.timeline({paused:!0});return e.fromTo(s(".ni-main .ni-photo"),{scale:1.12},{scale:1,duration:2,ease:"sine.out"},0),e.fromTo(s(".ni-main .ni-panel"),{opacity:0,y:"6cqmin"},{opacity:1,y:0,duration:.5,ease:"power2.out"},.3),e.fromTo(s(".is-left"),{x:"-5cqmin"},{x:0,duration:1.2,ease:"power2.out"},0),e.fromTo(s(".is-right"),{x:"5cqmin"},{x:0,duration:1.2,ease:"power2.out"},0),v(t,e)}function j(t,n){const i=document.createElement("div");if(i.className="ni ni-stage",i.dir="ltr",i.innerHTML=`
    <div class="ni-post">
      ${r(o(u),"ni-r3","אני לא מחכה","לאף אחד.","9.6cqw")}
      ${r(o(m),"ni-r2","אני לא צריך רשות,","כדי להיות מי שאני.","7.8cqw")}
      ${r(o(p),"ni-r1","ארבע אותיות","שיכולות להזיז את כל היום.","7.2cqw")}
    </div>
    <div class="ni-list">
      <div class="ni-list-head"><b>Published</b><span>Meta Business Suite, Israel time</span></div>
      ${w.map(([c,l,h,d])=>`
        <div class="ni-row">
          <div class="ni-hook" dir="rtl">${h}</div>
          <div class="ni-meta"><span>${c} · ${l}</span><i class="${d==="Published"?"is-pub":""}">${d}</i></div>
        </div>`).join("")}
      <p class="ni-note" dir="${n.lang==="he"?"rtl":"ltr"}">${b[n.lang]}</p>
    </div>`,getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.replaceChildren(i),n.reduced)return{play(){},pause(){},destroy:()=>t.replaceChildren()};const s=a.utils.selector(i),e=a.timeline({paused:!0});return e.fromTo(s(".ni-r2"),{autoAlpha:0},{autoAlpha:1,duration:.6,ease:"sine.inOut"},2),e.fromTo(s(".ni-r2 .ni-panel"),{opacity:0,y:"3cqmin"},{opacity:1,y:0,duration:.4,ease:"power2.out"},2.4),e.fromTo(s(".ni-r1"),{autoAlpha:0},{autoAlpha:1,duration:.6,ease:"sine.inOut"},4.4),e.fromTo(s(".ni-r1 .ni-photo"),{scale:1.1},{scale:1,duration:2.6,ease:"sine.out"},4.4),e.fromTo(s(".ni-r1 .ni-panel"),{opacity:0,y:"3cqmin"},{opacity:1,y:0,duration:.4,ease:"power2.out"},4.8),s(".ni-meta i").forEach((c,l)=>{e.fromTo(c,{opacity:0},{opacity:1,duration:.25},l?4.8:.6)}),e.to({},{duration:.4},7.2),f(i,t,e)}export{j as mount,M as mountTile};
