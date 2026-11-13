import{g as B}from"./index.CzGW6FVa.js";import{s as J}from"./story.BGBw0qPS.js";/* empty css                        */import{a as D,g as H,n as M,r as O,l as z}from"./flagship-art.CPA-ew9P.js";import"./minor-art.DWVZ5Lsh.js";const P={src:"/_astro/waving.B5PDMe4G.webp",width:576,height:640,format:"webp"},U=a=>typeof a=="string"?a:a.src,k='<svg class="sk-logo" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="4" width="40" height="40" rx="13" fill="none" stroke="currentColor" stroke-width="4"/><path d="M11.01 31.5A15 8.5 -30 1 0 13.82 21.37" fill="none" stroke="#a594ff" stroke-width="3.5" stroke-linecap="round"/><circle cx="11.01" cy="31.5" r="3.2" fill="#a594ff"/><circle cx="24" cy="24" r="4.5" fill="#c3b8ff"/></svg>',_=`<span class="sk-lockup" dir="ltr">${k}<b>Shakuf Labs</b></span>`;function E(){const l=(s,c)=>s<7&&c<7&&(s===0||c===0||s===6||c===6||s>1&&s<5&&c>1&&c<5),r=(s,c)=>s<8&&c<8;let i="",n=7;for(let s=0;s<25;s++)for(let c=0;c<25;c++){n=(n*31+11)%1009;const g=[[c,s],[24-c,s],[c,24-s]];(g.some(([d,f])=>r(d,f))?g.some(([d,f])=>l(d,f)):n%5<2)&&(i+=`M${c} ${s}h1v1h-1z`)}return`<svg viewBox="-2 -2 29 29" aria-hidden="true"><rect x="-2" y="-2" width="29" height="29" fill="#fff"/><path d="${i}" fill="#0a0c10"/></svg>`}const q='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V4M3 13v3M21 13v3M9 16h6"/><circle cx="9.5" cy="12.5" r=".6"/><circle cx="14.5" cy="12.5" r=".6"/></svg>',L='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',R=[{label:"רק המודל",icon:q},{label:"רק הקוד שמסביב",icon:L},{label:"שניהם יחד",icon:L+q}],G=[["#482","Oct 18 02:00",["6s","50s","1min 34s","3s",""]],["#481","Oct 17 02:00",["6s","49s","1min 36s","40s","13s"]],["#480","Oct 16 02:00",["7s","46s","1min 33s","44s","12s"]],["#479","Oct 15 02:00",["5s","51s","1min 37s","39s","11s"]],["#478","Oct 14 02:00",["6s","48s","1min 35s","41s","12s"]]],I=["השאלה נשלחת למודל, עם הגדרות 3 כלים","המודל מבקש: לוג הבילד","הקוד מריץ: לוג הבילד","התוצאה חוזרת למודל כטקסט","המודל מחליט: עוד כלי","המודל מבקש: קומיטים אחרונים","הקוד מריץ: קומיטים אחרונים","התוצאה חוזרת למודל כטקסט","המודל מחליט: לענות","תשובה סופית"],u=(a,l="")=>`<header class="sk-head"><span class="sk-section">${a}</span>${l}</header>`,A='<span class="sk-badge"><i></i>הדגמה</span>',Q=`
  <section class="sk-sc s-lobby">
    ${u("לובי",_)}
    <div class="lob-text">
      <p class="lob-kicker" dir="ltr">Daniel Mazhbits</p>
      <h4>איך סוכני AI באמת עובדים.</h4>
      <p class="lob-sub">סרקו עכשיו. הטלפון יתעורר רק כשנשאל משהו. מרחוק? ענו בצ'אט ואני אקריא.</p>
    </div>
    <div class="lob-row">
      <div class="lob-qr">${E()}</div>
      <div class="lob-m">
        <div class="lob-bubble"><span class="b-a">סרקו את הקוד. בלי שם, בלי הרשמה.</span><span class="b-b">עוד כמה ומתחילים.</span></div>
        <img src="${U(P)}" alt="" />
        <b class="lob-count" dir="ltr">28</b>
        <small>הצטרפו</small>
      </div>
    </div>
  </section>`,V=`
  <section class="sk-sc s-jk">
    ${u("פתיחה")}
    <h4 class="sk-h">שתיים בלילה, הדיפלוי נפל</h4>
    <p class="sk-body">בלי עזרה, פותחים את הלוג וגוללים, מחפשים את השורה האדומה ובודקים מה השתנה בקומיטים.</p>
    <div class="sk-jk" dir="ltr">
      <b class="jk-title">Stage View</b>
      <div class="jk-grid">
        <span></span>${["Checkout","Build","Test","Deploy","Smoke"].map(a=>`<b class="jk-col">${a}</b>`).join("")}
        ${G.map(([a,l,r],i)=>`
          <span class="jk-id${i===0?" is-bad":""}"><u>${a}</u><small>${l}</small></span>
          ${r.map((n,s)=>`<span class="jk-cell${i===0&&s===3?" is-fail":""}${n?"":" is-none"}">${n}${i===0&&s===3?"<em>failed</em>":""}</span>`).join("")}`).join("")}
      </div>
    </div>
    <p class="sk-msg">כולנו מכירים את הרגע הזה. השאלה היא מה AI באמת יכול לעשות בו.</p>
  </section>`,F=["לובי","פתיחה","סוכן","מודל","הוראות","זיכרון","כלים","לולאה","סיכון","סיכום"],N=`
  <section class="sk-sc s-con">
    <header class="con-top">
      ${k}
      <span class="con-btn">פתח מסך הקרנה</span>
      <span class="con-pos">פתיחה · שקופית 4 מתוך 43</span>
      <span class="con-time">עברו 7 דק' מתוך ~31</span>
    </header>
    <div class="con-tabs"><i></i>${F.map((a,l)=>`<span${l===1?' class="is-on"':""}>${a}</span>`).join("")}</div>
    <div class="con-now">
      <p class="con-kicker">עכשיו · אותה שאלה, עכשיו לסוכן · לוח הדגמה</p>
      <h4>הסוכן עונה</h4>
      <ul>
        <li>הוא ביקש את הלוג, אחר כך את הקומיטים, ורק אז ענה. משתנה, קומיט וקובץ.</li>
        <li>שימו לב לשורות האפורות. הן הרמז לכל ההרצאה.</li>
      </ul>
      <div class="con-keys">${["אותה שאלה, עם כלים","לוג ← קומיטים ← תשובה","משתנה, קומיט, קובץ"].map(a=>`<span><i></i>${a}</span>`).join("")}</div>
      <p class="con-say">אותה שאלה, הפעם לסוכן. הוא ביקש את הלוג, אחר כך את הקומיטים, ורק אז ענה: שם של משתנה, קומיט וקובץ. זה מה שצריך בשתיים בלילה.</p>
      <div class="con-cfg">
        <div><small>שאלה</small><span class="is-on">הרץ את הסוכן</span></div>
        <div><small>תצוגה</small><span class="con-seg"><u>צעד אחר צעד</u><u class="is-on">תמונה כוללת</u></span></div>
      </div>
      <div class="con-will"><p class="w-a"><b>יורץ:</b> סוכן, תמונה כוללת, לייב, שאלה מוכנה 1</p><p class="w-b"><b>יורץ:</b> סוכן, תמונה כוללת, הדגמה מוקלטת, שאלה מוכנה 1</p></div>
      <div class="con-run">
        <span class="con-seg con-src"><u class="s-live">לייב</u><u class="s-rec">הדגמה מוקלטת</u></span>
        <span class="con-exec"><b>הרצה</b><kbd>Enter</kbd></span>
      </div>
      <div class="con-nav"><span class="con-prev">הקודם</span><span class="con-next"><b>הבא:</b> מי באמת קרא את הלוג? · הצבעה בטלפון</span></div>
    </div>
  </section>`,b=a=>`<i class="ar ar-${a}"></i>`,K=`
  <section class="sk-sc s-agent">
    ${u("פתיחה",A)}
    <h4 class="sk-h">הסוכן עונה</h4>
    <p class="sk-msg sk-swap"><span class="m-a">אותה שאלה בדיוק. הפעם סוכן עם כלים</span><span class="m-b">הסוכן בדק לוג וקומיטים, ורק אז ענה</span></p>
    <div class="ag-card">
      <div class="dg">
        <b class="p p-send">שולחים למודל</b>${b("l")}<b class="p p-ask">המודל מבקש כלי?</b>${b("l")}<b class="p p-final">תשובה סופית</b>
        ${b("u")}<span></span>${b("d")}<span></span><span class="dg-count"><b>קריאות למודל: <u class="n-calls" dir="ltr">3</u></b><small>מגבלה בקוד: עד 5 סבבים</small></span>
        <b class="p p-add">מוסיפים את התוצאה</b>${b("r")}<b class="p p-run">הקוד מריץ את הכלי</b>
      </div>
      <div class="ag-cols">
        <div class="ag-answer">
          <h5>תשובת הסוכן</h5>
          <p class="ag-wait">הסוכן עובד...</p>
          <div class="ag-text">
            <p>סיבה: ה-deploy נכשל כי <mark>DB_URL</mark> לא הוגדר ב-prod. השורש הוא שינוי ב-<mark>infra-config</mark> שהסיר את <mark>DB_URL</mark> מ-<mark>deploy/prod.env</mark>.</p>
            <p dir="ltr" class="ag-mono"><mark>a3f9c21</mark> <mark>infra-config</mark> chore: remove unused env vars from prod config</p>
            <p class="ag-tools">כלים לפי הסדר: לוג הבילד ← קומיטים אחרונים</p>
          </div>
        </div>
        <div class="ag-steps">
          <h5 class="sk-swap"><span class="h-a">צעדים</span><span class="h-b">צעדים: 10</span></h5>
          <ol>${I.map((a,l)=>`<li><u dir="ltr">${l+1}</u>${a}</li>`).join("")}</ol>
          <div class="ag-roles">
            <b>שניהם, בתפקידים שונים</b>
            <p><b>המודל:</b> החליט לבקש את הלוג, וקרא את הטקסט שחזר עד שמצא את השורה עם DB_URL</p>
            <p><b>הקוד:</b> פנה לג'נקינס, הביא את הלוג, ושלח אותו למודל כטקסט</p>
          </div>
        </div>
      </div>
    </div>
  </section>`,W=`
  <section class="sk-sc s-vote">
    <div class="vt-frame"></div>
    <header class="sk-head"><span class="sk-section">פתיחה</span><span class="vt-pill"><b>הצבעה בטלפון</b><i></i>ענו <u class="n-ans" dir="ltr">21</u> מתוך 28 מחוברים</span></header>
    <h4 class="sk-h">מי באמת קרא את הלוג?</h4>
    <p class="sk-body">בתוך הסוכן יש שני חלקים: מודל שפה, כמו זה שמאחורי ChatGPT, וקוד רגיל שמפתחים כתבו סביבו. הלוג עצמו נמצא בשרת הג'נקינס.</p>
    <p class="vt-status"><i></i><b>הסקר פתוח</b> <u class="n-resp" dir="ltr">21</u> משיבים</p>
    <div class="vt-cards">${R.map(a=>`<div class="vt-card"><span class="vt-ic">${a.icon}</span><b>${a.label}</b></div>`).join("")}</div>
    <div class="vt-low">
      <p class="vt-bridge"><span>הלאה</span>נתחיל מהתמונה הכללית: מה ההבדל בין צ'אט לסוכן?</p>
      <div class="ph">
        <div class="ph-top" dir="ltr">${k}<b>Shakuf Labs</b><span dir="rtl">דוב-ורוד-86</span></div>
        <div class="ph-st"><span><i></i>מחובר</span><span>28 מחוברים</span></div>
        <p class="ph-k">שאלה פתוחה</p>
        <p class="ph-q">מי באמת קרא את הלוג?</p>
        ${R.map((a,l)=>`<div class="ph-opt${l===2?" is-mine":""}"><span class="vt-ic">${a.icon}</span><b>${a.label}</b></div>`).join("")}
      </div>
    </div>
  </section>`,x=[["q","הג'וב deploy-prod #482 נכשל בשלב Deploy עם השגיאה: DB_URL is not set. ..."],["a","אין לי כאן גישה לכלים. המשתנה החסר הוא כמעט בוודאות DB_URL. ..."],["q","מי עוד משתמש במשתנה הזה?"],["a","כדי לדעת מי עוד משתמש ב-DB_URL צריך חיפוש בקוד וב-CI. ..."],["q","תנסח לי הודעה קצרה לצוות על זה."],["a","סיבה: deploy-prod #482 נכשל כי המשתנה DB_URL לא מוגדר ב-prod. ..."]],X=[{tag:"הוראות",text:"אתה עוזר תורן לצוות DevOps. השתמש בכלים כדי לבדוק לוגים וקומיטים לפני שאתה עונה. ...",n:48,cls:"r-sys"},{tag:"שאלה",text:x[0][1],n:32,cls:"r-q1"},{tag:"תשובה",text:"כדי לענות מדויק צריך לבדוק לוגים וקומיטים, אבל אין לי כאן גישה. ...",n:237,cls:"r-a1 is-mem"},{tag:"שאלה",text:x[2][1],n:8,cls:"r-q2 is-mem"},{tag:"תשובה",text:"אין לי כאן גישה לכלים ולריפו כדי לבדוק בפועל. ...",n:186,cls:"r-a2 is-mem"},{tag:"שאלה",text:x[4][1],n:13,cls:"r-q3"}],Y=`
  <section class="sk-sc s-mem">
    ${u("זיכרון וחלון",A)}
    <h4 class="sk-h">מה נשלח בכל סבב</h4>
    <p class="sk-msg">בכל סבב נשלחת כל השיחה, והמונה עולה</p>
    <div class="mm-cols">
      <div class="mm-chat">
        ${x.map(([a,l],r)=>`<div class="mm-b mm-${a} c-${r}"><b>${a==="q"?"שאלה":"המודל"}</b><p>${l}</p></div>`).join("")}
      </div>
      <div class="mm-store">
        <div class="mm-top"><b>מה נשלח למודל עכשיו</b><span class="mm-on">זיכרון: פועל</span><span class="mm-sent">נשלח</span></div>
        <div class="mm-fold"><p>ועוד 2 הודעות, 80 טוקנים</p></div>
        ${X.map(a=>`<div class="mm-r ${a.cls}"><div class="mm-in"><span class="mm-tag">${a.tag}</span><p>${a.text}</p><span class="mm-n"><u dir="ltr">${a.n}</u> טוקנים<em>מהזיכרון</em></span></div></div>`).join("")}
        <div class="mm-foot"><b>סה"כ נשלח: <u class="n-sent" dir="ltr">524</u> טוקנים (ספירה מקומית)</b><span class="mm-plus">+<u class="n-plus" dir="ltr">199</u> מהסבב הקודם</span></div>
      </div>
    </div>
  </section>`,Z=`
  <div class="sk-progress"><i></i></div>
  ${Q}${V}${N}${K}${W}${Y}
  <div class="sk-clock" dir="ltr">21:04</div>
  <div class="sk-copy" dir="ltr">© 2026 Daniel Mazhbits. All rights reserved.</div>`;function lt(a,l){const r=document.createElement("div");r.className="sk sk-game",r.dir="rtl",r.innerHTML=Z,getComputedStyle(a).position==="static"&&(a.style.position="relative"),a.replaceChildren(r);const i=B.utils.selector(r),n=o=>i(o)[0],s=B.timeline({paused:!0}),c=[[".lob-count",0],[".n-calls",0],[".n-ans",0],[".n-resp",0],[".n-sent",80],[".n-plus",0]],g=(o,e,p,y,S)=>{const T=n(o),$={v:e};s.fromTo($,{v:e},{v:p,duration:S,ease:"none",immediateRender:!1,onUpdate:()=>{T.textContent=String(Math.round($.v))}},y)},h=(o,e,p,y)=>{e&&s.to(n(e),{autoAlpha:0,duration:.22,ease:"power2.in"},o),s.fromTo(n(p),{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:.32,ease:"power2.out",immediateRender:!1},o+.16),s.to(n(".sk-progress i"),{scaleX:y,duration:.4,ease:"power2.out"},o+.1)},v=(o,e,p=!1)=>{s.to(n(o),{backgroundColor:"#a594ff",color:"#0a0c10",duration:.18},e),p||s.to(n(o),{backgroundColor:"#242842",color:"#d6dbe4",duration:.18},e+.72)},d=(o,e)=>s.to(n(o),{height:"auto",autoAlpha:1,duration:.3,ease:"power2.out"},e),f=(o,e)=>s.to(n(o),{height:0,autoAlpha:0,duration:.25,ease:"power2.in"},e),m=(o,e,p)=>s.to(n(o),{autoAlpha:0,duration:.2},p).to(n(e),{autoAlpha:1,duration:.25},p+.15);let t=0;s.set(n(".s-lobby"),{autoAlpha:1},0),g(".lob-count",0,28,t+.3,2.2),m(".b-a",".b-b",t+1.6),t+=3.4,h(t,".s-lobby",".s-jk",.03),s.fromTo(i(".jk-cell.is-fail"),{outlineColor:"rgba(240,228,66,0)"},{outlineColor:"rgba(240,228,66,1)",duration:.3,immediateRender:!1},t+1),t+=3,h(t,".s-jk",".s-con",.07),t+=1.3,s.to(n(".s-live"),{backgroundColor:"rgba(0,0,0,0)",color:"#a8b0bf",borderColor:"rgba(0,0,0,0)",duration:.18},t).to(n(".s-rec"),{backgroundColor:"#242842",color:"#f3f5f9",borderColor:"#a594ff",duration:.18},t),m(".w-a",".w-b",t),t+=1.1,s.fromTo(n(".con-exec"),{scale:1},{scale:.92,duration:.09,yoyo:!0,repeat:1,ease:"power2.in",immediateRender:!1},t),t+=.5,h(t,".s-con",".s-agent",.1),t+=.6;const C=i(".ag-steps li"),w=[".p-send",".p-ask",".p-run",".p-add",".p-ask",".p-ask",".p-run",".p-add",".p-ask",".p-final"];C.forEach((o,e)=>{const p=t+e*.5;s.to(o,{autoAlpha:1,duration:.18},p),e<9?v(w[e],p):v(w[e],p,!0)}),g(".n-calls",0,1,t,.02),g(".n-calls",1,2,t+2,.02),g(".n-calls",2,3,t+4,.02),t+=4.7,m(".m-a",".m-b",t),s.to(n(".ag-wait"),{autoAlpha:0,duration:.15},t).to(n(".ag-text"),{autoAlpha:1,duration:.3},t+.1),t+=.8,m(".h-a",".h-b",t),s.to(n(".ag-steps ol"),{autoAlpha:0,duration:.2},t).to(n(".ag-roles"),{autoAlpha:1,duration:.3},t+.15),t+=2.3,h(t,".s-agent",".s-vote",.13),t+=.6,g(".n-ans",0,21,t,2.2),g(".n-resp",0,21,t,2.2),s.to(n(".ph-opt.is-mine"),{borderColor:"#a594ff",backgroundColor:"#242842",duration:.2},t+1),t+=3,h(t,".s-vote",".s-mem",.42),t+=1,d(".c-2",t),d(".c-3",t+.4),d(".r-a1",t).to(i(".r-a1 em"),{autoAlpha:1,duration:.2},t+.1),d(".r-q2",t+.2),g(".n-sent",80,325,t+.2,.7),g(".n-plus",0,245,t+.2,.7),s.to(n(".mm-plus"),{autoAlpha:1,duration:.2},t+.2),t+=2,s.to(i(".r-q2 em"),{autoAlpha:1,duration:.2},t+.1),f(".r-sys",t),f(".r-q1",t),d(".mm-fold",t),d(".r-a2",t+.1).to(i(".r-a2 em"),{autoAlpha:1,duration:.2},t+.2),d(".r-q3",t+.3),d(".c-4",t),d(".c-5",t+.4),f(".mm-chat .c-0",t),f(".mm-chat .c-1",t+.1),g(".n-sent",325,524,t+.3,.7),g(".n-plus",245,199,t+.3,.7),s.fromTo(n(".mm-foot"),{backgroundColor:"rgba(165,148,255,0)"},{backgroundColor:"rgba(165,148,255,0.22)",duration:.25,yoyo:!0,repeat:1,immediateRender:!1},t+1),s.to({},{duration:.3},t+1.6);const j=()=>c.forEach(([o,e])=>{n(o).textContent=String(e)});return l.reduced?(s.progress(1),{play(){},pause(){},destroy:()=>{s.kill(),a.replaceChildren()}}):J(r,a,s,{from:.05,reset:j})}const tt="/_astro/waving.B5PDMe4G.webp",st=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676 676" aria-hidden="true">
