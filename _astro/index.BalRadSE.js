import{s as M,t as C}from"./art-scene.Bgn4RvH4.js";import{p as x}from"./types.Bt8bDdG2.js";/* empty css                        */import"./index.CzGW6FVa.js";import"./story.BGBw0qPS.js";const r="#7B2337",n="#EEDDC9",u="#BE3F5C",z="#C89C9B",m={en:{names:["Galilee","Golan","Judean Hills","Negev"],q1:"Red or white?",a1:"Red",q2:"North or south?",a2:"North",tour:"A tour for you",fit:"Galilee, 3 wineries"},he:{names:["גליל","גולן","הרי יהודה","נגב"],q1:"אדום או לבן?",a1:"אדום",q2:"צפון או דרום?",a2:"צפון",tour:"סיור בשבילך",fit:"גליל, 3 יקבים"}},g="M388 56C400 54 420 50 440 58L458 57L459 28C480 26 490 28 500 14L516 24L520 92C510 110 490 120 472 128L466 132L460 190L464 265L450 300L446 370L434 440L402 512L395 570L376 656H348L330 590L300 530L272 442L240 368L300 280L330 215L362 105L385 96Z",p=($,t,o)=>`<g class="${o}">
    <path d="M${$+2} ${t-14}l4 -10" stroke="${n}" stroke-width="2.5" fill="none"/>
    ${[[-9,-6],[0,-6],[9,-6],[-5,2],[5,2],[0,10]].map(([i,c])=>`<circle cx="${$+(i??0)}" cy="${t+(c??0)}" r="6" fill="${n}" stroke="${r}" stroke-width="1"/>`).join("")}
  </g>`;function T($,t,o=""){const i=$==="he",c=m[$];let s="";for(let a=27;a<656;a+=44)s+=`<rect x="43" y="${a}" width="10" height="1.5" fill="${r}"/>`;const l=[[33,71],[32,247],[31,423],[30,599]].map(([a,e])=>`<rect x="43" y="${e}" width="20" height="1.5" fill="${r}"/><text class="wi-t" x="64" y="${(e??0)+8}" font-size="24" fill="${r}">${a}°</text>`).join(""),w=[0,1,2,3,4].map(a=>{const e=a*9;return`<path d="M${366-e*.1} 56L${358-e*.5} 100L${326-e} 215L${296-e} 280L${238-e*.1-4} ${360-e*.7}" stroke="${z}" stroke-width="1.6" fill="none"/>`}).join("");let f="";for(let a=0;a<14;a++){const e=444+a*13.5;f+=`<path d="M${262+a*5} ${e}L${424-a*2.4} ${e+76}" stroke="${n}" stroke-width="1.4" opacity=".6"/>`}const d=`<path d="M116 538L122 562L146 568L122 574L116 598L110 574L86 568L110 562Z" fill="${r}"/><path d="M116 546L120 564L138 568L116 568Z" fill="${n}" opacity=".85"/>`,h=(a,e,L,y,k="start")=>i?`<text class="wi-he wi-name${a}" x="${e}" y="${L}" font-size="${y*.92}" fill="${r}" text-anchor="middle" direction="rtl">${c.names[a]}</text>`:`<text class="wi-t wi-name${a}" x="${e}" y="${L}" font-size="${y}" fill="${r}" text-anchor="${k}">${c.names[a]}</text>`;return`<defs>
      <clipPath id="${t}land"><path d="${g}"/></clipPath>
      <clipPath id="${t}hatch"><path d="M272 442L402 512L395 570L376 656H348L330 590L300 530Z"/></clipPath>
    </defs>
    <rect width="656" height="656" fill="${n}"/>
    <rect x="28" y="0" width="4.5" height="656" fill="${r}"/><rect x="38" y="0" width="2" height="656" fill="${r}"/>
    ${s}${l}
    ${w}
    <path d="M300 92H385" stroke="${r}" stroke-width="1.6"/>
    <path d="${g}" fill="${r}"/>
    <g clip-path="url(#${t}hatch)">${f}</g>
    <g clip-path="url(#${t}land)">
      <path class="wi-area wi-area0" d="M340 0H456L460 132L340 168Z" fill="${u}" opacity="0"/>
      <path class="wi-area wi-area2" d="M230 262L490 216V336L230 382Z" fill="${u}" opacity="0"/>
    </g>
    <ellipse cx="469" cy="102" rx="6.5" ry="11" fill="${n}"/>
    ${p(424,80,"wi-g wi-g0")}${p(491,65,"wi-g wi-g1")}${p(383,302,"wi-g wi-g2")}${p(337,468,"wi-g wi-g3")}
    ${h(0,i?242:197,103,36)}${h(1,i?580:541,82,36)}${h(2,i?164:84,295,36)}${h(3,i?200:161,455,36)}
    ${d}${o}`}function A($,t){return t=x(t,"he"),C($,t,"wi",T(t.lang,"wit"),(o,i)=>{i(".wi-g").forEach((s,l)=>{o.fromTo(s,{y:-22,opacity:0},{y:0,opacity:1,duration:.3,ease:"back.out(2)"},.05+l*.14)});const c=i(".wi-area2");o.fromTo(c,{opacity:0},{opacity:1,duration:.3},.62),o.to(c,{opacity:0,duration:.4},1.25)})}function E($){const t=$==="he",o=m[$],i=t?"wi-he":"wi-t",c=t?'direction="rtl"':"",s=t?640:480,l=(w,f,d,h)=>`<g class="${h}">
      <text class="${i}" x="${s}" y="${w}" font-size="${t?24:28}" fill="${r}" ${c}>${f}</text>
      <text class="${i} wi-a" x="${s}" y="${w+36}" font-size="${t?28:32}" fill="${r}" ${c}>${d}</text>
    </g>`;return T($,"wis",`
    ${l(240,o.q1,o.a1,"wi-q1")}
    ${l(340,o.q2,o.a2,"wi-q2")}
    <g class="wi-card">
      <rect x="442" y="462" width="200" height="104" fill="${r}"/>
      <text class="${i}" x="${t?628:456}" y="502" font-size="${t?22:26}" fill="${n}" ${c}>${o.tour}</text>
      <text class="${i}" x="${t?628:456}" y="542" font-size="${t?22:24}" fill="${n}" ${c}>${o.fit}</text>
    </g>`)}function D($,t){return t=x(t,"he"),M($,t,"wi",E(t.lang),(o,i)=>{o.fromTo(i(".wi-q1"),{opacity:0,y:8},{opacity:1,y:0,duration:.3},.4),o.fromTo(i(".wi-q1 .wi-a"),{opacity:0},{opacity:1,duration:.2},1.2),o.fromTo(i(".wi-q2"),{opacity:0,y:8},{opacity:1,y:0,duration:.3},1.9),o.fromTo(i(".wi-q2 .wi-a"),{opacity:0},{opacity:1,duration:.2},2.7),o.fromTo(i(".wi-g2, .wi-g3"),{opacity:1},{opacity:.35,duration:.4},3.1),o.fromTo(i(".wi-area0"),{opacity:0},{opacity:1,duration:.4},3.4),o.fromTo(i(".wi-g0"),{scale:1},{scale:1.3,transformOrigin:"50% 50%",duration:.18,yoyo:!0,repeat:1},3.5),o.fromTo(i(".wi-card"),{opacity:0,x:16},{opacity:1,x:0,duration:.35,ease:"power3.out"},4.1)},3.4)}export{D as mount,A as mountTile};
