import{s as d,t as u}from"./art-scene.Bgn4RvH4.js";/* empty css                        */import"./index.CzGW6FVa.js";import"./story.BGBw0qPS.js";const n="#E8590C",e="#FFF6E8",c=48,y=2*Math.PI*c,f=t=>y*(1-t/30);function h(t,o){return t.map((a,s)=>`<text class="sg-t ${o} ${o}${s}" x="581" y="281" font-size="34" fill="${n}" text-anchor="middle" opacity="${s===t.length-1?1:0}">${a}</text>`).join("")}const g=[30,29,28,27,26,25,24],p=()=>`<circle cx="581" cy="268" r="${c}" fill="none" stroke="#F9D8C2" stroke-width="16"/>
      <circle class="sg-ring" cx="581" cy="268" r="${c}" fill="none" stroke="${n}" stroke-width="16" stroke-dasharray="${y}" stroke-dashoffset="${f(24)}" transform="rotate(-90 581 268)"/>
      ${h(g,"sg-n")}`;function x(t="",o=!1){return`<rect width="656" height="656" fill="#FFD9A8"/>
    ${t}
    <g class="sg-back">
      <path d="M58 72L500 188L20 240L14 130C16 92 34 68 58 72Z" fill="${e}"/>
      <text class="sg-t" x="56" y="124" font-size="30" fill="${n}" transform="rotate(14 56 124)">No notes.</text>
    </g>
    <g class="sg-mid">
      <path d="M0 142L470 182L200 260H0Z" fill="#FFE8CC"/>
      <text class="sg-t" x="33" y="190" font-size="28" fill="${n}" transform="rotate(3 33 190)">Say it again, slower.</text>
    </g>
    <g class="sg-top">
      <path d="M72 226L700 170V700H82L48 256C47 240 56 228 72 226Z" fill="${e}"/>
      <g transform="rotate(-3.2 100 350)">
        <text class="sg-t" x="97" y="350" font-size="91" fill="${n}">Explain</text>
        <text class="sg-t" x="104" y="456" font-size="91" fill="${n}">your job in</text>
        <text class="sg-t" x="110" y="562" font-size="91" fill="${n}">one breath.</text>
      </g>
      ${o?"":p()}
    </g>`}function m(t,o,a,s){t.fromTo(o(".sg-ring"),{strokeDashoffset:f(30)},{strokeDashoffset:f(24),duration:s,ease:"none"},a),g.forEach((i,r)=>{if(r===g.length-1){t.fromTo(o(`.sg-n${r}`),{opacity:0},{opacity:1,duration:.01},a+s);return}t.fromTo(o(`.sg-n${r}`),{opacity:r===0?1:0},{opacity:1,duration:.01},a+s/6*r),t.to(o(`.sg-n${r}`),{opacity:0,duration:.01},a+s/6*(r+1))})}function C(t,o){return u(t,o,"sg",x(),(a,s)=>{a.fromTo(s(".sg-top"),{y:60,rotation:3,transformOrigin:"50% 100%"},{y:0,rotation:0,duration:.42,ease:"back.out(1.5)"},0),m(a,s,.3,1.1)})}const l=7,k=()=>{let t="";for(let o=0;o<l;o++)t+=`<rect class="${o===l-1?"sg-today":""}" x="${44+o*34}" y="26" width="22" height="22" rx="5" fill="${n}"/>`;return t},$=(t,o)=>`<g class="${t}" opacity="0">
    <path d="M72 226L700 170V700H82L48 256C47 240 56 228 72 226Z" fill="${e}"/>
    <g transform="rotate(-3.2 100 350)">${o.map((a,s)=>`<text class="sg-t" x="${97+s*6}" y="${350+s*106}" font-size="91" fill="${n}">${a}</text>`).join("")}</g>
  </g>`;function F(t,o){const a=`${k()}`,s=x(a,!0)+$("sg-c2",["Slower,","then again."])+$("sg-c1",["Tell it to","a friend."])+p();return d(t,o,"sg",s,(i,r)=>{i.fromTo(r(".sg-today"),{opacity:.22},{opacity:.22,duration:.01},0),i.fromTo(r(".sg-c1"),{opacity:1},{opacity:1,duration:.01},0),i.to(r(".sg-c1"),{x:720,rotation:16,transformOrigin:"50% 100%",duration:.6,ease:"power2.in"},1.7),i.fromTo(r(".sg-c2"),{opacity:0},{opacity:1,duration:.01},0),i.to(r(".sg-c2"),{x:-720,rotation:-16,transformOrigin:"50% 100%",duration:.6,ease:"power2.in"},3.6),m(i,r,.8,6),i.to(r(".sg-today"),{opacity:1,duration:.25},7.3)})}export{F as mount,C as mountTile};
