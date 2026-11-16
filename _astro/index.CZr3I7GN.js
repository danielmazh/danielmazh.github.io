import{g as $}from"./index.CzGW6FVa.js";import{s as N,t as F}from"./story.BGBw0qPS.js";/* empty css                        */const I={plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',chevronDown:'<path d="M6 9l6 6 6-6"/>',chevron:'<path d="M9 6l6 6-6 6"/>',basket:'<path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>',copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',whatsapp:'<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.7-2-1-1 .9a5 5 0 0 1-2.2-2.2l.9-1-1-2z"/>',grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'};function t(o,c=""){return`<svg viewBox="0 0 24 24" aria-hidden="true"${c?` style="color:${c}"`:""}>${I[o]??""}</svg>`}function H(o,c){getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.replaceChildren(c)}const v=(o,c)=>`<span class="hs-swap ${o}">${c.map(n=>`<span>${n}</span>`).join("")}</span>`,O=(o,c="")=>`<span class="hs-typed ${c}">${[...o].map(n=>`<span>${n===" "?"&nbsp;":n}</span>`).join("")}</span>`,P=(o,c=!1)=>`<span class="hs-stepper"><span class="hs-step${c?" is-off":""}">${t("minus")}</span><output>${o}</output><span class="hs-step">${t("plus")}</span></span>`,x=(o,c,n,a="",r="")=>`<div class="hs-row ${r}"><span class="hs-tile">${o}</span><span class="hs-text"><b>${c}</b><small>${n}</small></span>${a}</div>`,L=`
  <div class="hs-nav">
    <span class="hs-nav-pill"></span>
    <span class="hs-nav-item n-home">${t("basket")}Home<i>${t("basket")}<em>Home</em></i></span>
    <span class="hs-nav-item n-products">${t("grid")}Products<i>${t("grid")}<em>Products</em></i></span>
    <span class="hs-nav-item n-settings">${t("gear")}Settings<i>${t("gear")}<em>Settings</em></i></span>
  </div>`,E=`
  <div class="hs-screen s-lang is-first">
    <div class="hs-hero hs-welcome">
      <div class="hs-floats"><span>🍞</span><span>🥛</span><span>🥕</span></div>
      <h4><span dir="rtl" lang="he">קניות לבית</span><small>Home Shopping</small></h4>
    </div>
    <div class="hs-main">
      <div class="hs-card hs-lang-card">
        <span class="hs-btn hs-primary hs-lang-btn" dir="rtl" lang="he">עברית</span>
        <span class="hs-btn hs-primary hs-lang-btn b-en">English</span>
      </div>
    </div>
  </div>`,j=[["Set once:",'for each product, how much to keep at home and on which trip you buy it. In "Products".'],["At home:",'used something, or it ran out? Find it in "What ran out?" and mark it.'],["Go shopping:",'"Go shopping" opens the list, sorted by store. Tick what you take.'],['"Done":',"what you bought goes into stock, and the next list updates by itself."]],W=`
  <div class="hs-screen s-home">
    <div class="hs-scroll home-scroll">
      <div class="hs-hero">
        <p class="hs-status"><b>Our home</b><span><i class="hs-dot"></i>Synced</span></p>
        <div class="hs-next">
          <p class="hs-when">Next trip • Tuesday</p>
          <h4><span class="hs-e">🧺</span> Big shop</h4>
          ${v("hs-sub home-sub",["3 items • about ₪64","4 items • about ₪73"])}
          <span class="hs-btn hs-primary hs-go">${t("basket")}Go shopping</span>
          <div class="hs-trips">
            <span class="hs-chip"><span class="hs-e">🛒</span> Weekend <small>Thursday</small></span>
            <span class="hs-chip"><span class="hs-e">🍞</span> Bakery <small>Friday</small></span>
          </div>
        </div>
      </div>
      <div class="hs-main">
        <div class="hs-card hs-how">
          <div class="hs-card-head"><span class="hs-title">How it works</span><span class="how-close">${t("close")}</span></div>
          <ol>${j.map(([o,c])=>`<li><b>${o}</b> ${c}</li>`).join("")}</ol>
        </div>
        <div class="hs-card">
          <div class="hs-title">What ran out?</div>
          <div class="hs-search home-search">${t("search")}<span class="hs-ph">For example: rice</span>${O("rice","home-typed")}</div>
          <div class="hs-result">
            <span class="hs-tile">🍚</span>
            <span class="hs-text"><b>Rice</b><small>3 of 3 at home</small></span>
            <span class="hs-chip hs-chip-used">Used</span>
          </div>
        </div>
        <div class="hs-card hs-fold hs-recent" style="--full:154;--h:0">
          <div class="hs-title">Marked lately</div>
          ${x("🍚","Rice","2 of 3 at home",'<span class="hs-undo">Undo</span>')}
        </div>
        <div class="hs-card">
          <div class="hs-card-head"><span class="hs-title">On the list: Big shop</span>${t("chevronDown")}</div>
        </div>
      </div>
    </div>
    <div class="hs-veil">
      <div class="hs-sheet">
        <div class="hs-sheet-head"><span class="hs-tile hs-tile-card">🍚</span><b>Rice</b></div>
        <div class="hs-setting"><b>I used:</b>${P("1 kg",!0)}</div>
        <p class="hs-math">At home: 3 → <b>2</b> kg<br>Next trip: +1 (back to 3)<br>Big shop, on Tuesday</p>
        <span class="hs-btn hs-primary hs-ok">${t("check")}OK</span>
        <div class="hs-btn-row"><span class="hs-btn hs-secondary">All gone</span><span class="hs-btn hs-text-btn">Cancel</span></div>
      </div>
    </div>
  </div>`,y=(o,c,n,a,r=!1)=>`
  <div class="hs-card hs-product">
    <span><span class="hs-tile hs-tile-card">${o}</span><b>${c}</b><small>${n}</small></span>
    <span class="hs-level${r?"":" is-full"}"><span style="inline-size:${a}%"></span></span>
    <span class="hs-used">Used</span>
  </div>`,V=`
  <div class="hs-screen s-products">
    <div class="hs-scroll products-scroll">
      <div class="hs-hero">
        <div class="hs-hero-top">
          <div class="hs-hero-title"><h4>Products</h4>${v("hs-sub products-count",["24 products","25 products"])}</div>
          <div class="hs-actions">
            <span class="hs-round">${t("clipboard")}</span>
            <span class="hs-btn hs-primary hs-sm hs-add">${t("plus")}Add</span>
          </div>
        </div>
        <div class="hs-search">${t("search")}<span class="hs-ph">Search product or category</span></div>
      </div>
      <div class="hs-main">
        <div class="hs-pills">
          <span class="hs-chip">All</span><span class="hs-chip">Baby</span><span class="hs-chip">Dairy</span><span class="hs-chip is-on">Dry goods</span><span class="hs-chip">Fish</span>
        </div>
        <div class="hs-grid">
          ${y("🌾","Flour","2 of 2 at home",100)}
          ${y("🍚","Rice","2 of 3 at home",67,!0)}
          ${y("🧂","Spices","1 of 1 at home",100)}
          ${y("🍵","Tea","1 of 1 at home",100)}
        </div>
      </div>
    </div>
  </div>`,z=`
  <div class="hs-screen s-form">
    <div class="hs-scroll form-scroll">
      <div class="hs-main">
        <div class="hs-page-head">
          <div><h4>New product</h4>${v("hs-muted form-sub",["General • No store","Dairy • No store"])}</div>
          <span class="hs-round hs-round-plain">${t("close")}</span>
        </div>
        <div class="hs-form-pic">
          ${v("hs-tile form-emoji",["🛒","🥛"])}
          ${v("hs-hint form-pic-hint",["Picture comes from the name","Picture chosen by AI"])}
        </div>
        <div class="hs-card">
          <div class="hs-title">Details</div>
          <div class="hs-field"><b>Name</b><div class="hs-input">${O("oat milk","form-typed")}<span class="form-clean">Oat milk</span></div></div>
          <div class="hs-ai">
            <span class="hs-btn hs-secondary hs-sm ai-btn"><span class="hs-e">✨</span>${v("",["Fill with AI","AI is filling...","Fill with AI"])}</span>
            <span class="hs-btn hs-text-btn hs-sm ai-undo">Undo</span>
            ${v("hs-hint ai-note",["Fills name, category, price and picture","Filled: name, category, price, picture"])}
          </div>
          <div class="hs-field"><b>Category</b><div class="hs-input"><span class="form-cat">Dairy</span></div></div>
          <div class="hs-field"><b>Store</b><div class="hs-input">No store${t("chevronDown")}</div></div>
          <div class="hs-field"><b>Bought on which trip</b>
            <div class="hs-chips">
              <span class="hs-chip is-on">${t("check")}Big shop</span>
              <span class="hs-chip chip-weekend"><span class="hs-e">🛒</span>Weekend</span>
              <span class="hs-chip"><span class="hs-e">🍞</span>Bakery</span>
            </div>
          </div>
        </div>
        <div class="hs-card">
          <div class="hs-title">Amounts</div>
          <div class="hs-setting"><b>Keep at home</b>${P("2 units")}</div>
        </div>
      </div>
    </div>
    <div class="hs-dock"><span class="hs-btn hs-primary form-save">${t("check")}Save</span></div>
  </div>`,G=`
  <div class="hs-screen s-settings">
    <div class="hs-scroll settings-scroll">
      <div class="hs-main">
        <div class="hs-page-head"><div><h4>Settings</h4><small>Our home</small></div></div>
        <div class="hs-card">
          <div class="hs-title">Home planning</div>
          <div class="hs-rows">
            ${x("🛒","Stores","6 stores, in route order",t("chevron"))}
            ${x("🧺","Trips and days","3 trips a week",t("chevron"))}
          </div>
        </div>
        <div class="hs-card">
          <div class="hs-title">Help and language</div>
          ${x("💡","Help","How to use the app",t("chevron"))}
          <div class="hs-lang-label">Language</div>
          <div class="hs-chips"><span class="hs-chip" dir="rtl" lang="he">עברית</span><span class="hs-chip is-on">English</span></div>
        </div>
        <div class="hs-card">
          <div class="hs-title">Active home</div>
          <div class="hs-chips"><span class="hs-chip is-on">Our home</span><span class="hs-chip">${t("plus")}Another home</span></div>
        </div>
        <div class="hs-card">
          <div class="hs-title">Join code</div>
          <p class="hs-card-sub">Share the code with the people you live with</p>
          <div class="hs-code">KX7PM2QA</div>
          <span class="hs-btn hs-primary">${t("whatsapp")}Send on WhatsApp</span>
          <div class="hs-btn-row"><span class="hs-btn hs-brand">${t("copy")}Copy link</span><span class="hs-btn hs-text-btn">New code</span></div>
        </div>
      </div>
    </div>
  </div>`,w=(o,c,n,a)=>`
  <div class="hs-line l-${o}">
    <span class="hs-tile">${c}</span>
    <span class="hs-text"><b>${n}</b><strong>${a}</strong></span>
    <span class="hs-ring">${t("check")}</span>
  </div>`,U=`
  <div class="hs-screen s-shop">
    <div class="hs-scroll shop-scroll">
      <div class="hs-hero hs-shop-head">
        <span class="hs-round">${t("close")}</span>
        <div class="hs-hero-title">
          <h4><span class="hs-e">🧺</span> Big shop</h4>
          ${v("hs-sub shop-left",["4 of 4 left • ₪73 to go","3 of 4 left • ₪64 to go","2 of 4 left • ₪50 to go"])}
        </div>
      </div>
      <div class="hs-main">
        <span class="hs-btn hs-secondary">${t("plus")}Add to the list</span>
        <div class="hs-card hs-store">
          <div class="hs-store-head"><div><b><span class="hs-e">🏬</span> Discount store</b>${v("hs-count store-count",["3 items","2 items"])}</div>${v("store-total",["<em>₪59</em>","<em>₪50</em>"])}</div>
          <div>
            ${w("eggs","🥚","Eggs","1 pack (30 eggs)")}
            ${w("rice","🍚","Rice","1 kg")}
            ${w("tea","🍵","Tea","1 pack (25 tea bags)")}
          </div>
        </div>
        <div class="hs-card hs-store hs-fold store-local">
          <div class="hs-store-head"><div><b><span class="hs-e">🛒</span> Local market</b><span class="hs-count">1 item</span></div><em>₪14</em></div>
          <div>${w("milk","🥛","Milk","2 liters")}</div>
        </div>
        <div class="hs-card hs-fold hs-cart">
          <div class="hs-store-head"><div><b><span class="hs-e">🛒</span> ${v("",["In the cart (1)","In the cart (2)"])}</b></div>${t("chevronDown")}</div>
        </div>
      </div>
    </div>
    <div class="hs-dock">
      <span class="hs-btn hs-primary hs-done"><span class="hs-done-off"></span>${t("check")}${v("",["Done","Done • 1 item","Done • 2 items"])}</span>
      <p class="hs-hint hs-done-hint">Tick what you took</p>
    </div>
  </div>`,K=`${E}${W}${V}${z}${G}${U}${L}<span class="hs-touch"></span>`;function X(o,c){const n=document.createElement("div");n.className="hs hs-game",n.dir="ltr",n.lang="en",n.innerHTML=K,H(o,n);const a=$.utils.selector(n),r=a(".hs-touch")[0],e=$.timeline({paused:!0}),M=h=>()=>{const i=n.getBoundingClientRect(),l=a(h)[0].getBoundingClientRect();return{left:(l.left+l.width/2-i.left)/i.width*100,top:(l.top+l.height/2-i.top)/i.height*100}},f=(h,i)=>{const l=M(h);e.to(r,{left:()=>`${l().left}%`,top:()=>`${l().top}%`,duration:.45,ease:"power2.inOut"},i)},d=(h,i)=>(f(h,i),e.to(r,{scale:.72,duration:.1,ease:"power2.in"},i+.45).to(r,{scale:1,duration:.2,ease:"power2.out"},i+.55),i+.55),b=(h,i)=>e.to(a(h),{autoAlpha:1,duration:.26},i),S=(h,i)=>e.to(a(h),{autoAlpha:0,duration:.22},i),g=(h,i,l)=>{S(h,l),b(i,l)},u=(h,i,l,m=.5)=>e.to(a(h),{"--s":i,duration:m,ease:"power2.inOut"},l),p=(h,i,l)=>{const m=a(`${h} > span`);e.to(m[i-1],{opacity:0,duration:.14},l).to(m[i],{opacity:1,duration:.14},l+.08)},D=(h,i,l=.08)=>(a(`${h} > span`).forEach((m,R)=>e.set(m,{opacity:1},i+R*l)),i+a(`${h} > span`).length*l),A=(h,i,l,m)=>{e.to(a(".hs-nav-pill"),{xPercent:i*100,x:()=>i*4*B(),duration:.42,ease:"power3.inOut"},m).to(a(`.n-${l} i`),{opacity:0,duration:.18},m).to(a(`.n-${h} i`),{opacity:1,duration:.18},m+.14)},T=(h,i)=>{e.to(a(`.l-${h} .hs-ring`),{backgroundColor:"#0e4a33",borderColor:"#0e4a33",duration:.16},i).fromTo(a(`.l-${h} .hs-ring`),{scale:.8},{scale:1,duration:.4,ease:"back.out(3)",immediateRender:!1},i).to(a(`.l-${h} .hs-ring svg`),{strokeDashoffset:0,duration:.26},i+.05)};$.set(a(".hs-sheet"),{yPercent:102}),$.set(r,{left:"50%",top:"86%"}),e.to(r,{opacity:1,duration:.2},.2);let s=d(".b-en",.35);g(".s-lang",".s-home",s+.05),b(".hs-nav",s+.1),s+=1.2,s=d(".how-close",s),e.to(a(".hs-how"),{height:0,paddingTop:0,paddingBottom:0,marginTop:()=>-16*B(),opacity:0,duration:.4,ease:"power2.inOut"},s),s+=.5,u(".home-scroll",-120,s),s+=.6,s=d(".home-search",s),e.set(a(".home-search .hs-ph"),{opacity:0},s),s=D(".home-typed",s+.1),e.to(a(".hs-result"),{"--h":72,duration:.26,ease:"power2.out"},s),s=d(".hs-chip-used",s+.4),e.set(a(".hs-veil"),{visibility:"visible"},s).to(a(".hs-veil"),{backgroundColor:"rgb(23 32 27 / 0.45)",duration:.24},s).to(a(".hs-sheet"),{yPercent:0,duration:.38,ease:"power3.out"},s),s=d(".hs-ok",s+1.6),e.to(a(".hs-sheet"),{yPercent:102,duration:.3,ease:"power2.in"},s).to(a(".hs-veil"),{backgroundColor:"rgb(23 32 27 / 0)",duration:.26},s).set(a(".hs-veil"),{visibility:"hidden"},s+.32),s+=.34,e.to(a(".hs-result"),{"--h":0,duration:.24,ease:"power2.in"},s).set(a(".home-typed > span"),{opacity:0},s).set(a(".home-search .hs-ph"),{opacity:1},s).to(a(".hs-recent"),{"--h":1,opacity:1,duration:.36,ease:"power2.out"},s+.1),u(".home-scroll",-150,s+.1),s+=1,u(".home-scroll",0,s,.6),p(".home-sub",1,s+.5),s+=1.4,s=d(".n-products",s),A("products",1,"home",s),g(".s-home",".s-products",s+.05),s+=.9,s=d(".hs-add",s),S(".hs-nav",s),g(".s-products",".s-form",s+.05),s+=1.2,u(".form-scroll",-150,s),s+=.5,s=d(".form-typed",s),s=D(".form-typed",s+.05,.06),s=d(".ai-btn",s+.1),p(".ai-btn .hs-swap",1,s),s+=.7,p(".ai-btn .hs-swap",2,s),e.set(a(".form-typed"),{opacity:0},s).set(a(".form-clean"),{opacity:1},s).to(a(".form-cat"),{opacity:1,duration:.22},s).to(a(".ai-undo"),{opacity:1,duration:.22},s),p(".ai-note",1,s),p(".form-emoji",1,s),p(".form-sub",1,s),p(".form-pic-hint",1,s),s+=1,u(".form-scroll",-440,s,.7),s+=.6,s=d(".chip-weekend",s+.1),e.to(a(".chip-weekend"),{backgroundColor:"#0e4a33",color:"#fff",duration:.14},s),s=d(".form-save",s+.6),g(".s-form",".s-products",s+.05),b(".hs-nav",s+.1),p(".products-count",1,s+.3),s+=.8,u(".products-scroll",-120,s),s+=1.3,s=d(".n-settings",s),A("settings",2,"products",s),g(".s-products",".s-settings",s+.05),s+=.9,u(".settings-scroll",-720,s,1),s+=2,s=d(".n-home",s),A("home",0,"settings",s),g(".s-settings",".s-home",s+.05),s+=.7,s=d(".hs-go",s),S(".hs-nav",s),g(".s-home",".s-shop",s+.05),s+=.6,u(".shop-scroll",-100,s),s+=.6,s=d(".l-rice .hs-ring",s),T("rice",s),p(".shop-left",1,s+.1),p(".hs-done > .hs-swap",1,s+.1),p(".store-count",1,s+.1),p(".store-total",1,s+.1),e.to(a(".hs-done-off"),{opacity:0,duration:.2},s+.1).to(a(".hs-done"),{color:"#14301f",duration:.2},s+.1).to(a(".hs-done-hint"),{opacity:0,duration:.18},s+.1).to(a(".l-rice"),{"--h":0,opacity:0,duration:.3,ease:"power2.in"},s+.4).to(a(".hs-cart"),{"--h":1,opacity:1,duration:.3,ease:"power2.out"},s+.45).to(r,{opacity:0,duration:.2},s+.5),u(".shop-scroll",-230,s+.7),s+=1.6,T("milk",s),p(".shop-left",2,s+.12),p(".hs-done > .hs-swap",2,s+.12),p(".hs-cart .hs-swap",1,s+.12),e.to(a(".store-local"),{"--h":0,opacity:0,duration:.34,ease:"power2.in"},s+.6),u(".shop-scroll",0,s+.8,.7),e.to({},{duration:.3},s+1.5);function B(){const h=n.getBoundingClientRect();return Math.min(h.width,h.height)/460}return c.reduced?(e.seek(e.duration(),!1),{play(){},pause(){},destroy:()=>{e.kill(),o.replaceChildren()}}):N(n,o,e)}const C=(o,c)=>`<span class="hs-swap ${o}">${c.map(n=>`<span>${n}</span>`).join("")}</span>`,k=(o,c,n,a)=>`
  <div class="hs-line l-${o}">
    <span class="hs-tile">${c}</span>
    <span class="hs-text"><b>${n}</b><strong>${a}</strong></span>
    <span class="hs-ring">${t("check")}</span>
  </div>`;function Y(o,c){const n=document.createElement("div");n.className="hs hs-art",n.dir="ltr",n.lang="en",n.innerHTML=`
    <div class="hs-art-screen">
      <div class="hs-hero hs-shop-head">
        <span class="hs-round">${t("close")}</span>
        <div class="hs-hero-title">
          <h4><span class="hs-e">🧺</span> Big shop</h4>
          ${C("hs-sub left",["4 of 4 left • ₪73 to go","3 of 4 left • ₪64 to go"])}
        </div>
      </div>
      <div class="hs-main">
        <span class="hs-btn hs-secondary">${t("plus")}Add to the list</span>
        <div class="hs-card hs-store">
          <div class="hs-store-head"><div><b><span class="hs-e">🏬</span> Discount store</b>${C("hs-count count",["3 items","2 items"])}</div>${C("total",["<em>₪59</em>","<em>₪50</em>"])}</div>
          <div>
            ${k("eggs","🥚","Eggs","1 pack (30 eggs)")}
            ${k("rice","🍚","Rice","1 kg")}
            ${k("tea","🍵","Tea","1 pack (25 tea bags)")}
          </div>
        </div>
        <div class="hs-card hs-store">
          <div class="hs-store-head"><div><b><span class="hs-e">🛒</span> Local market</b><span class="hs-count">1 item</span></div><em>₪14</em></div>
          <div>${k("milk","🥛","Milk","2 liters")}</div>
        </div>
      </div>
    </div>`,H(o,n);const a=$.utils.selector(n),r=(M,f)=>{const[d,b]=a(`${M} > span`);e.to(d,{opacity:0,duration:.14},f).to(b,{opacity:1,duration:.14},f+.08)},e=$.timeline({paused:!0});return e.to(a(".l-rice .hs-ring"),{backgroundColor:"#0e4a33",borderColor:"#0e4a33",duration:.18},.1).fromTo(a(".l-rice .hs-ring"),{scale:.75},{scale:1,duration:.5,ease:"back.out(3)",immediateRender:!1},.1).to(a(".l-rice .hs-ring svg"),{strokeDashoffset:0,duration:.28,ease:"power2.out"},.16),r(".left",.45),r(".count",.45),r(".total",.45),e.to(a(".l-rice"),{"--h":0,opacity:0,duration:.36,ease:"power2.inOut"},.8),c.reduced?(e.progress(1),{enter(){},leave(){},destroy:()=>{e.kill(),o.replaceChildren()}}):F(o,e)}export{X as mount,Y as mountTile};
