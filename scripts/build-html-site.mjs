import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "html");

const BASE = "https://spacehero.in/images";
const BOOK = "https://driveme.spacehero.in/login";
const WA = "https://wa.me/916387485211";
const CALL = "tel:+916387485211";
const EMAIL = "mailto:spaceherohain@gmail.com";
const PHONE = "+91 6387485211";
const MAIL = "spaceherohain@gmail.com";

const CSS = `
:root{
  --canvas:#070708;--surface:#0C0C0E;--border:#232326;--text:#FAFAFA;
  --muted:#A1A1AA;--dim:#71717A;--blue:#3B82F6;--amber:#F59E0B;--emerald:#10B981;
  --font:'Inter',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace;
}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--canvas);color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased;line-height:1.5}
img{max-width:100%;display:block}a{color:inherit;text-decoration:none}
.container{width:min(1120px,100%);margin:0 auto;padding:0 16px}
@media(min-width:768px){.container{padding:0 24px}}
.glass{background:rgba(12,12,14,.82);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
.liquid-glass{
  background:linear-gradient(155deg,rgba(255,255,255,.12),rgba(255,255,255,.04) 38%,rgba(12,12,14,.55));
  backdrop-filter:blur(28px) saturate(1.55);-webkit-backdrop-filter:blur(28px) saturate(1.55);
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 8px 32px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.18);
  border-radius:16px;position:relative;overflow:hidden;transition:transform .35s cubic-bezier(.22,1,.36,1);
}
.liquid-glass:hover{transform:translateY(-3px)}
.liquid-glass .glow{pointer-events:none;position:absolute;inset:0;opacity:0;transition:opacity .3s;background:radial-gradient(220px circle at var(--mx,50%) var(--my,50%),rgba(59,130,246,.25),transparent 55%)}
.liquid-glass:hover .glow{opacity:1}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:12px;padding:12px 20px;font-size:14px;font-weight:600;border:1px solid transparent;cursor:pointer;transition:.25s}
.btn-amber{background:var(--amber);color:var(--canvas);box-shadow:0 0 32px rgba(245,158,11,.25)}
.btn-amber:hover{background:#d97706}
.btn-blue{background:var(--blue);color:#fff;box-shadow:0 0 32px rgba(59,130,246,.25)}
.btn-blue:hover{background:#2563eb}
.btn-ghost{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.15);color:var(--text)}
.btn-ghost:hover{border-color:rgba(59,130,246,.5);background:rgba(59,130,246,.15)}
.nav{position:fixed;inset:0 0 auto;z-index:50;border-bottom:1px solid transparent;transition:.3s}
.nav.scrolled,.nav.open{border-color:var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:64px}
@media(min-width:1024px){.nav-inner{height:80px}}
.brand{display:flex;align-items:center;gap:12px;font-weight:700}
.brand img{height:36px}
.nav-links{display:none;align-items:center;gap:4px}
@media(min-width:1024px){.nav-links{display:flex}}
.nav-links a,.nav-links button{background:none;border:0;color:var(--muted);font:500 14px var(--font);padding:8px 12px;border-radius:8px;cursor:pointer}
.nav-links a:hover,.nav-links button:hover,.nav-links a.active{color:var(--text)}
.dd{position:relative}
.dd-menu{display:none;position:absolute;top:100%;left:0;min-width:200px;padding:8px;border-radius:12px;border:1px solid var(--border);background:rgba(12,12,14,.96)}
.dd:hover .dd-menu,.dd:focus-within .dd-menu{display:block}
.dd-menu a{display:block;padding:10px 12px}
.nav-cta{display:none;align-items:center;gap:12px}
@media(min-width:1024px){.nav-cta{display:flex}}
.menu-btn{display:flex;background:none;border:1px solid var(--border);color:var(--text);border-radius:8px;padding:8px;cursor:pointer}
@media(min-width:1024px){.menu-btn{display:none}}
.mobile-menu{display:none;border-top:1px solid var(--border);padding:16px}
.mobile-menu.open{display:block}
.mobile-menu a{display:block;padding:10px 12px;color:var(--muted);border-radius:8px}
.mobile-menu a:hover{background:rgba(255,255,255,.05);color:var(--text)}
.bottom-bar{position:fixed;inset:auto 0 0;z-index:50;border-top:1px solid var(--border);display:grid;grid-template-columns:repeat(5,1fr);padding:8px 4px;padding-bottom:calc(8px + env(safe-area-inset-bottom))}
@media(min-width:768px){.bottom-bar{display:none}}
.bottom-bar a{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;color:var(--muted);padding:6px 2px;text-align:center}
.bottom-bar svg{width:20px;height:20px}
.hero{position:relative;isolation:isolate;min-height:100svh;display:flex;align-items:center;overflow:hidden;padding-top:80px}
.hero-bg{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 55% at 75% 50%,rgba(59,130,246,.12),transparent 55%),radial-gradient(ellipse 50% 40% at 15% 85%,rgba(245,158,11,.08),transparent),#070708}
.hero-mobile-banner{display:none;position:absolute;inset:0;pointer-events:none}
@media(max-width:767px){.hero-mobile-banner{display:block}}
.hero-mobile-banner img{width:100%;height:100%;object-fit:cover;object-position:72% 45%;transform:scale(1.05)}
.hero-mobile-banner .shade{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(7,7,8,.55),rgba(7,7,8,.7),#070708)}
.hero-grid{position:relative;z-index:2;display:grid;gap:32px;align-items:center;width:min(1120px,100%);margin:0 auto;padding:56px 16px}
@media(min-width:768px){.hero-grid{grid-template-columns:1fr 1fr;padding:80px 24px}}
.eyebrow{color:var(--amber);font-weight:600;font-size:14px;letter-spacing:-.01em}
.kicker{margin-top:12px;font-family:var(--mono);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--dim)}
.hero h1{margin:12px 0 0;font-size:clamp(2rem,5vw,3.5rem);line-height:1.08;letter-spacing:-.03em;max-width:22ch}
.cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.hero-car{position:relative;max-width:520px;margin:0 auto}
.hero-car .glow-car{position:absolute;left:10%;right:10%;bottom:12px;height:56px;border-radius:999px;background:rgba(59,130,246,.35);filter:blur(32px)}
.section{padding:80px 0}
@media(min-width:768px){.section{padding:112px 0}}
.section-head{max-width:720px;margin-bottom:40px}
.section-head .label{font-size:12px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);margin:0 0 12px}
.section-head h2{margin:0;font-size:clamp(1.75rem,4vw,3rem);letter-spacing:-.03em}
.section-head p{margin:16px 0 0;color:var(--muted);font-size:clamp(1rem,2vw,1.125rem)}
.about-grid{display:grid;gap:48px;align-items:center}
@media(min-width:768px){.about-grid{grid-template-columns:5fr 7fr}}
.about-media{border-radius:16px;border:1px solid var(--border);overflow:hidden;background:var(--surface)}
.about-media img{width:100%;transition:transform .4s cubic-bezier(.22,1,.36,1)}
.about-media:hover img{transform:scale(1.05)}
.muted{color:var(--muted)}.dim{color:var(--dim)}
.stats{display:grid;grid-template-columns:1fr;gap:12px;margin-top:64px}
@media(min-width:640px){.stats{grid-template-columns:repeat(3,1fr);gap:16px}}
.stat{min-width:0;border-radius:16px;border:1px solid var(--border);background:rgba(12,12,14,.8);padding:20px 16px;text-align:center}
.stat .num{font-family:var(--mono);font-size:clamp(1.5rem,4vw,2.75rem);font-weight:700;font-variant-numeric:tabular-nums}
.stat .num .suf{color:var(--amber)}.stat .lbl{margin-top:8px;font-size:12px;color:var(--muted)}
@media(min-width:640px){.stat .lbl{font-size:14px}}
.bento{display:grid;gap:16px}
@media(min-width:768px){.bento-2{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){.bento-services{grid-template-columns:repeat(12,1fr)}.bento-services .c1{grid-column:span 7}.bento-services .c2{grid-column:span 5}.bento-services .c3{grid-column:span 5}.bento-services .c4{grid-column:span 7}}
.service-card{display:block;min-height:280px;color:inherit}
.service-card .inner{position:relative;height:100%;min-height:280px;padding:24px;display:flex;flex-direction:column;justify-content:flex-end}
.service-card .bg{position:absolute;inset:0}
.service-card .bg img{width:100%;height:100%;object-fit:cover;opacity:.4;transition:transform .4s cubic-bezier(.22,1,.36,1)}
.service-card:hover .bg img{transform:scale(1.05)}
.service-card .bg::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(12,12,14,.95),rgba(12,12,14,.55),rgba(12,12,14,.25))}
.service-card .badge{display:inline-block;margin-bottom:12px;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:600;border:1px solid rgba(245,158,11,.4);background:rgba(245,158,11,.1);color:var(--amber);opacity:0;transform:translateY(6px);transition:.4s}
.service-card:hover .badge{opacity:1;transform:none}
.service-card.blue .badge{border-color:rgba(59,130,246,.4);background:rgba(59,130,246,.1);color:var(--blue)}
.service-card h3{margin:0;font-size:24px;position:relative}.service-card p{margin:12px 0 0;color:var(--muted);font-size:14px;max-width:36ch;position:relative}
.steps{display:grid;gap:16px}
@media(min-width:768px){.steps{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.steps{grid-template-columns:repeat(4,1fr)}}
.step{padding:20px;background:var(--canvas)}
.step img{width:100%;height:144px;object-fit:cover;border-radius:12px;border:1px solid var(--border);margin-bottom:16px;transition:transform .4s}
.step:hover img{transform:scale(1.05)}
.step .n{font-family:var(--mono);font-size:12px;color:var(--amber)}
.step h3{margin:8px 0 0;font-size:20px}.step p{margin:8px 0 0;color:var(--muted);font-size:14px}
.timeline-track{height:4px;background:var(--border);border-radius:999px;overflow:hidden;margin-bottom:24px}
.timeline-fill{height:100%;width:0;background:linear-gradient(90deg,var(--amber),var(--blue),var(--emerald));transition:width .1s linear}
.commit-grid{display:grid;gap:16px}
@media(min-width:768px){.commit-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){.commit-grid{grid-template-columns:repeat(3,1fr)}.commit-grid .wide{grid-column:span 1}}
.commit-grid .card{padding:24px}
.commit-grid img{width:56px;height:56px;object-fit:contain;margin-bottom:16px}
.commit-grid h3{margin:0;font-size:20px}.commit-grid p{margin:12px 0 0;color:var(--muted);font-size:14px}
.snap{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding-bottom:8px;scrollbar-width:none}
.snap::-webkit-scrollbar{display:none}
.snap > *{scroll-snap-align:start;flex:0 0 min(280px,72vw)}
.loc-card{padding:20px;text-align:center}
.loc-card img{width:64px;height:64px;margin:0 auto;object-fit:contain;transition:transform .4s}
.loc-card:hover img{transform:scale(1.05)}
.loc-card .d{margin-top:16px;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--amber)}
.loc-card h3{margin:4px 0 0;font-size:18px}
.loc-desktop{display:none;gap:16px}
@media(min-width:768px){.snap.loc-mobile{display:none}.loc-desktop{display:grid;grid-template-columns:repeat(3,1fr)}}
@media(min-width:1024px){.loc-desktop{grid-template-columns:repeat(5,1fr)}}
.gallery-item{flex:0 0 min(320px,78vw);border-radius:16px;border:1px solid var(--border);overflow:hidden;background:var(--surface);position:relative}
.gallery-item img{aspect-ratio:4/3;width:100%;object-fit:cover;transition:transform .4s}
.gallery-item:hover img{transform:scale(1.05)}
.booking{padding:0}
.tabs{display:flex;gap:8px;overflow-x:auto;padding:12px;border-bottom:1px solid var(--border)}
.tab{flex:0 0 auto;border:0;border-radius:12px;padding:10px 16px;font:600 14px var(--font);background:rgba(255,255,255,.05);color:var(--muted);cursor:pointer}
.tab.active{background:var(--blue);color:#fff}
.form-wrap{padding:24px}
@media(min-width:768px){.form-wrap{padding:32px}}
.form-grid{display:grid;gap:16px}
@media(min-width:768px){.form-grid{grid-template-columns:1fr 1fr}}
.form-grid .full{grid-column:1/-1}
label span{display:block;margin-bottom:6px;font-size:12px;color:var(--muted)}
input,select,textarea{width:100%;border-radius:12px;border:1px solid var(--border);background:var(--canvas);color:var(--text);padding:12px 16px;font:14px var(--font)}
input:focus,select:focus,textarea:focus{outline:none;border-color:rgba(59,130,246,.6)}
.panel{display:none}.panel.active{display:block}
.thanks{display:none;text-align:center;padding:32px;border:1px solid rgba(16,185,129,.3);background:rgba(16,185,129,.1);border-radius:12px}
.thanks.show{display:block}
.app-grid{display:grid;gap:40px;align-items:center}
@media(min-width:768px){.app-grid{grid-template-columns:1fr 1fr}}
.store{display:flex;flex-wrap:wrap;gap:16px;margin-top:32px;align-items:center}
.store img{height:48px;width:auto}
.testi{flex:0 0 min(320px,82vw)}
@media(min-width:1024px){.testi-row{display:grid;grid-template-columns:repeat(4,1fr);overflow:visible}.testi{flex:none}}
.testi .inner{padding:24px;height:100%}
.testi .who{display:flex;align-items:center;gap:12px}
.testi .who img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--border)}
.testi h3{margin:0;font-size:18px}.testi p{margin:16px 0 0;color:var(--muted);font-size:14px}
.partners{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
@media(min-width:640px){.partners{grid-template-columns:repeat(4,1fr)}}
@media(min-width:768px){.partners{grid-template-columns:repeat(6,1fr);gap:16px}}
.partner{aspect-ratio:3/2;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:12px;background:var(--canvas);padding:12px}
.partner img{max-height:100%;max-width:100%;object-fit:contain;opacity:.8;transition:.4s}
.partner:hover img{opacity:1;transform:scale(1.05)}
.page-banner{position:relative;isolation:isolate;padding-top:80px;min-height:42vh;display:flex;align-items:flex-end}
.page-banner img.desk{display:none;width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
.page-banner img.mob{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
@media(min-width:768px){.page-banner img.desk{display:block}.page-banner img.mob{display:none}.page-banner{min-height:48vh}}
.page-banner .shade{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(7,7,8,.4),rgba(7,7,8,.55),var(--canvas))}
.page-banner h1{position:relative;z-index:2;width:min(1120px,100%);margin:0 auto;padding:96px 16px 48px;font-size:clamp(2rem,5vw,3.5rem);letter-spacing:-.03em}
.team-grid{display:grid;gap:20px}
@media(min-width:640px){.team-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){.team-grid{grid-template-columns:repeat(3,1fr)}}
.team-card .pic{aspect-ratio:4/3;overflow:hidden;background:var(--canvas)}
.team-card .pic img{width:100%;height:100%;object-fit:cover;object-position:top;transition:transform .4s}
.team-card:hover .pic img{transform:scale(1.05)}
.team-card .body{padding:20px}
.team-card h3{margin:0;font-size:20px}.team-card .role{margin:4px 0 0;color:var(--amber);font-size:14px;font-weight:600}
.team-card p{margin:12px 0 0;color:var(--muted);font-size:14px}
.badge-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:40px}
.chip{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:12px;border:1px solid rgba(59,130,246,.3);background:rgba(59,130,246,.1);color:var(--blue);font-size:14px;font-weight:500}
.footer{border-top:1px solid var(--border);background:var(--surface);padding-bottom:96px}
@media(min-width:768px){.footer{padding-bottom:0}}
.footer-grid{display:grid;gap:40px;padding:56px 0;width:min(1120px,100%);margin:0 auto;padding-left:16px;padding-right:16px}
@media(min-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){.footer-grid{grid-template-columns:repeat(4,1fr);padding-left:24px;padding-right:24px}}
.footer h3{margin:0 0 16px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--dim)}
.footer ul{list-style:none;margin:0;padding:0}.footer li{margin:0 0 8px}.footer a{color:var(--muted);font-size:14px}.footer a:hover{color:var(--text)}
.footer-copy{border-top:1px solid var(--border);text-align:center;padding:20px;font-size:12px;color:var(--dim)}
.prose p{color:var(--muted);margin:0 0 16px;font-size:clamp(1rem,2vw,1.125rem)}
.check-list{display:grid;gap:16px}
@media(min-width:768px){.check-list{grid-template-columns:1fr 1fr}}
.check-list li{list-style:none;display:flex;gap:12px;padding:20px;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--muted);font-size:14px}
.check-list .tick{color:var(--amber);font-weight:700}
.contact-cards{display:grid;gap:16px}
@media(min-width:768px){.contact-cards{grid-template-columns:repeat(3,1fr)}}
.contact-cards a,.contact-cards div{padding:24px;border-radius:16px;border:1px solid var(--border);background:var(--surface)}
.contact-cards .ico{color:var(--blue);font-size:20px;margin-bottom:16px}
`;

