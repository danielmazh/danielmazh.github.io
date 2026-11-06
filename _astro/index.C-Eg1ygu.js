import{g as B}from"./index.CzGW6FVa.js";import{s as V}from"./story.BGBw0qPS.js";import{a as Y,r as O,l as W,n as E}from"./flagship-art.CPA-ew9P.js";import"./minor-art.DWVZ5Lsh.js";function N(e,a){getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.replaceChildren(a)}function _(e,a,s=.34,n=.95){let l=a;const d=()=>(l=(l*9301+49297)%233280,l/233280),h=[];let g=e;for(;g>.02;){const t=Math.min(g,.1+d()*.16);h.push({"--level":s+d()*(n-s),duration:t,ease:"sine.inOut"}),g-=t}return h}const m=(e,a=2.4)=>`<svg viewBox="0 0 24 24" aria-hidden="true" stroke-width="${a}">${e}</svg>`,o={play:'<svg viewBox="0 0 24 24" aria-hidden="true" class="qf-solid"><path d="M8 5v14l11-7z"/></svg>',back:m('<path d="M9 5l7 7-7 7"/>'),mic:m('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>'),music:m('<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>'),menu:m('<path d="M4 7h16M4 12h16M4 17h16"/>',3),close:m('<path d="M6 6l12 12M18 6L6 18"/>',3.2),check:m('<path d="M5 12l5 5 9-10"/>',3),users:m('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>'),map:m('<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),dumbbell:m('<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>'),trophy:m('<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4"/>'),speaker:m('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/>'),hush:m('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l4 6M21 9l-4 6"/>'),redo:m('<path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v5h5"/>')},I='<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',Q="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z",S=(e,a="")=>`<svg viewBox="0 0 24 24" aria-hidden="true" class="qf-st ${e?"on":"off"} ${a}"><path d="${Q}"/></svg>`,R=e=>`<span class="qf-mini">${S(!0).repeat(e)}</span>`,T={word:{bg:"#3e7b35",d:'<circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/>'},yes:{bg:"#d27f22",d:'<path d="M12 5v14M5 12h14"/>'},rant:{bg:"#c73a34",d:'<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>'},choice:{bg:"#25501f",d:'<path d="M5 20v-7a5 5 0 0 1 5-5h9"/><path d="M15 4l4 4-4 4"/>'},story:{bg:"#7a3e1c",d:'<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 7h6M9 11h4"/>'},sAssoc:{bg:"#8c221e",d:'<circle cx="7" cy="12" r="3.2"/><circle cx="17" cy="12" r="3.2"/><path d="M10.2 12h3.6"/>'},sScene:{bg:"#74431f",d:'<path d="M4 5h16l-2 9a6 6 0 0 1-12 0z"/><path d="M9 10h.01M15 10h.01M9.5 14c1.5 1.3 3.5 1.3 5 0"/>'},sStory:{bg:"#3e7b35",d:'<path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5z"/><path d="M12 6v13"/>'}},F=["word","yes","word","rant","yes","word","rant","yes","word","rant","yes","word","rant","yes","story","choice","story","choice"],j=96,z=[[285,392],[210,398],[135,392],[60,380],[82,292],[170,300],[262,288],[286,196],[210,188],[133,196],[58,186],[86,96],[172,104],[258,88]].map(([e,a])=>[e,a+j]).concat([[286,100],[210,92],[133,100],[66,98]]),A=e=>{let a=`M${e[0][0]},${e[0][1]}`;for(let n=1;n<e.length-1;n+=1){const l=e[n],d=e[n+1];a+=` Q${l[0]},${l[1]} ${(l[0]+d[0])/2},${(l[1]+d[1])/2}`}const s=e[e.length-1];return`${a} L${s[0]},${s[1]}`};function y(e,a,s){const[n,l]=z[e],d=T[F[e]],h=(g,t,r)=>`<path class="qf-mstar ${r?"on":"off"}" transform="translate(${g-7} ${t-7}) scale(.58)" d="${Q}"/>`;return`
    <circle class="qf-n-shadow" cx="${n}" cy="${l+5}" r="27"/>
    <circle class="qf-n-outer is-${a}" cx="${n}" cy="${l}" r="27"/>
    <circle class="qf-n-inner is-${a}" cx="${n}" cy="${l}" r="17"/>
    ${a==="locked"?`<svg x="${n-10}" y="${l-10}" width="20" height="20" viewBox="0 0 24 24" class="qf-n-lock" stroke-width="2.4">${I}</svg>`:`<text class="qf-n-num" x="${n}" y="${l+1}">${e+1}</text>`}
    <circle cx="${n+21}" cy="${l-20}" r="10" fill="${d.bg}" stroke="#5a2a12" stroke-width="2.5"/>
    <svg x="${n+14}" y="${l-27}" width="14" height="14" viewBox="0 0 24 24" class="qf-n-mode" stroke-width="2.4">${d.d}</svg>
    ${h(n-15,l+35,s>=1)}${h(n,l+38,s>=2)}${h(n+15,l+35,s>=3)}
    ${a==="current"?`<g class="qf-here"><rect x="${n-20}" y="${l-52}" width="40" height="20" rx="10"/><text x="${n}" y="${l-42}">כאן</text></g>`:""}`}function U(){const e=g=>g+j,a=(g,t,r=1)=>`<g transform="translate(${g} ${t}) scale(${r})"><rect class="qf-trunk" x="-3" y="4" width="6" height="12" rx="2"/><circle class="qf-leaf" cy="-2" r="12"/><circle class="qf-leaf2" cx="-4" cy="-6" r="5"/></g>`,s=(g,t)=>`<g transform="translate(${g} ${t})"><ellipse class="qf-bush" rx="14" ry="8"/><circle class="qf-flower" cx="-5" cy="-2" r="2"/><circle class="qf-flower" cx="5" cy="1" r="2"/></g>`,n=a(22,e(330))+a(320,e(250),.9)+a(22,e(140),.8)+a(318,e(150),1.1)+a(320,150,.8)+s(172,e(350))+s(172,e(246))+s(250,e(142))+s(104,e(150))+`<g transform="translate(326 ${e(398)})"><rect class="qf-trunk" x="-2" y="-30" width="4" height="34"/><path d="M2 -30 L-14 -23 L2 -16 Z" fill="#c73a34" stroke="#5a2a12" stroke-width="2"/></g><g transform="translate(22 44)"><circle r="18" fill="#ffc83d" stroke="#5a2a12" stroke-width="3.5"/><svg x="-11" y="-11" width="22" height="22" viewBox="0 0 24 24" class="qf-n-lock qf-n-cup" stroke-width="2.4"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4"/></svg></g>`,l=A(z),d=[3,3,2,3,1],h=F.map((g,t)=>t===5?`<g class="qf-n6-before">${y(t,"current",0)}</g><g class="qf-n6-after" style="opacity:0">${y(t,"done",3)}</g>`:t===6?`<g class="qf-n7-before">${y(t,"locked",0)}</g><g class="qf-n7-after" style="opacity:0">${y(t,"current",0)}</g>`:t<5?y(t,"done",d[t]):y(t,"locked",0)).join("");return`
    <svg viewBox="0 0 340 ${440+j}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      ${n}
      <path class="qf-r-edge" d="${l}"/><path class="qf-r-road" d="${l}"/><path class="qf-r-dash" d="${l}"/>
      <path class="qf-r-done qf-done-a" d="${A(z.slice(0,6))}"/>
      <path class="qf-r-done qf-done-b" style="opacity:0" d="${A(z.slice(0,7))}"/>
      ${h}
    </svg>`}const G=`
  <div class="qf-brand">
    <svg viewBox="0 0 32 32" aria-hidden="true" class="qf-brand-i">
      <rect x="11" y="5" width="15" height="21" rx="4" transform="rotate(12 18 15)" fill="#fdebc8" stroke="#5a2a12" stroke-width="2"/>
      <rect x="5" y="4" width="15" height="21" rx="4" fill="#f3a33a" stroke="#5a2a12" stroke-width="2"/>
    </svg>
    <span class="qf-brand-n">Quick<span>Flow</span></span>
  </div>`,X=`
  <div class="qf-hbtns">
    <span class="qf-ibtn">${o.music}</span>
    <span class="qf-ibtn">${o.menu}</span>
    <span class="qf-ibtn gold qf-champs-btn">${o.trophy}</span>
  </div>`,u=(e,a,s,n="")=>`
  <div class="qf-row ${n}">
    <span class="qf-row-i" style="background:${T[e].bg}"><svg viewBox="0 0 24 24" stroke-width="2.4">${T[e].d}</svg></span>
    <span class="qf-row-m"><b>${a}</b><small>${s}</small></span>
    <span class="qf-ibtn play">${o.play}</span>
  </div>`;function K(){return`
  <div class="qf-screen qf-home">
    <div class="qf-head">${G}${X}</div>
    <div class="qf-tabs">
      <span class="qf-tab qf-tab-map" data-on="yes">${o.map}מפה</span>
      <span class="qf-tab qf-tab-free">${o.dumbbell}תרגול</span>
      <span class="qf-tab qf-tab-friends">${o.users}עם חברים</span>
    </div>
    <div class="qf-panes">
      <div class="qf-pane qf-pane-map">
        <div class="qf-panel qf-board">
          <span class="qf-chip">${S(!0)}<span dir="ltr" class="qf-starcount">12/54</span></span>
          <div class="qf-mapbox">${U()}</div>
        </div>
        <div class="qf-next">
          <span class="qf-next-n">6</span>
          <span class="qf-next-m"><small>הצעה להיום</small><b class="qf-next-t">מילים מופשטות</b></span>
          <span class="qf-sbtn green qf-next-go">${o.play}משחקים</span>
        </div>
      </div>
      <div class="qf-pane qf-pane-free qf-panel qf-list">
        <p class="qf-intro">בלי יעדים ובלי כוכבים. בוחרים מצב ומתאמנים.</p>
        ${u("word","אסוציאציות","מילה אחת, תגובה מהירה")}
        ${u("yes","כן, ו...","ממשיכים משפט ומוסיפים רעיון")}
        ${u("rant","דבר על זה","30 שניות ברצף על נושא")}
        ${u("choice","שנה כיוון!","מדברים ברצף ומחליפים כיוון")}
        ${u("story","שלד סיפור","סיפור בשישה קטעים קבועים")}
      </div>
      <div class="qf-pane qf-pane-friends qf-panel qf-list">
        <p class="qf-intro"><b>ערב אימפרו: טלפון אחד, 2 עד 4 משתתפים.</b> מעבירים את הטלפון בתורות.</p>
        ${u("sAssoc","אסוציאציות בתורות","מילה, תור, תגובה מהירה")}
        ${u("sScene","סצנה מאולתרת","סצנה, דמות והוראה לכל תור","qf-row-scene")}
        ${u("sStory","סיפור משותף","פתיחה, טוויסטים, משפט בכל תור")}
        <p class="qf-hushnote">${o.hush}<span>בזמן תור, כל השאר בשקט. הטלפון מקשיב רק למי שהתור שלו.</span></p>
      </div>
    </div>
  </div>`}const Z=[{name:"כוכב ים",value:51},{name:"מילה טובה",value:47},{name:"פטפטן",value:44},{name:"ענן",value:31},{name:"זריז",value:15,me:!0}];function J(){return`
  <div class="qf-champs">
    <div class="qf-veil"></div>
    <div class="qf-panel qf-dlg">
      <span class="qf-ribbon">${o.trophy}טבלת האלופים</span>
      <span class="qf-ibtn red qf-dlg-x">${o.close}</span>
      <div class="qf-kinds"><span class="on">כוכבים</span><span>התמדה</span><span>סשנים</span><span>מהירות</span></div>
      <p class="qf-lb-me">השם שלי בטבלה: <b>זריז</b></p>
      <p class="qf-lb-note">הכי הרבה כוכבים בכל השלבים.</p>
      <div class="qf-lb">
        ${Z.map((e,a)=>`
          <div class="qf-lb-row r${a+1}${e.me?" me":""}">
            <span class="qf-lb-rank">${a+1}</span>
            <span class="qf-lb-name">${e.name}${e.me?"<small>(אני)</small>":""}</span>
            <span class="qf-lb-val" dir="ltr">${S(!0)}${e.value}</span>
          </div>`).join("")}
      </div>
    </div>
  </div>`}const tt=8,D=9;function P(e,a,s,n,l,d,h,g,t,r){const p=b=>`<span class="qf-label is-${b}" data-show="${b}">${t[b]}</span>`,v=b=>{const[L,c,w]=r[b];return`<div class="qf-cue is-${b}" data-show="${b}"><span class="qf-cue-i">${L}</span><span class="qf-cue-m"><b>${c}</b><small>${w}</small></span></div>`};return`
  <div class="qf-screen qf-sess ${e}" data-phase="read" style="visibility:hidden;opacity:0">
    <div class="qf-top">
      <span class="qf-sbtn cream qf-exit">${o.back}יציאה</span>
      <span class="qf-top-t">${a}</span>
      <span class="qf-ibtn qf-top-music">${o.music}</span>
    </div>
    ${n}
    <div class="qf-segs">${Array.from({length:s},()=>'<i data-s="off"></i>').join("")}</div>
    ${l}
    <div class="qf-panel qf-card">
      <div class="qf-card-top">
        <span class="qf-labels">${Object.keys(t).map(p).join("")}</span>
        <span class="qf-round" dir="rtl"></span>
      </div>
      <div class="qf-body">
        <div class="qf-q" data-show="read live speak"><small class="qf-lead">${d}</small><b class="qf-prompt ${g?"is-word":""}">${h}</b></div>
        <div class="qf-hit" data-show="hit"><b class="qf-val" dir="ltr"></b><small class="qf-val-sub"></small></div>
        <div class="qf-pass" data-show="pass"><b class="qf-pass-t"></b><p class="qf-pass-n"></p></div>
      </div>
      ${Object.keys(r).map(v).join("")}
      <div class="qf-track qf-timer"><i></i></div>
    </div>
    <div class="qf-meter-wrap">
      <div class="qf-track qf-meter"><i></i><u></u></div>
      <div class="qf-meter-legend"><span>הפס: עוצמת הקול שלך</span><span>מעבר לקו הצהוב = זוהה דיבור</span></div>
    </div>
  </div>`}function at(){const e=`<div class="qf-goals"><b>יעד:</b><span>${R(1)}6/8 תשובות</span><span>${R(2)}חציון עד 1.6 שניות</span><span>${R(3)}הכול, עד 1.2 שניות</span></div>`;return P("qf-solo","שלב 6: מילים מופשטות",tt,e,'<div class="qf-tally"><span><em style="background:#7bc06b"></em>ענית <b class="qf-t-ans">0</b></span><span><em style="background:#f07068"></em>פספסת <b>0</b></span><span><em style="background:#9b6a45"></em>נשארו <b class="qf-t-left">8</b></span></div>',"המילה:","חופש",!0,{read:`${o.speaker}הקראה`,live:`${o.mic}תורך`,speak:`${o.mic}שומע אותך`,hit:`${o.check}יפה!`},{read:[o.speaker,"מקריא...","הקשב. המיקרופון לא מודד עכשיו"],live:[o.mic,"דברו עכשיו!","אמור את המילה הראשונה שעולה לך"],speak:[o.mic,"שומע אותך!","מעולה! כשתסיים, פשוט תשתוק"]})}function st(){const e=Array.from({length:22},(a,s)=>{const n=["#ffc83d","#7bc06b","#f3a33a","#56a6dc","#e2574c"];return`<i style="inset-inline-start:${(s*37+7)%100}%;background:${n[s%5]}"></i>`}).join("");return`
  <div class="qf-screen qf-summary" style="visibility:hidden;opacity:0">
    <div class="qf-panel qf-sum-card">
      <span class="qf-ribbon">שלב 6: מילים מופשטות</span>
      <div class="qf-bigstars">${[0,1,2].map(()=>`<div class="qf-slot">${S(!1)}${S(!0,"qf-pop")}</div>`).join("")}</div>
      <p class="qf-sum-head">מושלם!</p>
      <p class="qf-sum-sub">השגת 3 מתוך 3 כוכבים</p>
      <div class="qf-unlock">נפתח שלב חדש: דבר 30 שניות</div>
      <div class="qf-rate"><span>איך היה?</span><i>👍</i><i>👎</i></div>
      <p class="qf-more">עוד פרטים</p>
    </div>
    <span class="qf-bigbtn green">לשלב הבא${o.play}</span>
    <div class="qf-btnrow">
      <span class="qf-bigbtn cream">${o.redo}שוב</span>
      <span class="qf-bigbtn cream qf-to-map">${o.map}למפה</span>
    </div>
    <div class="qf-confetti">${e}</div>
  </div>`}const M=["שחקן 1","שחקן 2","שחקן 3"],k=["#f3a33a","#7bc06b","#f07068"],x=[{role:"המלצר",hook:"להתבלבל בכל הזמנה",line:"לקבל את הסועד בחיוך ענק ולהציג את מנת היום"},{role:"הסועד",hook:"להתנהג כמו מבקר מסעדות חשוב",line:"להתיישב ולשאול שאלות מוזרות על התפריט"},{role:"השף",hook:"להיעלב מכל ביקורת",line:"לצאת מהמטבח ולשאול איך האוכל"}];function et(){const e=M.map((r,p)=>`
    <div class="qf-name-row"><span class="qf-dot" style="background:${k[p]}">${p+1}</span><span class="qf-name">${r}</span><span class="qf-x">${o.close}</span></div>`).join(""),a=[["חימום","מצבים מוכרים"],["עלילה","טוויסט באמצע"],["מטורף","הזוי אבל הגיוני"]].map(([r,p],v)=>`<span class="qf-lvl${v?"":" on"}"><b>${r}</b><small>${p}</small></span>`).join(""),s=r=>`
    <div class="qf-top qf-top-home">
      <span class="qf-sbtn cream">${o.back}חזרה</span>
      <span class="qf-top-t">${r}</span>
      ${X}
    </div>`,n=`
  <div class="qf-screen qf-setup" style="visibility:hidden;opacity:0">
    ${s("סצנה מאולתרת")}
    <div class="qf-panel qf-sheet">
      <span class="qf-ribbon orange">${o.users}מי משחקים?</span>
      <p class="qf-sheet-p">האפליקציה בוחרת סצנה ונותנת לכל אחד דמות. בכל תור מופיעה הוראה אחת קצרה, ומשחקים אותה בקול.</p>
      ${e}
      <span class="qf-sbtn cream qf-add">+ הוספת משתתף</span>
      <div class="qf-lvls">${a}</div>
    </div>
    <span class="qf-bigbtn green qf-setup-go">${o.play}לחלוקת התפקידים</span>
  </div>`,l=`
  <div class="qf-screen qf-cast" style="visibility:hidden;opacity:0">
    ${s("סצנה מאולתרת")}
    <div class="qf-panel qf-sheet">
      <span class="qf-ribbon">דף הליהוק</span>
      <div class="qf-sit"><small>רמה 1: חימום</small><b>ארוחה במסעדה</b><p>ערב רגיל במסעדה שכונתית. מה כבר יכול להשתבש?</p></div>
      ${M.map((r,p)=>`<div class="qf-crow" style="--pc:${k[p]}"><b>${r}</b> - <b class="qf-role">${x[p].role}</b>: ${x[p].hook}</div>`).join("")}
    </div>
    <span class="qf-bigbtn green qf-cast-go">${o.play}מתחילים</span>
    <div class="qf-btnrow"><span class="qf-bigbtn cream">${o.back}חזרה</span><span class="qf-bigbtn cream">סצנה אחרת</span></div>
  </div>`,d=`
    <div class="qf-banner"></div>
    <div class="qf-caststrip">${M.map((r,p)=>`<div class="qf-cc" data-p="${p}" style="--pc:${k[p]}"><b>${r}</b><span>${x[p].role}</span></div>`).join("")}</div>`,h=P("qf-turn","ערב אימפרו",D,"",d,x[0].role,x[0].line,!1,{read:`${o.speaker}הקראה`,live:`${o.mic}תורך`,speak:`${o.mic}<span class="qf-speak-name">שחקן 1</span>`,hit:`${o.check}<span class="qf-hit-name">יפה, שחקן 1!</span>`,pass:`${o.users}מעבירים`},{read:[o.speaker,"מקריא...","להקשיב. המיקרופון לא מודד עכשיו"],live:[o.mic,"דברו עכשיו!","לדבר בדמות, בלי לעצור"],speak:[o.mic,"שומעים!","ממשיכים בדמות עד שהפס נגמר"],pass:[o.users,"התור של שחקן 2","כל השאר בשקט"]}),t=`
  <div class="qf-screen qf-rank" style="visibility:hidden;opacity:0">
    <div class="qf-panel qf-sum-card">
      <span class="qf-ribbon orange">ערב אימפרו | סצנה מאולתרת</span>
      <p class="qf-sum-head qf-rank-head"><span>🏆</span> המנצח/ת: שחקן 2</p>
      <p class="qf-sum-sub">ניקוד: תשובה 100, מהירות עד 50, כל היסוס מוריד 3</p>
      <div class="qf-ranks">
        ${[{idx:1,name:"שחקן 2",role:"הסועד",stats:"תשובות 3/3 | חציון 1.02s | היסוסים 1",pts:339},{idx:0,name:"שחקן 1",role:"המלצר",stats:"תשובות 3/3 | חציון 1.24s | היסוסים 2",pts:334},{idx:2,name:"שחקן 3",role:"השף",stats:"תשובות 2/3 | חציון 1.68s | היסוסים 1",pts:233}].map((r,p)=>`
          <div class="qf-rrow${p?"":" win"}" style="--pc:${k[r.idx]}">
            <span class="qf-rrow-n">${p+1}</span>
            <span class="qf-rrow-m"><b>${r.name}</b><small>${r.role}</small><small>${r.stats}</small></span>
            <span class="qf-rrow-p">${r.pts}<small>נקודות</small></span>
          </div>`).join("")}
      </div>
      <div class="qf-banner-n">ארוחה במסעדה</div>
    </div>
    <span class="qf-bigbtn green">${o.play}עוד סיבוב</span>
    <div class="qf-btnrow"><span class="qf-bigbtn cream">${o.back}חזרה</span></div>
  </div>`;return n+l+h+t}function $(e,a,s){e.to(a,{y:"0.5cqmin",scale:.96,duration:.09,ease:"power2.in"},s).to(a,{y:0,scale:1,duration:.16,ease:"back.out(3)"},s+.09)}function nt(e){const a=B.utils.selector(e),s=B.timeline({paused:!0}),n=f=>a(f)[0],l=(f,i,q)=>s.to(a(f),{autoAlpha:0,duration:.22,ease:"power1.in"},q).to(a(i),{autoAlpha:1,duration:.24,ease:"power1.out"},q+.12),d=(f,i,q)=>s.set(n(f),{attr:{"data-phase":i}},q),h=(f,i,q,H)=>s.to(n(f),{keyframes:_(q,H)},i).to(n(f),{"--level":0,duration:.2},i+q),g=(f,i)=>{s.set(a(".qf-tab"),{attr:{"data-on":"no"}},i).set(a(`.qf-tab-${f}`),{attr:{"data-on":"yes"}},i)};let t=1.2;$(s,n(".qf-next-go"),t),t+=.35,l(".qf-home",".qf-solo",t),t+=.35;const r=".qf-solo",p=["חופש","אומץ","סוד"],v=[.93,1.12,.78],b=a(`${r} .qf-segs i`);p.forEach((f,i)=>{s.set(a(`${r} .qf-prompt`),{textContent:f},t).set(a(`${r} .qf-round`),{textContent:`סבב ${i+1}/8`},t).set(b[i],{attr:{"data-s":"cur"}},t).set(a(`${r} .qf-timer i`),{scaleX:1},t),d(r,"read",t),s.fromTo(a(`${r} .qf-prompt`),{scale:.92,y:8},{scale:1,y:0,duration:.32,ease:"back.out(2)",immediateRender:!1},t),t+=.75,d(r,"live",t),s.to(a(`${r} .qf-timer i`),{scaleX:1-v[i]/3,duration:v[i],ease:"none"},t).to(n(r),{"--level":.08,duration:v[i]*.7,ease:"sine.inOut"},t),t+=v[i],d(r,"speak",t),h(r,t,.75,31+i*17),t+=.8,d(r,"hit",t),s.set(a(`${r} .qf-val`),{textContent:`${v[i].toFixed(2)}s`},t).set(a(`${r} .qf-val-sub`),{textContent:"הזמן עד שהתחלת לדבר"},t).fromTo(a(`${r} .qf-val`),{scale:.7},{scale:1,duration:.4,ease:"back.out(2.6)",immediateRender:!1},t).set(b[i],{attr:{"data-s":"hit"}},t).set(a(`${r} .qf-t-ans`),{textContent:String(i+1)},t).set(a(`${r} .qf-t-left`),{textContent:String(7-i)},t).set(a(`${r} .qf-timer i`),{scaleX:0},t),t+=.85}),d(r,"speak",t),["שקט","חלום","צחוק","מזל","תקווה"].forEach((f,i)=>{const q=i+3;s.set(a(`${r} .qf-prompt`),{textContent:f},t).set(a(`${r} .qf-round`),{textContent:`סבב ${q+1}/8`},t).set(a(`${r} .qf-timer i`),{scaleX:1},t).set(b[q],{attr:{"data-s":"hit"}},t+.26).set(a(`${r} .qf-t-ans`),{textContent:String(q+1)},t+.26).set(a(`${r} .qf-t-left`),{textContent:String(7-q)},t+.26),h(r,t,.2,53+i*13),t+=.34}),l(r,".qf-summary",t),s.fromTo(a(".qf-summary .qf-sum-card"),{scale:.94,y:12},{scale:1,y:0,duration:.45,ease:"back.out(1.8)",immediateRender:!1},t+.1),t+=.45,a(".qf-summary .qf-pop").forEach((f,i)=>{s.fromTo(f,{opacity:0,scale:0,rotation:-40},{opacity:1,scale:1,rotation:0,duration:.5,ease:"back.out(2.6)",immediateRender:!1,transformOrigin:"50% 50%"},t+i*.28)}),a(".qf-confetti i").forEach((f,i)=>{s.to(f,{opacity:1,duration:.1},t+.6+i%7*.09).to(f,{y:`${96+i%5*4}cqmin`,rotation:200+i*40,x:`${(i%5-2)*3}cqmin`,duration:1.7+i%4*.2,ease:"power1.in"},t+.6+i%7*.09)}),t+=2.6,$(s,n(".qf-to-map"),t),t+=.3,l(".qf-summary",".qf-home",t),t+=.4,s.to(a(".qf-n6-before"),{opacity:0,duration:.2},t).to(a(".qf-n6-after"),{opacity:1,duration:.3},t).to(a(".qf-done-a"),{opacity:0,duration:.2},t).to(a(".qf-done-b"),{opacity:1,duration:.2},t).set(a(".qf-starcount"),{textContent:"15/54"},t+.1).to(a(".qf-n7-before"),{opacity:0,duration:.2},t+.3).to(a(".qf-n7-after"),{opacity:1,duration:.3},t+.3).set(a(".qf-next-n"),{textContent:"7"},t+.35).set(a(".qf-next-t"),{textContent:"דבר 30 שניות"},t+.35),t+=1.5,$(s,a(".qf-home .qf-champs-btn"),t),t+=.25,s.to(a(".qf-champs"),{autoAlpha:1,duration:.2},t).fromTo(a(".qf-dlg"),{scale:.92,y:12},{scale:1,y:0,duration:.4,ease:"back.out(1.8)",immediateRender:!1},t),s.fromTo(a(".qf-lb-row"),{opacity:0,x:"1.6cqmin"},{opacity:1,x:0,duration:.25,stagger:.09,immediateRender:!1},t+.25),t+=2.6,$(s,n(".qf-dlg-x"),t),t+=.2,s.to(a(".qf-champs"),{autoAlpha:0,duration:.2},t),t+=.35;const L=(f,i,q)=>s.set(a(f),{autoAlpha:0},q).set(a(i),{autoAlpha:1},q);g("free",t),L(".qf-pane-map",".qf-pane-free",t),t+=1.5,g("friends",t),L(".qf-pane-free",".qf-pane-friends",t),t+=1.3,$(s,n(".qf-row-scene"),t),t+=.3,l(".qf-home",".qf-setup",t),t+=1.7,$(s,n(".qf-setup-go"),t),t+=.25,l(".qf-setup",".qf-cast",t),t+=2.4,$(s,n(".qf-cast-go"),t),t+=.25;const c=".qf-turn",w=a(`${c} .qf-segs i`),C=(f,i)=>{s.set(a(`${c} .qf-banner`),{textContent:`התור של ${M[f]}`,backgroundColor:k[f]},i).set(a(`${c} .qf-cc`),{attr:{"data-on":"no"}},i).set(a(`${c} .qf-cc[data-p="${f}"]`),{attr:{"data-on":"yes"}},i)};C(0,t),s.set(a(`${c} .qf-round`),{textContent:"תור 1/9"},t).set(w[0],{attr:{"data-s":"cur"}},t).set(a(`${c} .qf-timer i`),{scaleX:1},t),l(".qf-cast",c,t),t+=1.3,d(c,"live",t),s.to(n(c),{"--level":.08,duration:.8},t).to(a(`${c} .qf-timer i`),{scaleX:.8,duration:1.24,ease:"none"},t),t+=1.24,d(c,"speak",t),h(c,t,1.6,71),s.to(a(`${c} .qf-timer i`),{scaleX:.4,duration:1.6,ease:"none"},t),t+=1.7,d(c,"hit",t),s.set(a(`${c} .qf-val`),{textContent:"1.24s"},t).set(a(`${c} .qf-val-sub`),{textContent:"עד תחילת הדיבור | 0 היסוסים | דיבור 9.50s"},t).fromTo(a(`${c} .qf-val`),{scale:.7},{scale:1,duration:.4,ease:"back.out(2.6)",immediateRender:!1},t).set(w[0],{attr:{"data-s":"hit"}},t).set(a(`${c} .qf-timer i`),{scaleX:0},t),t+=1.1,d(c,"pass",t),C(1,t),s.set(a(`${c} .qf-pass-t`),{textContent:"העבירו את הטלפון ל-שחקן 2"},t).set(a(`${c} .qf-pass-n`),{textContent:`להתכונן, ${x[1].role}: ${x[1].line}`},t).set(a(`${c} .qf-timer i`),{scaleX:1},t).to(a(`${c} .qf-timer i`),{scaleX:0,duration:1.5,ease:"none"},t),t+=1.6,d(c,"speak",t),s.set(a(`${c} .qf-prompt`),{textContent:x[1].line},t).set(a(`${c} .qf-lead`),{textContent:x[1].role},t);for(let f=1;f<D;f+=1){const i=f%3;C(i,t),s.set(a(`${c} .qf-round`),{textContent:`תור ${f+1}/9`},t).set(a(`${c} .qf-speak-name`),{textContent:M[i]},t).set(a(`${c} .qf-lead`),{textContent:x[i].role},t).set(a(`${c} .qf-prompt`),{textContent:x[i].line},t).set(a(`${c} .qf-timer i`),{scaleX:.7},t).set(w[f],{attr:{"data-s":f===8?"miss":"hit"}},t+.2),h(c,t,.18,83+f*7),t+=.28}return l(c,".qf-rank",t),s.fromTo(a(".qf-rank .qf-sum-card"),{scale:.94,y:12},{scale:1,y:0,duration:.45,ease:"back.out(1.8)",immediateRender:!1},t+.1).fromTo(a(".qf-rrow"),{opacity:0,y:"1.4cqmin"},{opacity:1,y:0,duration:.3,stagger:.16,immediateRender:!1},t+.35),t+=3.4,g("map",t),s.set(a(".qf-pane-friends"),{autoAlpha:0},t).set(a(".qf-pane-map"),{autoAlpha:1},t),l(".qf-rank",".qf-home",t),s.to({},{duration:.3},t+.3),s}function ft(e,a){const s=document.createElement("div");s.className="qf qf-game",s.dir="rtl",s.innerHTML=K()+J()+at()+st()+et(),N(e,s);const n=nt(s);return a.reduced?(n.progress(1,!0),{play(){},pause(){},destroy:()=>{n.kill(),e.replaceChildren()}}):V(s,e,n)}const rt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 676" aria-hidden="true">
<rect data-n="ground" width="676" height="676" fill="rgb(76, 140, 64)"/>
<g data-n="Stripe 1" transform="translate(-760 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(760 -760)"><rect x="-760" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 2" transform="translate(-656 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(656 -760)"><rect x="-656" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 3" transform="translate(-552 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(552 -760)"><rect x="-552" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 4" transform="translate(-448 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(448 -760)"><rect x="-448" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 5" transform="translate(-344 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(344 -760)"><rect x="-344" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 6" transform="translate(-240 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(240 -760)"><rect x="-240" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 7" transform="translate(-136 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(136 -760)"><rect x="-136" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 8" transform="translate(-32 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(32 -760)"><rect x="-32" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 9" transform="translate(72 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-72 -760)"><rect x="72" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 10" transform="translate(176 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-176 -760)"><rect x="176" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 11" transform="translate(280 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-280 -760)"><rect x="280" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 12" transform="translate(384 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-384 -760)"><rect x="384" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 13" transform="translate(488 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-488 -760)"><rect x="488" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 14" transform="translate(592 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-592 -760)"><rect x="592" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 15" transform="translate(696 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-696 -760)"><rect x="696" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Stripe 16" transform="translate(800 760) matrix(0.707107 -0.707107 0.707107 0.707107 0 0) translate(-800 -760)"><rect x="800" y="760" width="1300" height="38" fill="rgb(70, 131, 58)"/></g>
<g data-n="Wordmark"><g transform="translate(36 30)"><g data-n="Quick"><text x="0" y="53" font-family="Fredoka" font-size="62" font-weight="600" fill="rgb(255, 255, 255)">Quick</text></g><g data-n="Flow"><text x="158.55" y="53" font-family="Fredoka" font-size="62" font-weight="600" fill="rgb(255, 201, 60)">Flow</text></g></g></g>
<g data-n="Tagline"><g transform="translate(30 164)"><g data-n="Line משחק שמאמן"><text x="206" y="27" direction="rtl" font-family="Rubik" font-size="30" font-weight="700" fill="rgb(255, 255, 255)">משחק שמאמן</text></g><g data-n="Line לדבר בלי"><text x="206" y="64" direction="rtl" font-family="Rubik" font-size="30" font-weight="700" fill="rgb(255, 255, 255)">לדבר בלי</text></g><g data-n="Line לחשוב"><text x="206" y="101" direction="rtl" font-family="Rubik" font-size="30" font-weight="700" fill="rgb(255, 255, 255)">לחשוב</text></g><g data-n="Line פעמיים"><text x="206" y="138" direction="rtl" font-family="Rubik" font-size="30" font-weight="700" fill="rgb(255, 255, 255)">פעמיים</text></g></g></g>
<g data-n="Facts"><g transform="translate(30 540)"><g data-n="Stages"><g transform="translate(97.45 0)"><g data-n="Stages label"><text x="53.58" y="34" direction="rtl" font-family="Rubik" font-size="20" font-weight="500" fill="rgb(255, 231, 166)">שלבים</text></g><g data-n="Stages number"><text x="61.58" y="33" font-family="Rubik" font-size="40" font-weight="700" fill="rgb(255, 201, 60)">18</text></g></g></g><g data-n="Car"><text x="206" y="65" direction="rtl" font-family="Rubik" font-size="20" font-weight="500" fill="rgb(255, 231, 166)">עובד גם ברכב בנסיעה</text></g></g></g>
<g data-n="Phone shadow"><rect x="276" y="146" width="392" height="600" rx="58" fill="rgb(59, 110, 49)"/></g>
<g data-n="Phone"><g transform="translate(262 130)"><rect width="392" height="600" rx="58" fill="rgb(42, 23, 13)"/><g data-n="Screen"><svg x="13" y="13" width="366" height="574" viewBox="0 0 366 574"><rect width="366" height="574" rx="46" fill="rgb(253, 234, 203)"/><g data-n="Top row"><g transform="translate(26 24)"><g data-n="Stars"><g transform="translate(0 0)"><g data-n="Star 1"><g transform="translate(0 0) scale(1.3333 1.3333) translate(0 0)"><path d="M12 2.6l2.85 5.95 6.55 0.85-4.8 4.55 1.2 6.5-5.8-3.15-5.8 3.15 1.2-6.5-4.8-4.55 6.55-0.85z" fill="#F7B928"/><path d="M12 2.6l2.85 5.95 6.55 0.85-4.8 4.55 1.2 6.5-5.8-3.15-5.8 3.15 1.2-6.5-4.8-4.55 6.55-0.85z" fill="none" stroke="#F7B928" stroke-width="1.6" stroke-linejoin="round"/></g></g><g data-n="Star 2"><g transform="translate(36 0) scale(1.3333 1.3333) translate(0 0)"><path d="M12 2.6l2.85 5.95 6.55 0.85-4.8 4.55 1.2 6.5-5.8-3.15-5.8 3.15 1.2-6.5-4.8-4.55 6.55-0.85z" fill="#F7B928"/><path d="M12 2.6l2.85 5.95 6.55 0.85-4.8 4.55 1.2 6.5-5.8-3.15-5.8 3.15 1.2-6.5-4.8-4.55 6.55-0.85z" fill="none" stroke="#F7B928" stroke-width="1.6" stroke-linejoin="round"/></g></g><g data-n="Star 3"><g transform="translate(72 0) scale(1.3333 1.3333) translate(0 0)"><path d="M12 2.6l2.85 5.95 6.55 0.85-4.8 4.55 1.2 6.5-5.8-3.15-5.8 3.15 1.2-6.5-4.8-4.55 6.55-0.85z" fill="#E8D3AA"/><path d="M12 2.6l2.85 5.95 6.55 0.85-4.8 4.55 1.2 6.5-5.8-3.15-5.8 3.15 1.2-6.5-4.8-4.55 6.55-0.85z" fill="none" stroke="#E8D3AA" stroke-width="1.6" stroke-linejoin="round"/></g></g></g></g><g data-n="Stage pill"><g transform="translate(195.36 1)"><rect width="118.64" height="30" rx="20" fill="rgb(242, 212, 158)"/><g data-n="Stage text"><text x="106.64" y="20" direction="rtl" font-family="Rubik" font-size="15" font-weight="500" fill="rgb(107, 68, 35)">שלב 7 מתוך 18</text></g></g></g></g></g><g data-n="Prompt card"><g transform="translate(26 68)"><rect width="314" height="92" rx="22" fill="rgb(255, 248, 236)"/><rect x="0.5" y="0.5" width="313" height="91" rx="22" fill="none" stroke="rgb(238, 214, 168)" stroke-width="1"/><g data-n="Prompt label"><text x="294" y="30" direction="rtl" font-family="Rubik" font-size="15" font-weight="500" fill="rgb(160, 121, 74)">דברו על</text></g><g data-n="Prompt"><text x="294" y="66" direction="rtl" font-family="Rubik" font-size="30" font-weight="700" fill="rgb(58, 31, 14)">הדבר הכי טוב בבוקר</text></g></g></g><g data-n="Voice level"><g transform="translate(26 172)"><g data-n="Wait zone"><rect x="0" y="30" width="112" height="44" rx="10" fill="rgb(245, 217, 168)"/></g><g data-n="Quiet 1"><ellipse cx="7" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 2"><ellipse cx="18" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 3"><ellipse cx="29" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 4"><ellipse cx="40" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 5"><ellipse cx="51" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 6"><ellipse cx="62" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 7"><ellipse cx="73" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 8"><ellipse cx="84" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 9"><ellipse cx="95" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Quiet 10"><ellipse cx="106" cy="52" rx="3" ry="3" fill="rgb(210, 181, 133)"/></g><g data-n="Level 1"><rect x="124" y="47" width="6" height="10" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 2"><rect x="135" y="42.5" width="6" height="19" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 3"><rect x="146" y="37" width="6" height="30" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 4"><rect x="157" y="41" width="6" height="22" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 5"><rect x="168" y="34" width="6" height="36" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 6"><rect x="179" y="31" width="6" height="42" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 7"><rect x="190" y="39" width="6" height="26" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 8"><rect x="201" y="35.5" width="6" height="33" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 9"><rect x="212" y="29.5" width="6" height="45" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 10"><rect x="223" y="34.5" width="6" height="35" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 11"><rect x="234" y="40.5" width="6" height="23" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 12"><rect x="245" y="36" width="6" height="32" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 13"><rect x="256" y="42.5" width="6" height="19" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 14"><rect x="267" y="38.5" width="6" height="27" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 15"><rect x="278" y="45" width="6" height="14" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 16"><rect x="289" y="42" width="6" height="20" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 17"><rect x="300" y="46" width="6" height="12" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Level 18"><rect x="311" y="48.5" width="6" height="7" rx="3" fill="rgb(90, 46, 18)"/></g><g data-n="Start marker"><rect x="115" y="22" width="3" height="60" rx="2" fill="rgb(226, 87, 43)"/></g><g data-n="Marker label"><g transform="translate(72 0)"><rect width="97.5" height="23" rx="12" fill="rgb(226, 87, 43)"/><g data-n="Marker text"><text x="87.5" y="16" direction="rtl" font-family="Rubik" font-size="14" font-weight="500" fill="rgb(255, 255, 255)">התחלת לדבר</text></g></g></g></g></g><g data-n="Time"><g transform="translate(26 268)"><g data-n="Time row"><g transform="translate(35.34 0)"><g data-n="Unit"><text x="43.09" y="75" direction="rtl" font-family="Rubik" font-size="30" font-weight="600" fill="rgb(160, 121, 74)">שנ׳</text></g><g data-n="Seconds"><text x="53.09" y="74" font-family="Rubik" font-size="88" font-weight="700" letter-spacing="-2" fill="rgb(58, 31, 14)">0.62</text></g></g></g><g data-n="Time label"><text x="217.23" y="103" direction="rtl" font-family="Rubik" font-size="16" fill="rgb(160, 121, 74)">עד שהתחלת לדבר</text></g></g></g><g data-n="Mic wrap"><g transform="translate(26 387)"><g data-n="Mic"><g transform="translate(105 4)"><rect width="104" height="104" rx="52" fill="rgb(74, 36, 16)"/><rect x="-4" y="-4" width="112" height="112" rx="52" fill="none" stroke="rgb(233, 201, 144)" stroke-width="8"/><g data-n="Mic icon"><g transform="translate(30 30) scale(3.1429 3.1429) translate(0 0)"><path d="M6.90088 0.58789q-0.64258 0.02734-1.18262 0.38623-0.53662 0.35547-0.80322 0.92969-0.14014 0.28027-0.19824 0.54687-0.02734 0.0957-0.02735 0.4751l-0.01367 4.40918 0.04102 0.16748q0.19824 0.78613 0.75879 1.26123 0.43408 0.36572 1.02197 0.51953 0.10938 0.02734 0.1914 0.03418 0.08545 0.00684 0.31104 0.00684 0.28027 0 0.43408-0.02734 0.15381-0.02734 0.3794-0.1128 0.46143-0.16748 0.82373-0.52295 0.36572-0.35889 0.54687-0.83398 0.04102-0.12646 0.08545-0.29395l0.05469-0.1709 0-4.15625q0-0.48877-0.02734-0.68701-0.01367-0.12646-0.07178-0.29394l-0.01367-0.02735q-0.23584-0.70068-0.80323-1.13476-0.56738-0.43408-1.30908-0.4751l-0.19824 0z m0.33838 1.18945q0.29395 0.05811 0.52978 0.26661 0.23926 0.2085 0.32129 0.47509 0.04443 0.12646 0.06494 0.3042 0.02051 0.17432 0.00684 2.25928l0 1.77734q-0.01367 0.36572-0.02734 0.43409-0.08545 0.29395-0.31788 0.52636-0.229 0.229-0.52294 0.31446-0.11279 0.02734-0.29395 0.02734-0.18115 0-0.29395-0.02734-0.30762-0.08545-0.5332-0.31446-0.22217-0.23242-0.30762-0.52636-0.01367-0.06836-0.02734-0.43409l0-1.77734q-0.01367-2.08496 0-2.26953 0.04102-0.30762 0.19482-0.54346 0.19824-0.29395 0.52637-0.42724 0.32813-0.1333 0.68018-0.06495z m-4.46729 3.48633q-0.14014 0.04102-0.2666 0.16748-0.0957 0.08545-0.1333 0.17774-0.03418 0.08887-0.03418 0.31445-0.01367 0.18115 0 0.69727 0 0.61865 0.01367 0.83056 0.01367 0.2085 0.08545 0.51612 0.0957 0.4751 0.31104 0.96044 0.21875 0.48193 0.52636 0.88526 0.46484 0.60156 1.09375 1.03564 0.62891 0.43408 1.35694 0.646 0.40674 0.11279 0.63232 0.12646l0.05469 0.01368 0.01367 0.70068q0 0.41699 0.01367 0.52978 0 0.16748 0.02735 0.22559 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.16748 0.16748 0.40674 0.16748 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.22559 0.01367-0.11279 0.01367-0.52978l0.01367-0.70068 0.05469-0.01368q0.04443 0 0.22558-0.04443 1.06299-0.19482 1.92432-0.8374 0.86133-0.646 1.3501-1.59619 0.36572-0.71436 0.49219-1.54151 0.02734-0.19482 0.02734-0.96386 0.01367-0.5332 0-0.70069 0-0.23926-0.0376-0.32812-0.03418-0.09229-0.12988-0.17774-0.18115-0.19482-0.44775-0.17431-0.2666 0.02051-0.42042 0.23242-0.09912 0.10938-0.11279 0.24267-0.01367 0.1333-0.01367 0.70752 0 0.54688-0.01367 0.78614-0.01367 0.23584-0.05469 0.47509-0.08545 0.38965-0.27685 0.79639-0.18799 0.40674-0.46827 0.72803-0.48877 0.60156-1.17578 0.92627-0.71436 0.34863-1.51074 0.34863-0.79639 0-1.52441-0.34863-0.49219-0.23926-0.88526-0.61866-0.9502-0.90918-1.07666-2.21142-0.01367-0.19482-0.01367-0.88184 0-0.57422-0.01367-0.69726-0.01367-0.12646-0.08545-0.23926-0.0957-0.14014-0.28027-0.2085-0.18115-0.07178-0.34864-0.03076z" fill="#FDEACB"/></g></g></g></g></g></g></svg></g></g></g>
</svg>
`;function dt(e,a){return Y(e,a,rt,(s,n)=>{const l=n.all("Level ");s.fromTo(l,{scaleY:.15,transformOrigin:"50% 50%"},{scaleY:1,duration:.25,stagger:.04,ease:"power2.out"},.3),O(s,[n.n("Start marker"),n.n("Marker label")],.3,.05,.15),W(s,n.n("Time"),1.1,12,.35),O(s,E(n,"Star 1").concat(E(n,"Star 2")),1.4,.15,.15)})}export{ft as mount,dt as mountTile};