<rect data-n="ground" width="676" height="676" fill="rgb(169, 155, 255)"/>
<g data-n="Brand Row"><g transform="translate(40 32)"><g data-n="Brand"><text y="31" font-family="Heebo" font-size="30" font-weight="700" fill="rgb(13, 12, 20)"><tspan x="428.88">Shakuf</tspan><tspan x="531.3">Labs</tspan></text></g></g></g>
<g data-n="Stage"><svg x="0" y="100" width="636" height="620" viewBox="0 0 636 620"><rect width="636" height="620" fill="rgb(11, 12, 16)"/><g data-n="Live Pill"><g transform="translate(40 34)"><rect width="73.61" height="28" rx="14" fill="rgb(26, 29, 38)"/><g data-n="Live Dot"><ellipse cx="16" cy="14" rx="4" ry="4" fill="rgb(61, 220, 132)"/></g><g data-n="Live"><text x="28" y="19" font-family="'JetBrains Mono'" font-size="14" font-weight="500" fill="rgb(201, 205, 216)">live</text></g></g></g><g data-n="Section Row"><g transform="translate(300 34)"><g data-n="Section"><text x="296" y="18" direction="rtl" font-family="Heebo" font-size="17" font-weight="700" fill="rgb(155, 160, 174)">יסודות המודל</text></g></g></g><g data-n="Stage Title"><text x="596" y="100" direction="rtl" font-family="Heebo" font-size="38" font-weight="700" fill="rgb(255, 255, 255)">מה הסוכן באמת שולח?</text></g><g data-n="Request"><g transform="translate(300 140)"><rect width="296" height="223" rx="14" fill="rgb(20, 22, 29)"/><rect x="0.5" y="0.5" width="295" height="222" rx="14" fill="none" stroke="rgb(38, 42, 53)" stroke-width="1"/><g data-n="Request Head"><g transform="translate(16 16)"><g data-n="Tag"><text x="0" y="15" font-family="'JetBrains Mono'" font-size="14" font-weight="700" fill="rgb(169, 155, 255)">REQUEST</text></g><g data-n="Meta"><text y="15" font-family="'JetBrains Mono'" font-size="14" fill="rgb(140, 146, 163)"><tspan x="154.8">POST</tspan><tspan x="196.78">/v1/chat</tspan></text></g></g></g><g data-n="Request Body"><g transform="translate(16 47)"><g data-n="Line"><text y="15" font-family="'JetBrains Mono'" font-size="14" fill="rgb(110, 116, 134)"><tspan x="0">auth:</tspan><tspan x="50.39">Bearer</tspan><tspan x="109.19">••••</tspan></text></g><g data-n="Line"><text x="0" y="35" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)">{</text></g><g data-n="Line"><text y="55" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)"><tspan x="16.8">&quot;messages&quot;:</tspan><tspan x="117.59">[{</tspan></text></g><g data-n="Line"><text y="75" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)"><tspan x="33.59">&quot;role&quot;:</tspan><tspan x="100.78">&quot;user&quot;,</tspan></text></g><g data-n="Line"><text x="33.59" y="95" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)">&quot;content&quot;:</text></g><g data-n="Line"><text y="115" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)"><tspan x="50.39">&quot;Pick</tspan><tspan x="100.78">1</tspan><tspan x="117.58">to</tspan><tspan x="142.78">10&quot;</tspan></text></g><g data-n="Line"><text x="16.8" y="135" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)">}]</text></g><g data-n="Line"><text x="0" y="155" font-family="'JetBrains Mono'" font-size="14" fill="rgb(216, 220, 230)">}</text></g></g></g></g></g><g data-n="Response"><g transform="translate(300 379)"><rect width="296" height="93" rx="14" fill="rgb(20, 22, 29)"/><rect x="0.5" y="0.5" width="295" height="92" rx="14" fill="none" stroke="rgb(38, 42, 53)" stroke-width="1"/><g data-n="Response Head"><g transform="translate(16 16)"><g data-n="Tag"><text x="0" y="15" font-family="'JetBrains Mono'" font-size="14" font-weight="700" fill="rgb(169, 155, 255)">RESPONSE</text></g><g data-n="Meta"><text y="15" font-family="'JetBrains Mono'" font-size="14" fill="rgb(61, 220, 132)"><tspan x="213.59">200</tspan><tspan x="247.19">OK</tspan></text></g></g></g><g data-n="Response Body"><g transform="translate(16 47)"><g data-n="Line"><text y="22" font-family="'JetBrains Mono'" font-size="20" font-weight="700" fill="rgb(200, 191, 255)"><tspan x="0">{</tspan><tspan x="24">&quot;text&quot;:</tspan><tspan x="120">&quot;7&quot;</tspan><tspan x="168">}</tspan></text></g></g></g></g></g><g data-n="Mascot"><image data-src="sh-waving.png" x="488" y="480" width="112" height="124" preserveAspectRatio="xMidYMid meet"/></g></svg></g>
<g data-n="Phone" style="filter:drop-shadow(rgba(0, 0, 0, 0.4) 0px 18px 20px)"><g transform="translate(36 238)"><rect width="248" height="470" rx="36" fill="rgb(30, 32, 41)"/><rect x="0" y="0" width="248" height="470" rx="36" fill="none" stroke="rgb(58, 62, 76)" stroke-width="2"/><g data-n="Poll Screen"><svg x="9" y="9" width="230" height="452" viewBox="0 0 230 452"><rect width="230" height="452" rx="28" fill="rgb(251, 250, 255)"/><g data-n="Poll App"><text y="41" font-family="Heebo" font-size="14" font-weight="600" fill="rgb(122, 118, 144)"><tspan x="134.33">Shakuf</tspan><tspan x="181.8">Labs</tspan></text></g><g data-n="Question"><text x="212" y="79" direction="rtl" font-family="Heebo" font-size="23" font-weight="700" fill="rgb(17, 16, 24)">מה המודל יענה?</text></g><g data-n="Hint"><text x="212" y="113" direction="rtl" font-family="Heebo" font-size="15" fill="rgb(92, 88, 112)">בחרו מספר מ-1 עד 10</text></g><g data-n="Options"><g transform="translate(18 127)"><g data-n="Option 7"><g transform="translate(0 16)"><rect width="194" height="40" rx="10" fill="rgb(236, 232, 255)"/><rect x="0" y="0" width="194" height="40" rx="10" fill="none" stroke="rgb(139, 123, 255)" stroke-width="2"/><g data-n="Pct"><text x="12" y="25" font-family="'JetBrains Mono'" font-size="14" font-weight="500" fill="rgb(75, 59, 203)">46%</text></g><g data-n="Track"><g transform="translate(47.2 16)"><rect width="114.45" height="8" rx="4" fill="rgb(226, 224, 236)"/><g data-n="Bar"><rect x="40.45" y="0" width="74" height="8" rx="4" fill="rgb(139, 123, 255)"/></g></g></g><g data-n="Label"><text x="171.66" y="25.5" font-family="Heebo" font-size="18" font-weight="700" fill="rgb(17, 16, 24)">7</text></g></g></g><g data-n="Option 3"><g transform="translate(0 68)"><rect width="194" height="40" rx="10" fill="rgb(241, 240, 246)"/><g data-n="Pct"><text x="12" y="25" font-family="'JetBrains Mono'" font-size="14" font-weight="500" fill="rgb(92, 88, 112)">21%</text></g><g data-n="Track"><g transform="translate(47.2 16)"><rect width="114.45" height="8" rx="4" fill="rgb(226, 224, 236)"/><g data-n="Bar"><rect x="80.45" y="0" width="34" height="8" rx="4" fill="rgb(185, 180, 204)"/></g></g></g><g data-n="Label"><text x="171.66" y="25.5" font-family="Heebo" font-size="18" font-weight="700" fill="rgb(17, 16, 24)">3</text></g></g></g><g data-n="Option 5"><g transform="translate(0 120)"><rect width="194" height="40" rx="10" fill="rgb(241, 240, 246)"/><g data-n="Pct"><text x="12" y="25" font-family="'JetBrains Mono'" font-size="14" font-weight="500" fill="rgb(92, 88, 112)">19%</text></g><g data-n="Track"><g transform="translate(47.2 16)"><rect width="114.45" height="8" rx="4" fill="rgb(226, 224, 236)"/><g data-n="Bar"><rect x="84.45" y="0" width="30" height="8" rx="4" fill="rgb(185, 180, 204)"/></g></g></g><g data-n="Label"><text x="171.66" y="25.5" font-family="Heebo" font-size="18" font-weight="700" fill="rgb(17, 16, 24)">5</text></g></g></g><g data-n="Option אחר"><g transform="translate(0 172)"><rect width="194" height="40" rx="10" fill="rgb(241, 240, 246)"/><g data-n="Pct"><text x="12" y="25" font-family="'JetBrains Mono'" font-size="14" font-weight="500" fill="rgb(92, 88, 112)">14%</text></g><g data-n="Track"><g transform="translate(47.2 16)"><rect width="97.84" height="8" rx="4" fill="rgb(226, 224, 236)"/><g data-n="Bar"><rect x="75.84" y="0" width="22" height="8" rx="4" fill="rgb(185, 180, 204)"/></g></g></g><g data-n="Label"><text x="182" y="25" direction="rtl" font-family="Heebo" font-size="15" font-weight="700" fill="rgb(17, 16, 24)">אחר</text></g></g></g></g></g><g data-n="Votes"><text x="212" y="374" direction="rtl" font-family="Heebo" font-size="14" font-weight="500" fill="rgb(122, 118, 144)">300 קולות</text></g></svg></g></g></g>
</svg>
`;function rt(a,l){return D(a,l,st,(r,i)=>{H(r,M(i,"Bar"),0,"x",.7,.08),O(r,M(i,"Line"),.3,.07,.1),z(r,i.n("Response"),1.1,10,.35),z(r,i.n("Mascot"),1.35,12,.35)},{"sh-waving.png":tt})}export{lt as mount,rt as mountTile};