const JS = `
(function(){
  const nav=document.querySelector('.nav');
  const menuBtn=document.querySelector('.menu-btn');
  const mobileMenu=document.querySelector('.mobile-menu');
  window.addEventListener('scroll',()=>{if(nav)nav.classList.toggle('scrolled',scrollY>12)},{passive:true});
  if(menuBtn&&mobileMenu){
    menuBtn.addEventListener('click',()=>{
      const open=mobileMenu.classList.toggle('open');
      nav&&nav.classList.toggle('open',open);
      menuBtn.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  document.querySelectorAll('.liquid-glass').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
      card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
    });
  });
  const counters=document.querySelectorAll('[data-counter]');
  const io=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const el=entry.target;
      const target=+el.dataset.counter;
      const suffix=el.dataset.suffix||'';
      const format=el.dataset.format||'plain';
      const start=performance.now();
      const dur=1800;
      const fmt=n=>{
        const r=Math.round(n);
        if(format==='indian')return r.toLocaleString('en-IN');
        if(format==='comma')return r.toLocaleString('en-US');
        return String(r);
      };
      const tick=t=>{
        const p=Math.min(1,(t-start)/dur);
        const eased=1-Math.pow(1-p,3);
        el.innerHTML=fmt(target*eased)+'<span class="suf">'+suffix+'</span>';
        if(p<1)requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  },{threshold:.35});
  counters.forEach(c=>io.observe(c));

  const heroCar=document.querySelector('[data-hero-car]');
  if(heroCar){
    window.addEventListener('scroll',()=>{
      const y=Math.min(window.scrollY,600);
      heroCar.style.transform='translateX('+(y*0.1)+'px)';
    },{passive:true});
  }
  const fill=document.querySelector('.timeline-fill');
  const track=document.querySelector('.timeline-track');
  if(fill&&track){
    window.addEventListener('scroll',()=>{
      const r=track.parentElement.getBoundingClientRect();
      const vh=window.innerHeight;
      const start=vh*0.7;
      const end=vh*0.35;
      let p=(start-r.top)/(start-end+(r.height||1));
      p=Math.max(0,Math.min(1,p));
      fill.style.width=(p*100)+'%';
    },{passive:true});
  }
  const tabs=document.querySelectorAll('.tab');
  const panels=document.querySelectorAll('.panel');
  const form=document.querySelector('#booking-form');
  const thanks=document.querySelector('.thanks');
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      const panel=document.querySelector('#panel-'+tab.dataset.tab);
      if(panel)panel.classList.add('active');
      if(thanks)thanks.classList.remove('show');
      if(form)form.style.display='';
    });
  });
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      form.style.display='none';
      if(thanks)thanks.classList.add('show');
    });
  }
  const again=document.querySelector('[data-again]');
  if(again)again.addEventListener('click',()=>{
    if(thanks)thanks.classList.remove('show');
    if(form){form.style.display='';form.reset();}
  });
})();
`;

