import{g as l}from"./index.CzGW6FVa.js";import{s as $,t as b}from"./story.BGBw0qPS.js";/* empty css                        */const y={activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',chart:'<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',sliders:'<path d="M21 4h-7"/><path d="M10 4H3"/><path d="M21 12h-9"/><path d="M8 12H3"/><path d="M21 20h-5"/><path d="M12 20H3"/><path d="M14 2v4"/><path d="M8 10v4"/><path d="M16 18v4"/>',book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',wand:'<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/>',phone:'<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',term:'<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',more:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',undo:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',unplug:'<path d="m19 5 3-3"/><path d="m2 22 3-3"/><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"/>',ok:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',hand:'<path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',ext:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'},o=s=>`<svg class="cc-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${y[s]}</svg>`,u={en:{home:"Home",sessions:"Sessions & restore",find:"Find a session…",live:"Live · every 5 seconds",check:"Check now",issues:"2 issues - can be fixed automatically",issuesSub:"The session runs but the phone does not see it",fix:"Fix all automatically",details:"Details",where:"Where to?",pills:["Network","Sign-in","Remote Control server","Watchdog","Sessions: 6 of 6 running"],action:"Your action: 1",cards:[["activity","Sessions & restore","What runs, what is linked to the phone and what fell. Restore and restart in one click.","5 of 6 connected · 1 need fixing"],["search","Session search","Find any session by name, message or content, and see where it runs","No sessions fell in the last day"],["plus","New session","Ready profiles or a custom build. Opens in tmux in one click.","7 profiles"],["file","Logs","Live stream, filter and search. Watchdog, restore and daemon.","4 events in the last hour"],["chart","Usage monitor","Tokens and cost by day, model and project.","Week 24% · Today 96K"],["sliders","Manage","Rules, skills and files, model, MCP, hooks, plugins.","Claude 2.0.0 · up to date"],["book","Guide","What each part does, and what to do when something breaks.",""]],needYou:"Needed from you: talk-notes waits for an answer",needSub:"A menu in the session waits for your choice",copy:"Copy",title:"Sessions under auto-restore",subBefore:"6 listed · 5 linked to the phone · come back by themselves after a restart",subAfter:"6 listed · 6 linked to the phone · come back by themselves after a restart",restoreAll:"Restore all fallen",add:"Add session",cols:["Name","State","Phone<br>(Remote Control)","Last activity","Actions"],active:"Active",waiting:"Waiting for your approval",connected:"Connected",disconnected:"Disconnected",reconnect:"Reconnect",approve:"Open to approve",phone:"Open on phone",logT:"Live log",logTabs:["All","Watchdog","Restore","Daemon"],times:["2 min ago","6 min ago","12 min ago","40 min ago","2 h ago","yesterday"],one:"1 issue",good:"All good"}},v=["invoice-tests","talk-notes","parser-split","old-branches","photo-sort","store-rename"],g=[["08:39:07","warn","network down (api.anthropic.com unreachable), remote-control not restarted"],["08:40:07","warn","network down (api.anthropic.com unreachable), remote-control not restarted"],["08:41:07","warn","network down (api.anthropic.com unreachable), remote-control not restarted"],["08:42:07","","last output of the stopped remote-control:"],["08:42:07","","Connection lost"],["08:42:09","ok","started remote-control in claude-RC-general:rc-daemon"]];function m(s,i,t){const n=document.createElement("div");return n.className=i,n.dir="ltr",n.lang="en",n.innerHTML=`<div class="cc-scene">${t}</div>`,s.replaceChildren(n),n}function f(s){const i=s.pills.map(n=>`<span class="cc-pill">${o("ok")}<span>${n}</span></span>`).join(""),t=s.cards.map(([n,c,e,a],p)=>`<div class="cc-card ${p===0?"cc-warn":""}">
        <span class="cc-ibox">${o(n)}</span>
        <h3>${c}</h3><p>${e}</p>
        ${a?`<div class="cc-stat"><span class="cc-dot ${p===0?"warn":p===3?"info":"ok"}"></span><span>${a}</span></div>`:""}
      </div>`).join("");return`<div class="cc-page cc-home">
    <div class="cc-top">
      <b class="cc-brand">Claude Control</b>
      <span class="cc-find">${o("search")}<span>${s.find}</span></span>
    </div>
    <div class="cc-hero">
      <div class="cc-hl"><span class="cc-dot warn"></span><span>${s.issues}</span></div>
      <div class="cc-hsub">${s.issuesSub}</div>
      <div class="cc-pills">${i}<span class="cc-pill cc-pill-warn">${o("hand")}<span>${s.action}</span></span></div>
      <div class="cc-hacts"><span class="cc-btn primary">${o("wand")}<span>${s.fix}</span></span><span class="cc-btn">${s.details}</span></div>
    </div>
    <div class="cc-label">${s.where}</div>
    <div class="cc-cards">${t}</div>
  </div>`}function M(s){const i=v.map((n,c)=>{const e=c===0,a=c===1,p=`<span class="cc-rc ok">${o("phone")}<span>${s.connected}</span></span>`,r=`<span class="cc-btn sm pri">${o("phone")}<span>${s.phone}</span></span>`;return`<div class="cc-row ${e?"cc-hot":""}">
      ${e?'<span class="cc-hotbg"></span>':""}
      <span class="cc-nm">${n}</span>
      <span class="cc-st"><span class="cc-dot ${a?"warn":"ok"}"></span><span class="${a?"cc-st-warn":""}">${a?s.waiting:s.active}</span></span>
      ${e?`<span class="cc-swap"><span class="cc-rc bad cc-was">${o("unplug")}<span>${s.disconnected}</span></span><span class="cc-now">${p}</span></span>`:p}
      <span class="cc-last">${s.times[c]}</span>
      <span class="cc-acts">
        ${e?`<span class="cc-swap"><span class="cc-btn sm pri primary cc-was cc-go">${o("unplug")}<span>${s.reconnect}</span></span><span class="cc-now">${r}</span></span>`:a?`<span class="cc-btn sm pri">${o("ext")}<span>${s.approve}</span></span>`:r}
        <span class="cc-ib">${o("term")}</span><span class="cc-ib">${o("more")}</span>
      </span>
    </div>`}).join(""),t=g.map(([n,c,e])=>`<div class="cc-ll ${c}"><span class="cc-ts">${n}</span>${e}</div>`).join("");return`<div class="cc-page cc-ses">
    <div class="cc-top">
      <span class="cc-crumb"><span>${s.home}</span><i>/</i><b>${s.sessions}</b></span>
      <span class="cc-live"><span class="cc-dot ok"></span><span>${s.live}</span></span>
      <span class="cc-btn sm">${s.check}</span>
    </div>
    <div class="cc-banner">
      <div class="cc-bn-t"><b>${s.needYou}</b><span>${s.needSub}</span></div>
      <code>tmux attach -t rc-resume</code>
      <span class="cc-btn sm">${o("copy")}<span>${s.copy}</span></span>
    </div>
    <div class="cc-panel">
      <div class="cc-ph">
        <div class="cc-ttl"><h2>${s.title}</h2></div>
        <span class="cc-btn sm primary">${o("undo")}<span>${s.restoreAll}</span></span>
        <span class="cc-btn sm">${o("plus")}<span>${s.add}</span></span>
        <div class="cc-sub cc-swap"><span class="cc-was">${s.subBefore}</span><span class="cc-now">${s.subAfter}</span></div>
      </div>
      <div class="cc-row cc-head">${s.cols.map(n=>`<span>${n}</span>`).join("")}</div>
      ${i}
    </div>
    <div class="cc-panel cc-logs">
      <div class="cc-lh"><b>${s.logT}</b><span class="cc-ltabs">${s.logTabs.map((n,c)=>`<span class="${c===1?"on":""}">${n}</span>`).join("")}</span></div>
      <div class="cc-lbody" dir="ltr">${t}</div>
    </div>
  </div>`}const w='<svg class="cc-cursor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 9-6.5 1.5L9 20z" fill="#EDE9E3" stroke="#171614" stroke-width="1.5" stroke-linejoin="round"/></svg>';function S(s,i){const t=u.en,n=m(s,"cc",`${f(t)}${M(t)}${w}`);if(i.reduced)return{play(){},pause(){},destroy:()=>s.replaceChildren()};const c=l.utils.selector(n),e=p=>`${p}%`,a=l.timeline({paused:!0});return a.set(c(".cc-home"),{opacity:1},.001),a.set(c(".cc-ses"),{opacity:0},.001),a.set(c(".cc-was"),{opacity:1},.001),a.set(c(".cc-now"),{opacity:0},.001),a.set(c(".cc-hotbg"),{opacity:1},.001),a.set(c(".cc-cursor"),{opacity:0,left:e(62),top:"86%"},.001),a.to(c(".cc-cursor"),{opacity:1,duration:.2},.9),a.to(c(".cc-cursor"),{left:e(18),top:"58%",duration:.7,ease:"power2.inOut"},.95),a.to(c(".cc-home .cc-card:first-child"),{scale:.97,duration:.08,yoyo:!0,repeat:1},1.7),a.to(c(".cc-home"),{opacity:0,duration:.3,ease:"sine.inOut"},1.9),a.to(c(".cc-ses"),{opacity:1,duration:.3,ease:"sine.inOut"},1.9),a.to(c(".cc-cursor"),{left:e(80),top:"35%",duration:.8,ease:"power2.inOut"},2.9),a.to(c(".cc-go"),{scale:.93,duration:.09,yoyo:!0,repeat:1},3.8),a.to(c(".cc-go"),{opacity:.6,duration:.15},4),a.to(c(".cc-was"),{opacity:0,duration:.25},4.8),a.to(c(".cc-now"),{opacity:1,duration:.25},4.85),a.to(c(".cc-hotbg"),{opacity:0,duration:.4},4.8),a.to(c(".cc-cursor"),{opacity:0,duration:.25},5.4),$(n,s,a,{from:.01,hold:2.6})}function L(s,i){const t=u.en,n=v.slice(0,5).map((p,r)=>{const d=r===0,h=`<span class="cc-rc ok">${o("phone")}<span>${t.connected}</span></span>`;return`<div class="cc-trow ${d?"cc-hot":""}">
        ${d?'<span class="cc-hotbg"></span>':""}
        <div class="cc-tl"><span class="cc-nm">${p}</span>
          <span class="cc-tmeta"><span class="cc-st"><span class="cc-dot ok"></span><span>${t.active}</span></span>
          ${d?`<span class="cc-swap"><span class="cc-rc bad cc-was">${o("unplug")}<span>${t.disconnected}</span></span><span class="cc-now">${h}</span></span>`:h}</span></div>
        ${d?`<span class="cc-swap cc-tend"><span class="cc-btn primary cc-was cc-go">${o("unplug")}<span>${t.reconnect}</span></span><span class="cc-now cc-last">${t.times[0]}</span></span>`:`<span class="cc-last cc-tend">${t.times[r]}</span>`}
      </div>`}).join(""),c=m(s,"cc cc-t",`<div class="cc-thead"><b>${t.sessions}</b>
      <span class="cc-swap cc-tstate"><span class="cc-tag warn cc-was"><span class="cc-dot warn"></span>${t.one}</span><span class="cc-tag ok cc-now"><span class="cc-dot ok"></span>${t.good}</span></span></div>
    <div class="cc-tlist">${n}</div>`);if(i.reduced)return{enter(){},leave(){},destroy:()=>s.replaceChildren()};const e=l.utils.selector(c),a=l.timeline({paused:!0});return a.to(e(".cc-go"),{scale:.93,duration:.09,yoyo:!0,repeat:1},.25),a.to(e(".cc-go"),{opacity:.6,duration:.12},.45),a.to(e(".cc-was"),{opacity:0,duration:.22},1),a.to(e(".cc-now"),{opacity:1,duration:.22},1.05),a.to(e(".cc-hotbg"),{opacity:0,duration:.35},1),b(s,a,{rest:0})}export{S as mount,L as mountTile};