function shell({ title, active, body, extraHead = "" }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${title}</title>
<link rel="icon" href="${BASE}/favicon.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet"/>
<style>${CSS}</style>
${extraHead}
</head>
<body>
${nav(active)}
<main>${body}</main>
${footer()}
${bottomBar()}
<script>${JS}</script>
</body>
</html>`;
}

function nav(active) {
  const link = (href, label, key) =>
    `<a href="${href}" class="${active === key ? "active" : ""}">${label}</a>`;
  return `
<header class="nav glass">
  <div class="container nav-inner">
    <a class="brand" href="index.html"><img src="${BASE}/logo.png" alt="SpaceHero"/><span>SpaceHero</span></a>
    <nav class="nav-links">
      ${link("index.html", "Home", "home")}
      ${link("about.html", "About Us", "about")}
      <div class="dd">
        <button type="button">Services ▾</button>
        <div class="dd-menu glass">
          <a href="valet.html">Valet Services</a>
          <a href="drive-me.html">Drive Me</a>
          <a href="index.html#services">Hire us for Event</a>
          <a href="monthly-driver.html">Monthly Driver</a>
        </div>
      </div>
      ${link("team.html", "Team", "team")}
      ${link("contact.html", "Contact Us", "contact")}
      ${link("driver-partner.html", "Driver Partner", "partner")}
    </nav>
    <div class="nav-cta">
      <a href="${CALL}" style="color:var(--muted);font-size:14px">${PHONE}</a>
      <a class="btn btn-blue" href="${BOOK}" target="_blank" rel="noreferrer">Book Driver</a>
    </div>
    <button class="menu-btn" aria-label="Toggle menu" aria-expanded="false">☰</button>
  </div>
  <div class="mobile-menu glass">
    <a href="index.html">Home</a>
    <a href="about.html">About Us</a>
    <a href="valet.html">Valet Services</a>
    <a href="drive-me.html">Drive Me</a>
    <a href="monthly-driver.html">Monthly Driver</a>
    <a href="team.html">Team</a>
    <a href="contact.html">Contact Us</a>
    <a href="driver-partner.html">Driver Partner</a>
    <a class="btn btn-blue" style="width:100%;margin-top:12px" href="${BOOK}" target="_blank" rel="noreferrer">Book Driver</a>
  </div>
</header>`;
}

function bottomBar() {
  return `
<nav class="bottom-bar glass">
  <a href="${BOOK}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h14v-5H5v5z"/><path d="M5 12V7l2-2h10l2 2v5"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/></svg>Book Driver</a>
  <a href="index.html#services"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>Valet & Services</a>
  <a href="index.html#locations"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>NCR Locations</a>
  <a href="${WA}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 01-13.5 7.8L3 21l1.3-4.2A9 9 0 1121 12z"/></svg>WhatsApp</a>
  <a href="${CALL}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.2a2 2 0 012.1-.4c.8.3 1.7.6 2.6.7a2 2 0 011.7 1.9z"/></svg>Call</a>
</nav>`;
}

function footer() {
  return `
<footer class="footer">
  <div class="footer-grid">
    <div>
      <a class="brand" href="index.html"><img src="${BASE}/logo.png" alt="SpaceHero"/><span>SpaceHero</span></a>
      <p class="muted" style="margin-top:16px;font-size:14px">Delhi-NCR's premier Valet Parking, Event Doorman (Darbar), and Professional Driver Hire platform.</p>
    </div>
    <div>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="driver-partner.html">Driver Partner</a></li>
      </ul>
    </div>
    <div>
      <h3>Services</h3>
      <ul>
        <li><a href="valet.html">Valet Services</a></li>
        <li><a href="drive-me.html">Drive Me</a></li>
        <li><a href="index.html#services">Hire us for Event</a></li>
        <li><a href="monthly-driver.html">Monthly Driver</a></li>
      </ul>
    </div>
    <div>
      <h3>Contacts</h3>
      <ul>
        <li><a href="${EMAIL}">${MAIL}</a></li>
        <li><a href="${CALL}">${PHONE}</a></li>
        <li class="muted" style="font-size:14px">For business enquiries :<br/>Indirapuram, Ghaziabad 201014.</li>
      </ul>
      <a href="${WA}" target="_blank" rel="noreferrer" style="display:inline-flex;align-items:center;gap:8px;margin-top:16px;color:var(--emerald);font-size:14px">
        <img src="${BASE}/whatsapp.png" alt="whatsapp" style="width:20px;height:20px"/> WhatsApp Us
      </a>
    </div>
  </div>
  <div class="footer-copy">© ${new Date().getFullYear()} SpaceHero. All rights reserved.</div>
</footer>`;
}

function booking(defaultTab = "drive") {
  return `
<section class="section" id="booking">
  <div class="container">
    <div class="section-head">
      <p class="label">Book with SpaceHero</p>
      <h2>Interactive Booking Center</h2>
      <p>How can we assist you? Share your requirements, and we'll tailor our services to meet your needs.</p>
    </div>
    <div class="liquid-glass booking">
      <div class="glow"></div>
      <div class="tabs">
        <button type="button" class="tab ${defaultTab === "drive" ? "active" : ""}" data-tab="drive">On-Demand Driver</button>
        <button type="button" class="tab ${defaultTab === "monthly" ? "active" : ""}" data-tab="monthly">Monthly Permanent Driver</button>
        <button type="button" class="tab ${defaultTab === "partner" ? "active" : ""}" data-tab="partner">Become a Driver Partner</button>
        <button type="button" class="tab ${defaultTab === "contact" ? "active" : ""}" data-tab="contact">Contact Us</button>
      </div>
      <div class="form-wrap">
        <div class="thanks">
          <p style="font-size:18px;font-weight:600;color:var(--emerald)">Thank you — your request has been captured.</p>
          <p class="muted" style="margin-top:8px">Prefer instant help? Call or WhatsApp <a href="${CALL}" style="text-decoration:underline">${PHONE}</a>.</p>
          <button type="button" class="btn btn-ghost" style="margin-top:24px" data-again>Submit another request</button>
        </div>
        <form id="booking-form">
          <div id="panel-drive" class="panel ${defaultTab === "drive" ? "active" : ""}">
            <div class="form-grid">
              <label><span>Full Name*</span><input required name="name" placeholder="Name"/></label>
              <label><span>Mobile Number*</span><input required name="mobile" type="tel" placeholder="Mobile Number"/></label>
              <label><span>Email Address*</span><input required name="email" type="email" placeholder="Email Address"/></label>
              <label><span>Please share your requirements*</span>
                <select required name="drivertype"><option value="" disabled selected>Select requirement</option><option>Hourly Driver</option><option>One way Driver</option><option>Outstation Driver</option><option>Others</option></select>
              </label>
              <label><span>Location*</span><input required name="location" placeholder="Enter location"/></label>
              <label><span>Transmission*</span><select required name="transmission"><option>Manual</option><option>Automatic</option></select></label>
              <label class="full"><span>When do you want?*</span><input required name="driveDate" type="datetime-local"/></label>
            </div>
          </div>
          <div id="panel-monthly" class="panel ${defaultTab === "monthly" ? "active" : ""}">
            <div class="form-grid">
              <label><span>Full Name*</span><input required name="name2" placeholder="Name"/></label>
              <label><span>Mobile Number*</span><input required name="mobile2" type="tel" placeholder="Mobile Number"/></label>
              <label><span>Email Address*</span><input required name="email2" type="email" placeholder="Email Address"/></label>
              <label><span>Type of employment required?*</span><select required><option>Full Time</option><option>Part Time</option></select></label>
              <label><span>Number of days / week</span><select required><option>2 days a week</option><option selected>5 days a week</option><option>6 days a week</option></select></label>
              <label><span>Will stay be provided?</span><select required><option>Yes</option><option selected>No</option></select></label>
              <label><span>Type of Vehicle</span><select required><option>Hatchback</option><option selected>Sedan</option><option>SUV</option><option>MPV (Innova, XL6, others)</option><option>Luxury</option></select></label>
              <label><span>Location*</span><input required name="location2"/></label>
              <label><span>Outstation Travel</span><select required><option>Rarely</option><option>Frequent</option></select></label>
              <label><span>Monthly Salary Range</span><select required><option>Rs. 15,000 - 20,000 / month</option><option>Rs. 22,000 - Rs. 25,000 / month</option><option>Rs. 25,000+ / month</option></select></label>
              <label><span>Uniform Required?</span><select required><option>No</option><option>Yes</option></select></label>
              <label><span>Transmission</span><select required><option>Manual</option><option>Automatic</option></select></label>
              <label class="full"><span>Date of joining*</span><input required type="date" name="doj"/></label>
            </div>
          </div>
          <div id="panel-partner" class="panel ${defaultTab === "partner" ? "active" : ""}">
            <div class="form-grid">
              <label class="full"><span>Name*</span><input required placeholder="Name*"/></label>
              <label class="full"><span>Mobile*</span><input required type="tel" maxlength="10" placeholder="Mobile*"/></label>
              <label class="full"><span>Share your requirements*</span><textarea required rows="4" placeholder="Share your requirements*"></textarea></label>
            </div>
          </div>
          <div id="panel-contact" class="panel ${defaultTab === "contact" ? "active" : ""}">
            <div class="form-grid">
              <label><span>Name*</span><input required placeholder="Name*"/></label>
              <label><span>Email*</span><input required type="email" placeholder="Email*"/></label>
              <label><span>What are you looking for?</span>
                <select required><option value="" disabled selected>What are you looking for?</option><option>Valet Services</option><option>Drive Me</option><option>Hire us for Event</option><option>Monthly Driver</option><option>Complaint</option></select>
              </label>
              <label><span>Mobile*</span><input required type="tel" maxlength="10" placeholder="Mobile*"/></label>
              <label class="full"><span>Share your requirements*</span><textarea required rows="4" placeholder="Share your requirements*"></textarea></label>
            </div>
          </div>
          <div style="margin-top:16px"><button class="btn btn-blue" type="submit">Book Now / SEND</button></div>
        </form>
      </div>
    </div>
  </div>
</section>`;
}

const services = [
  { title: "Valet Services", href: "valet.html", img: `${BASE}/valetservices.png`, accent: "", cls: "c1", summary: "Experience premier convenience with our valet services, ensuring a seamless arrival and departure at any venue, epitomizing parking sophistication." },
  { title: "Drive Me", href: "drive-me.html", img: `${BASE}/bookdriver.png`, accent: "blue", cls: "c2", summary: "Opt for flexibility with our hourly driver hire, providing you with professional driving services tailored to your schedule and needs." },
  { title: "Hire us for Event", href: "index.html#booking", img: `${BASE}/darban.jpg`, accent: "", cls: "c3", summary: "Elevate your event's prestige with our professional doorman services, offering guests a warm welcome and top-tier security with elegance." },
  { title: "Monthly Driver", href: "monthly-driver.html", img: `${BASE}/hireevents.png`, accent: "blue", cls: "c4", summary: "Secure unparalleled reliability by booking a driver for a month, guaranteeing consistent, high-quality driving services for your daily commutes." },
];

const locations = [
  ["Noida 121", "1 banquet", "banquets-icon.png"],
  ["Noida 63", "1 restaurant", "restaurant-icon.png"],
  ["Noida 104", "whole market", "market-icon.png"],
  ["Niti khand", "1 restaurant & 1 mall", "mall-icon.png"],
  ["Connaught Place", "Available", "cp-icon.png"],
  ["Noida 62 and 63", "2 restaurants", "restaurant-icon.png"],
  ["Vaishali", "3 banquets", "banquets-icon.png"],
  ["Sahibabad", "4 banquets", "banquets-icon.png"],
  ["Vashundra", "2 banquets & one gym", "banquets_gym-icon.png"],
  ["Abhay khand", "2 malls", "mall-icon.png"],
];

const gallery = [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((n) => `${BASE}/about-${n}.png`);
gallery.push(`${BASE}/sc1.png`);

const testimonials = [
  ["Rishabh", "testo1.png", "SpaceHero completely transformed my daily commute. The convenience of having a reliable driver and smooth parking service is unmatched. Highly recommend for anyone seeking stress-free travel!"],
  ["Kasana", "testo2.png", "Using SpaceHero for event parking was a game-changer. Their professional doormen and efficient valet service made our event feel even more special and well-organized."],
  ["Sumit", "testo3.png", "I've been booking monthly drivers through SpaceHero for my hectic schedule, and it's been a lifesaver. The drivers are punctual, courteous, and highly skilled."],
  ["Amit", "testo4.png", "Hiring a driver on an hourly basis through SpaceHero has made my errands and meetings around the city so much easier. Exceptional service and reliability!"],
];

const team = [
  ["Shubh Singh", "Founder & CEO", "Shubh-team.png", "Shubh Singh, the dynamic founder of Spacehero, leads the organization with a visionary approach. Steering both operations and strategy, Shubh's hands-on management ensures a seamless experience for clients, from valet services to event hires. His leadership not only drives the team but also sets a new standard in customer service."],
  ["Ex Warrant Officer SN Singh", "Founder & Chairman", "praksh.png", "Warrant Officer SN Singh, brings 37 years of Indian Air Force experience to the company. Serving since 1986, he specialized in technical maintenance and operations across India, including border areas. At Spacehero, his expertise in operational readiness, mentoring, and procurement enriches our services, leveraging his military precision for unparalleled service quality."],
  ["Anjali Kalra", "Company Secretary & Finance", "anjali.png", "Anjali Kalra, brings a wealth of experience from her 11-year career. Her expertise spans roles at prestigious firms like Interglobe Group, Almondz Securities, and Omkam Capitals, where she honed her skills in compliance and liaison with government authorities. Anjali's vast experience and knowledge significantly contribute to Spacehero's strategic and financial planning."],
  ["Ayush Chaturvedi", "Chief Compliance Officer", "ayush.png", "Ayush Chaturvedi brings to Spacehero a rich 15-year background in media and technology, with roles at Cyber Media, Dainik Jagran, Zee News, and MIT Technology Review. At Spacehero, he oversees compliances, utilizing his extensive experience to navigate the complex landscape of regulations, ensuring the company adheres to industry standards and maintains operational excellence."],
  ["Rajnish Kumar", "Area Manager", "rajnish-kumar.jpg", "Rajnish, with over four years of experience in the valet service industry, has significantly contributed to Space Hero by managing hundreds of events and parking operations. His prior work with Snkamini More Space Valet Services has equipped him with the expertise needed to excel in fast-paced environments, ensuring Space Hero's events run smoothly and efficiently."],
  ["Satyam", "Workforce Manager", "satya.png", "Satyam, with over five years of experience in the valet service industry, has significantly contributed to Space Hero by managing hundreds of events and parking operations. His prior work with Snkamini More Space Valet Services has equipped him with the expertise needed to excel in fast-paced environments, ensuring Space Hero's events run smoothly and efficiently."],
  ["Sagar", "Workforce Manager", "sagar.png", "Sagar, with over four years of experience in the valet service industry, has significantly contributed to Space Hero by managing hundreds of events and parking operations. His prior work with Snkamini More Space Valet Services has equipped him with the expertise needed to excel in fast-paced environments, ensuring Space Hero's events run smoothly and efficiently."],
  ["Rahul Chauhan", "Chief Technology Officer", "gulshan.png", "Rahul Chauhan, a tech veteran with over 15 years of experience, leads SpaceHero's back-end and mobile technology endeavors. His extensive expertise ensures the seamless operation and optimization of our technological infrastructure, empowering SpaceHero to deliver cutting-edge solutions. Rahul's leadership ensures that our platform remains at the forefront of innovation, providing users with a smooth and reliable experience."],
  ["Chitresh Kapoor", "Chief Marketing Officer", "ck.png", "Chitresh Kapoor, a seasoned professional with over 15 years of expertise in Sales and Marketing, spearheads SpaceHero's digital marketing and online branding strategies. With a proven track record of driving business growth, Chitresh brings invaluable insights and innovation to elevate SpaceHero's online presence, ensuring unparalleled visibility and engagement in the digital landscape."],
];

function locCard([name, detail, icon]) {
  return `<div class="liquid-glass loc-card"><div class="glow"></div><img src="${BASE}/${icon}" alt="${name}"/><p class="d">${detail}</p><h3>${name}</h3></div>`;
}

const indexBody = `
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-mobile-banner"><img src="${BASE}/mobilebanner-home2.jpg" alt=""/><div class="shade"></div></div>
  <div class="hero-grid">
    <div>
      <p class="eyebrow">SpaceHero</p>
      <p class="kicker">Book Driver</p>
      <h1>Roam Around the city in the comfort of your car</h1>
      <div class="cta-row">
        <a class="btn btn-amber" href="${BOOK}" target="_blank" rel="noreferrer">BOOK NOW</a>
        <a class="btn btn-ghost" href="${BOOK}" target="_blank" rel="noreferrer">Book Driver</a>
      </div>
    </div>
    <div class="hero-car" data-hero-car>
      <div class="glow-car"></div>
      <img src="${BASE}/cars.png" alt="home banner car img"/>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-media"><img src="${BASE}/abut-up.png" alt="home about image"/></div>
      <div>
        <div class="section-head">
          <p class="label">Who we are</p>
          <h2>About Us</h2>
        </div>
        <div class="prose">
          <p>At SpaceHero, we're dedicated to revolutionizing urban mobility with our comprehensive range of services. From valet parking solutions to professional driver hires, we ensure seamless transportation experiences for our clients. Our valet services set the standard for luxury and convenience, while our expert drivers cater to diverse needs, whether it's hourly hires, one-way drops, or outstation trips.</p>
          <p>With a focus on reliability, safety, and customer satisfaction, we aim to simplify city living and enhance every journey. Trust SpaceHero for unparalleled service excellence and discover a new level of convenience in urban transportation.</p>
        </div>
        <a class="btn btn-ghost" style="margin-top:32px" href="about.html">Learn more about us</a>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><div class="num" data-counter="5" data-suffix="+">0</div><div class="lbl">Years Of Service</div></div>
      <div class="stat"><div class="num" data-counter="10000" data-format="comma">0</div><div class="lbl">Satisfied Clients</div></div>
      <div class="stat"><div class="num" data-counter="1000000" data-format="indian">0</div><div class="lbl">Vehicles Parked</div></div>
    </div>
  </div>
</section>

<section class="section" id="services">
  <div class="container">
    <div class="section-head">
      <p class="label">What we do</p>
      <h2>Services we Offer</h2>
      <p>Four pillars of urban mobility and hospitality across Delhi-NCR.</p>
    </div>
    <div class="bento bento-services">
      ${services.map((s) => `
        <a class="liquid-glass service-card ${s.accent} ${s.cls}" href="${s.href}">
          <div class="glow"></div>
          <div class="inner">
            <div class="bg"><img src="${s.img}" alt="${s.title}"/></div>
            <span class="badge">${s.title}</span>
            <h3>${s.title}</h3>
            <p>${s.summary}</p>
          </div>
        </a>`).join("")}
    </div>
  </div>
</section>

<section class="section" style="border-block:1px solid var(--border);background:rgba(12,12,14,.4)">
  <div class="container">
    <div class="section-head">
      <p class="label">Valet Services</p>
      <h2>4-Step Smart Valet</h2>
      <p>Experience true smart parking with Valet service. Whether you need short-term or long-term parking, Pre-book your spot and enjoy a seamless and contactless parking experience.</p>
    </div>
    <div class="timeline-track"><div class="timeline-fill"></div></div>
    <div class="steps">
      ${[
        ["01", "Book Online", "Just book a Valet online or scan a QR code at the location", "test-book.png"],
        ["02", "Park Smart", "Get verified drivers waiting for you!", "test-park.png"],
        ["03", "Park Secure", "No more worrying about the safety and security of your car", "test-drive.png"],
        ["04", "Vehicle Recall", "Recall over Spacehero app and track time to return", "test-valet.png"],
      ].map(([n, t, b, img]) => `
        <article class="liquid-glass step"><div class="glow"></div>
          <img src="${BASE}/${img}" alt="${t}"/>
          <p class="n">${n}</p><h3>${t}</h3><p>${b}</p>
        </article>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="commitment">
  <div class="container">
    <div class="section-head"><p class="label">Why SpaceHero</p><h2>Our Commitment</h2></div>
    <div class="commit-grid">
      ${[
        ["24x7 Support", "support.png", "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. We're here to ensure a smooth and hassle-free experience, providing prompt and professional assistance at any hour of the day."],
        ["Convenient Online Payments", "payment.png", "Skip the hassle of cash! Our secure online payment system allows for easy and convenient transactions. We accept all major credit and debit cards, offering you flexibility and a streamlined payment process."],
        ["Customized Requirements", "customize.png", "Tailor your experience to your specific needs with our customizable services, providing personalized solutions to suit your preferences and requirements."],
        ["Verified Drivers", "verified.png", "For your safety, all our drivers undergo comprehensive background checks. Enjoy peace of mind knowing you're in the hands of trusted, verified professionals committed to providing secure and reliable rides."],
        ["Track Your Car with Mobile App", "tracking.png", "Stay informed and in control throughout your trip with our user-friendly mobile app. Track your car's location in real-time for added convenience and peace of mind, ensuring a stress-free journey from start to finish."],
      ].map(([t, img, b]) => `
        <div class="liquid-glass card"><div class="glow"></div>
          <img src="${BASE}/${img}" alt="${t}"/><h3>${t}</h3><p>${b}</p>
        </div>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="locations">
  <div class="container">
    <div class="section-head">
      <h2>Locations we Serve</h2>
      <p>SpaceHero is your go-to smart parking management solution, empowering you to park effortlessly, no matter your destination. From malls to restaurants, cinemas, and beyond, SpaceHero offers innovative parking solutions designed to simplify your life.</p>
    </div>
    <div class="snap loc-mobile">${locations.map(locCard).join("")}</div>
    <div class="loc-desktop">${locations.map(locCard).join("")}</div>
  </div>
</section>

${booking("drive")}

<section class="section" id="gallery">
  <div class="container">
    <div class="section-head"><p class="label">On the ground</p><h2>Gallery</h2></div>
    <div class="snap">${gallery.map((src, i) => `<div class="gallery-item"><img src="${src}" alt="gallery section images ${i + 1}"/></div>`).join("")}</div>
  </div>
</section>

<section class="section">
  <div class="container app-grid">
    <div>
      <p class="label" style="color:var(--blue)">Mobile</p>
      <h2 style="font-size:clamp(1.75rem,4vw,2.5rem);letter-spacing:-.03em;margin:12px 0 0">Download the App</h2>
      <p class="muted" style="margin-top:16px">Streamline your car ownership experience with the SpaceHero app, available for iOS and Android. Easily track all your bookings and enjoy a seamless journey.</p>
      <div class="store">
        <img src="${BASE}/goggle-play.png" alt="Google Play"/>
        <img src="${BASE}/goggle-apple.png" alt="App Store"/>
      </div>
      <img src="${BASE}/app-download-buttons.png" alt="comming soon mobile app poppup" style="margin-top:24px;max-width:280px;opacity:.9"/>
    </div>
    <div><img src="${BASE}/mock2.png" alt="mobile space hero images" style="max-width:360px;margin:0 auto"/></div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head"><p class="label">In the press</p><h2>Media</h2></div>
    <div class="snap">${[1, 2, 3, 4, 5].map((n) => `<div class="gallery-item"><img src="${BASE}/media${n}.jpg" alt="news area media ${n}" style="aspect-ratio:16/10"/></div>`).join("")}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head"><p class="label">Testimonials</p><h2>Customers Love Us</h2></div>
    <div class="snap testi-row">
      ${testimonials.map(([name, img, q]) => `
        <div class="liquid-glass testi"><div class="glow"></div>
          <div class="inner">
            <div class="who"><img src="${BASE}/${img}" alt="${name} images"/><h3>${name}</h3></div>
            <p>${q}</p>
          </div>
        </div>`).join("")}
    </div>
  </div>
</section>

<section class="section" style="border-block:1px solid var(--border);background:rgba(12,12,14,.3)">
  <div class="container">
    <div class="section-head" style="margin-left:auto;margin-right:auto;text-align:center"><h2>Our Partners</h2></div>
    <div class="partners">${Array.from({ length: 12 }, (_, i) => `<div class="partner"><img src="${BASE}/partner${i + 1}.jpg" alt="products partner${i + 1}"/></div>`).join("")}</div>
  </div>
</section>
`;

function pageBanner(title, desk, mob, alt) {
  return `<section class="page-banner">
    <img class="desk" src="${desk}" alt="${alt}"/>
    <img class="mob" src="${mob}" alt="${alt}"/>
    <div class="shade"></div>
    <h1>${title}</h1>
  </section>`;
}

const pages = {
  "index.html": shell({
    title: "SpaceHero | Valet Parking & Professional Driver Hire — Delhi-NCR",
    active: "home",
    body: indexBody,
  }),
  "about.html": shell({
    title: "About Us | SpaceHero",
    active: "about",
    body: `
      ${pageBanner("About Us", `${BASE}/about-banner.png`, `${BASE}/aboutus-mob.png`, "about banner")}
      <section class="section"><div class="container">
        <div class="prose">
          <p>Spacehero stands as a pioneering solution to one of the most pressing urban challenges faced by major cities across the country: parking. With our innovative approach, we have disrupted the market by offering an array of services designed to address the needs of vehicle owners, event organizers, and business establishments alike. Our services include:</p>
        </div>
        <div class="bento bento-2" style="margin-top:40px">
          ${[
            ["Valet Services", "Spacehero provides professional valet services that ensure a seamless and efficient parking experience for guests and patrons. Our trained valets handle vehicles with the utmost care, offering convenience and peace of mind to our clients."],
            ["Hourly and Monthly Driver Hire", "Recognizing the diverse needs of our clients, we offer flexible driver hiring services. Whether you need a driver for a few hours or on a monthly basis, Spacehero has you covered with reliable and experienced drivers."],
            ["Event Management", "Spacehero specializes in managing parking and transportation logistics for events of any scale. From weddings to corporate gatherings, our team ensures that every aspect of parking and guest transportation is executed flawlessly."],
            ["Doorman Services (Darbar)", "We extend our services to include professional doorman services, enhancing the prestige and security of any establishment. Our doormen are trained to provide a warm welcome and ensure the safety and comfort of guests."],
          ].map(([t, b]) => `<div class="liquid-glass" style="padding:24px"><div class="glow"></div><h3 style="margin:0 0 12px;font-size:20px">${t}</h3><p class="muted" style="margin:0;font-size:14px">${b}</p></div>`).join("")}
        </div>
        <div class="prose" style="margin-top:40px">
          <p>Spacehero is the ideal partner for club owners, gym operators, banquet halls, and any venue seeking to elevate their guest experience with superior parking and doorman services.</p>
          <p>Our commitment to excellence and innovation has set us apart, making Spacehero the go-to solution for those looking to solve the perennial problem of parking in busy urban environments. By leveraging our expertise and comprehensive service offerings, our clients can focus on their core business activities while leaving the complexities of parking management and guest services in our capable hands.</p>
        </div>
      </div></section>
      <section class="section" style="border-top:1px solid var(--border)"><div class="container">
        <div class="section-head"><h2>Our Commitment</h2></div>
        <div class="commit-grid">
          ${[
            ["24x7 Support", "support.png", "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. We're here to ensure a smooth and hassle-free experience, providing prompt and professional assistance at any hour of the day."],
            ["Convenient Online Payments", "payment.png", "Skip the hassle of cash! Our secure online payment system allows for easy and convenient transactions. We accept all major credit and debit cards, offering you flexibility and a streamlined payment process."],
            ["Customized Requirements", "customize.png", "Tailor your experience to your specific needs with our customizable services, providing personalized solutions to suit your preferences and requirements."],
            ["Verified Drivers", "verified.png", "For your safety, all our drivers undergo comprehensive background checks. Enjoy peace of mind knowing you're in the hands of trusted, verified professionals committed to providing secure and reliable rides."],
            ["Track Your Car with Mobile App", "tracking.png", "Stay informed and in control throughout your trip with our user-friendly mobile app. Track your car's location in real-time for added convenience and peace of mind, ensuring a stress-free journey from start to finish."],
          ].map(([t, img, b]) => `<div class="liquid-glass card"><div class="glow"></div><img src="${BASE}/${img}" alt="${t}"/><h3>${t}</h3><p>${b}</p></div>`).join("")}
        </div>
      </div></section>
      <section class="section" style="border-top:1px solid var(--border)"><div class="container">
        <div class="section-head" style="text-align:center;margin-left:auto;margin-right:auto"><h2>Our Partners</h2></div>
        <div class="partners">${Array.from({ length: 12 }, (_, i) => `<div class="partner"><img src="${BASE}/partner${i + 1}.jpg" alt="partner${i + 1}"/></div>`).join("")}</div>
      </div></section>
    `,
  }),
  "valet.html": shell({
    title: "Valet Services | SpaceHero",
    active: "valet",
    body: `
      ${pageBanner("The Ultimate Valet Service", `${BASE}/velet-banner.png`, `${BASE}/valet-mob.png`, "valet banner")}
      <section class="section"><div class="container" style="display:grid;gap:40px">
        <div class="prose" style="max-width:720px">
          <p>Spacehero, with over five years in the valet parking sector, stands at the forefront, championing a service ethos that places the guest first — ensuring their safety, comfort, and peace of mind. Our rigorous selection and training processes guarantee our valets meet the highest standards, boasting impeccable driving records. Valet services elevate the guest experience, introducing a touch of luxury and immediate hospitality. For hotels, it signifies an unwavering commitment to guest satisfaction, ensuring all needs are met with grace. In shopping centers, it becomes essential, offering ease of access to those facing mobility challenges, allowing them to prioritize their wellbeing over the inconvenience of finding parking.</p>
          <p>By replacing the nuisances of self-parking with a warm, professional welcome, we transform the arrival experience. Our service is marked by a commitment to hospitality, where guests are warmly greeted, their vehicles are securely parked, and they're directed onwards with a friendly smile.</p>
          <p>Our valet services are designed to add a layer of convenience, elegance, and accessibility right to your doorstep.</p>
        </div>
        <img src="${BASE}/valet.png" alt="Valet Services" style="border-radius:16px;border:1px solid var(--border);max-width:480px"/>
      </div></section>
      <section class="section" style="border-block:1px solid var(--border);background:rgba(12,12,14,.4)"><div class="container">
        <div class="section-head"><p class="label">Valet Services</p><h2>4-Step Smart Valet</h2>
          <p>Experience true smart parking with Valet service. Whether you need short-term or long-term parking, Pre-book your spot and enjoy a seamless and contactless parking experience.</p>
        </div>
        <div class="timeline-track"><div class="timeline-fill"></div></div>
        <div class="steps">
          ${[
            ["01", "Book Online", "Just book a Valet online or scan a QR code at the location", "test-book.png"],
            ["02", "Park Smart", "Get verified drivers waiting for you!", "test-park.png"],
            ["03", "Park Secure", "No more worrying about the safety and security of your car", "test-drive.png"],
            ["04", "Vehicle Recall", "Recall over Spacehero app and track time to return", "test-valet.png"],
          ].map(([n, t, b, img]) => `<article class="liquid-glass step"><div class="glow"></div><img src="${BASE}/${img}" alt="${t}"/><p class="n">${n}</p><h3>${t}</h3><p>${b}</p></article>`).join("")}
        </div>
      </div></section>
      <section class="section"><div class="container">
        <div class="section-head"><p class="label">For your guests</p><h2>Why opt for Valet Services?</h2></div>
        <ul class="check-list" style="padding:0;margin:0">
          ${[
            "Offers a warm welcome with a smile and immediate assistance, setting a positive tone.",
            "Eliminates the hassle of finding parking spots, navigating through parking garages, or dealing with inclement weather.",
            "Reduces stress related to parking restrictions and the risk of towing, allowing guests to focus on their primary visit purpose, whether it's a medical appointment, relaxing at the hotel, or preparing for a meeting.",
            "Enhances accessibility, providing service that surpasses even the closest designated parking spots, with valets ready to help with getting out of the vehicle, handling mobility aids, luggage, and more.",
          ].map((t) => `<li><span class="tick">✓</span><span>${t}</span></li>`).join("")}
        </ul>
      </div></section>
      ${booking("contact")}
    `,
  }),
  "drive-me.html": shell({
    title: "Drive Me | SpaceHero",
    active: "drive",
    body: `
      ${pageBanner("Doorstep Driver Services", `${BASE}/drive-me-banner.png`, `${BASE}/driveme-mob.png`, "drive me banner")}
      <section class="section"><div class="container">
        <div class="prose" style="max-width:800px">
          <p>SpaceHero revolutionizes transportation convenience by providing doorstep driver services, offering a seamless solution for various driving needs. With a simple phone call, SpaceHero brings professional drivers directly to your doorstep, ensuring effortless access to reliable transportation. Whether you're heading out for shopping, attending an official meeting, enjoying leisure time with friends, or returning safely after a late-night party, SpaceHero's driver service is available at your convenience.</p>
          <p>In addition to catering to local needs, SpaceHero extends its services to accommodate outstation trips with friends, family, or colleagues. Our drivers are adept at navigating both local and long-distance routes, ensuring a comfortable and stress-free journey for passengers. With SpaceHero, planning and executing outstation trips becomes a hassle-free experience.</p>
          <p>Understanding the challenges of finding reliable drivers, especially during urgent situations, SpaceHero aims to provide a convenient solution for residents of Delhi. Instead of relying on unreliable sources or seeking recommendations from friends and acquaintances, individuals can simply dial +91 6387485211 (+916387485211) to access SpaceHero's driver services promptly. Our commitment to customer satisfaction includes thorough driver verification processes, ensuring that our clients can trust the professionalism and competence of our drivers without hesitation.</p>
          <p>By opting for SpaceHero's driver services, individuals can alleviate the burden of driver management and focus on their priorities. We understand the importance of feeling confident in the skills and reliability of hired drivers, which is why we prioritize driver verification and training. Even in situations where a driver may need to temporarily leave for personal reasons, SpaceHero ensures continuity of service, sparing clients the inconvenience of searching for replacements.</p>
          <p>With SpaceHero, the entire process of finding, hiring, and managing drivers is streamlined and stress-free. Our comprehensive services encompass everything from immediate driver availability to ongoing support, guaranteeing a hassle-free experience for our clients. Trust SpaceHero to meet all your transportation needs with professionalism, reliability, and unparalleled convenience.</p>
        </div>
        <div class="badge-row">
          ${["Verified & Trained Drivers", "On-Time Service Guaranteed", "Book Driver 24*7", "Transparent Prices with no hidden charges"].map((b) => `<span class="chip">✓ ${b}</span>`).join("")}
        </div>
      </div></section>
      <section class="section" style="border-top:1px solid var(--border)"><div class="container">
        <div class="section-head"><h2>How can we assist you?</h2><p>Share your requirements, and we'll tailor our services to meet your needs.</p></div>
        <div class="bento" style="grid-template-columns:1fr">
          <div class="bento bento-2" style="display:contents"></div>
        </div>
        <div class="commit-grid">
          ${[
            ["One-Way Transportation Solutions", "For point-to-point travel within or beyond the city, reserve our driver services for one-way drops. They'll transport you to your chosen destination and return via public transit, ensuring convenient travel arrangements."],
            ["Convenient Shopping", "Need to run errands or send your family shopping, but short on time to drive? No worries. Book our hired car drivers to safely chauffeur your family to their desired shopping destinations."],
            ["Outstation Travel", "Planning an outstation trip with family or friends? Opt for our driver hire service for a hassle-free journey. Our experienced drivers navigate highways day and night, ensuring a safe and enjoyable travel experience."],
            ["Productive Commutes", "Maximize productivity by hiring drivers in your city for seamless transportation. Work on your laptop, connect with clients or employees, all while enjoying the comfort of your own car driven by our professional chauffeurs."],
            ["Party in Style", "Unwind and enjoy a night out on the town with friends without worrying about driving. Hire our drivers for safe transportation, allowing you to revel in the nightlife while being chauffeured in the comfort of your own car."],
            ["Valet Drivers for Hire", "For event planners or those hosting family gatherings, consider hiring our valet drivers. They're proficient in handling both automatic and manual cars, ensuring smooth and reliable transportation for your guests."],
          ].map(([t, b]) => `<div class="liquid-glass card"><div class="glow"></div><h3>${t}</h3><p>${b}</p></div>`).join("")}
        </div>
      </div></section>
      ${booking("drive")}
    `,
  }),
  "monthly-driver.html": shell({
    title: "Monthly Driver | SpaceHero",
    active: "monthly",
    body: `
      ${pageBanner("Hire permanent drivers on monthly basis", `${BASE}/about-banner.png`, `${BASE}/aboutus-mob.png`, "monthly driver banner")}
      <section class="section"><div class="container">
        <div class="prose" style="max-width:800px">
          <p>At SpaceHero, we provide professional driver services, offering experienced drivers to ensure a stress-free journey for our clients. Each driver undergoes rigorous security training, is fully referenced, and is dedicated to ensuring every aspect of the chauffeured experience runs seamlessly. Our monthly driver service is ideal for individuals with busy schedules or those who prefer not to drive.</p>
          <p>We prioritize safety and reliability by thoroughly checking the backgrounds of our drivers and selecting individuals with extensive driving experience. Our clients can trust our drivers to provide stylish and convenient transportation, eliminating the need to wait for taxis and ensuring a safe return home, whether it's for formal meetings or late-night gatherings.</p>
          <p>Our drivers are available to cater to every family member's needs and can also drop off friends or relatives as per the client's instructions. Expect our drivers to be polite, cooperative, and well-mannered, adhering to your instructions and preferences at all times. With SpaceHero, you can rely on our drivers to be punctual, ensuring timely and efficient transportation whenever you need it.</p>
          <p>Additionally, our drivers are well-dressed, well-mannered, and prepared to work day and night to meet our clients' needs. They adhere to all rules and instructions provided by the client, ensuring a smooth and comfortable journey. Most importantly, punctuality is a top priority for our drivers, guaranteeing that our clients arrive at their destinations on time, every time.</p>
        </div>
        <div class="section-head" style="margin-top:56px"><h2>Hire a Driver for Seamless Travel</h2></div>
        <div class="prose" style="max-width:800px">
          <p>Tired of the daily commute grind? Let us simplify your life with our convenient and dependable on-demand driver service. Whether it's a one-time trip or regular commuting, SpaceHero is here to fulfill all your transportation needs. With SpaceHero, booking a driver online is quick and effortless. Just specify your pickup and drop-off locations for a hassle-free experience.</p>
          <p>Our intuitive platform ensures a perfect match with a driver who meets your exact requirements. Discover what makes SpaceHero the most reliable choice in the industry for hired driver services.</p>
        </div>
        <div class="section-head" style="margin-top:56px"><h2>Why Choose Us</h2></div>
        <div class="stats" style="margin-top:0">
          <div class="stat"><div class="num" data-counter="5000" data-suffix="+" data-format="comma">0</div><div class="lbl">Verified Drivers</div></div>
          <div class="stat"><div class="num" data-counter="1" data-suffix=" Lac+">0</div><div class="lbl">Happy Clients</div></div>
          <div class="stat"><div class="num" data-counter="5" data-suffix=" Lac+">0</div><div class="lbl">Smiles</div></div>
        </div>
      </div></section>
      <section class="section" style="border-top:1px solid var(--border)"><div class="container">
        <div class="section-head"><h2>Discover Our Range of Driver Services</h2></div>
        <div class="commit-grid">
          ${[
            ["Hourly Drivers", "mon-hourlydrivers.png", "Hourly drivers offer transportation services on an hourly basis. It is suitable for those who need to attend conferences and other events."],
            ["Outstation Drivers", "mon-outstationdrivers.png", "Outstation drivers accompany clients on journeys outside their hometowns, towns, or cities. They are skilled at handling various situations and providing a reliable travel experience."],
            ["Daily Drivers", "mon-dailydrivers.png", "Daily drivers are hired for a single day or specific occasions. They are useful when a dedicated driver is required for events, appointments, or special occasions."],
            ["Temporary Drivers", "mon-temporarydrivers.png", "To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce."],
            ["Night Drivers", "mon-nightdriver.png", "To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce."],
            ["Permanent Drivers", "montly-pageicon.png", "Permanent drivers work for individuals, families, or organisations on a long-term basis. They manage the client's pick-up and drop-off preferences, schedules, and so on."],
          ].map(([t, img, b]) => `<div class="liquid-glass"><div class="glow"></div><img src="${BASE}/${img}" alt="${t}" style="width:100%;aspect-ratio:16/10;object-fit:cover"/><div style="padding:24px"><h3 style="margin:0;font-size:18px">${t}</h3><p class="muted" style="margin:12px 0 0;font-size:14px">${b}</p></div></div>`).join("")}
        </div>
        <div style="margin-top:48px;border-radius:16px;border:1px solid var(--border);overflow:hidden">
          <img class="desk" src="${BASE}/price_table_desktop.png" alt="Price table" style="width:100%;display:none"/>
          <img class="mob" src="${BASE}/price_table_mobile.png" alt="Price table mobile" style="width:100%"/>
        </div>
        <style>@media(min-width:768px){.desk{display:block!important}.mob{display:none!important}}</style>
      </div></section>
      ${booking("monthly")}
    `,
  }),
  "team.html": shell({
    title: "Leadership Team | SpaceHero",
    active: "team",
    body: `
      ${pageBanner("Leadership Team", `${BASE}/team-banner.png`, `${BASE}/team-mob.png`, "team banner")}
      <section class="section"><div class="container">
        <div class="section-head">
          <h2>The people behind SpaceHero</h2>
          <p>Operations, strategy, compliance, workforce, and technology — united for Delhi-NCR mobility.</p>
        </div>
        <div class="team-grid">
          ${team.map(([name, role, img, bio]) => `
            <div class="liquid-glass team-card"><div class="glow"></div>
              <div class="pic"><img src="${BASE}/${img}" alt="${name}"/></div>
              <div class="body"><h3>${name}</h3><p class="role">${role}</p><p>${bio}</p></div>
            </div>`).join("")}
        </div>
      </div></section>
    `,
  }),
  "contact.html": shell({
    title: "Contact Us | SpaceHero",
    active: "contact",
    body: `
      ${pageBanner("Contact Us", `${BASE}/contact-banner.png`, `${BASE}/contact-mobile-banner.png`, "contact banner")}
      <section class="section"><div class="container">
        <div class="contact-cards">
          <a href="${EMAIL}"><div class="ico">✉</div><p class="dim" style="margin:0;font-size:14px">Email</p><p style="margin:4px 0 0;font-weight:600">${MAIL}</p></a>
          <a href="${CALL}"><div class="ico" style="color:var(--emerald)">☎</div><p class="dim" style="margin:0;font-size:14px">Phone</p><p style="margin:4px 0 0;font-weight:600">${PHONE}</p></a>
          <div><div class="ico" style="color:var(--amber)">📍</div><p class="dim" style="margin:0;font-size:14px">Find us at</p><p style="margin:4px 0 0;font-weight:600">Indirapuram, Ghaziabad Delhi -110086</p><p class="muted" style="margin:8px 0 0;font-size:14px">Indirapuram, Ghaziabad 201014.</p></div>
        </div>
      </div></section>
      ${booking("contact")}
    `,
  }),
  "driver-partner.html": shell({
    title: "Become a Driver Partner | SpaceHero",
    active: "partner",
    body: `
      ${pageBanner("Become a driver partner with Welcome", `${BASE}/become-partner-banner.png`, `${BASE}/partner-mob.png`, "become partner banner")}
      <section class="section"><div class="container">
        <p class="muted" style="max-width:640px;font-size:18px">Grow your business by offering private airport pickups to travellers</p>
        <div class="section-head" style="margin-top:48px"><h2>Why become a Partner?</h2></div>
        <div class="bento bento-2">
          ${[
            ["You'll schedule more quality rides", "become-1.jpg", "Receive transfer requests in advance and grow your business with more quality rides."],
            ["You'll have access to our Partner Network", "become-2.jpg", "Use our network of over 1,500 hotels and 800 vacation rental companies to expand your offering."],
            ["You'll get paid weekly", "become-3.jpg", "We pay our drivers every week, so you won't have to wait around for your money."],
            ["Join our Mission", "become-4.jpg", "Our goal is to change the way people travel by making the beginning and end of every trip as enjoyable as the middle."],
          ].map(([t, img, b]) => `
            <div class="liquid-glass"><div class="glow"></div>
              <div style="display:flex;flex-direction:column">
                <img src="${BASE}/${img}" alt="${t}" style="width:100%;aspect-ratio:16/10;object-fit:cover"/>
                <div style="padding:24px"><h3 style="margin:0;font-size:18px">${t}</h3><p class="muted" style="margin:12px 0 0;font-size:14px">${b}</p></div>
              </div>
            </div>`).join("")}
        </div>
      </div></section>
      ${booking("partner")}
    `,
  }),
};

fs.mkdirSync(OUT, { recursive: true });
for (const [file, html] of Object.entries(pages)) {
  fs.writeFileSync(path.join(OUT, file), html, "utf8");
  console.log("Wrote", file);
}
fs.writeFileSync(
  path.join(OUT, "README.md"),
  `# SpaceHero — Static HTML Site

Self-contained HTML pages with embedded CSS and JS (no React build needed).

## Open locally

Double-click \`index.html\`, or serve the folder:

\`\`\`bash
npx serve html
\`\`\`

## Pages

- index.html
- about.html
- valet.html
- drive-me.html
- monthly-driver.html
- team.html
- contact.html
- driver-partner.html

Images load from https://spacehero.in/images/
`,
  "utf8",
);
console.log("Done →", OUT);