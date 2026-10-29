'use strict';

const icons={
 'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
 'arrow-down':'<path d="M12 4v16m-6-6 6 6 6-6"/>',
 'arrow-up':'<path d="M12 20V4m-6 6 6-6 6 6"/>',
 'arrow-left':'<path d="M20 12H4m6-6-6 6 6 6"/>',
 'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 'corner-down-left':'<path d="M18 4v9a3 3 0 0 1-3 3H5m5-5-5 5 5 5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 moon:'<path d="M20.9 13.3A9 9 0 0 1 10.7 3.1 9 9 0 1 0 20.9 13.3Z"/>',
 linkedin:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
 github:'<path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.5c0-1 .1-1.4-.5-2 3.1-.4 6.3-1.5 6.3-6.8a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.7 0C6.3 1.6 5.2 2 5.2 2A4.8 4.8 0 0 0 5 5.4a5.2 5.2 0 0 0-1.4 3.7c0 5.2 3.2 6.4 6.3 6.7-.5.5-.7 1.1-.7 2v3.5"/>',
 'map-pin':'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
 layers:'<path d="m12 3 10 5-10 5L2 8 12 3Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
 'file-check':'<path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5m-12 7 3 3 6-6"/>',
 chart:'<path d="M4 3v17h17M8 15l4-5 4 2 5-7"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 x:'<path d="m6 6 12 12M6 18 18 6"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
 activity:'<path d="M2 12h5l3-8 4 16 3-8h5"/>',
 camera:'<path d="M3 6h5l2-3h4l2 3h5v15H3V6Z"/><circle cx="12" cy="13" r="4"/>'
};
function renderIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{const path=icons[el.dataset.icon];if(path)el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;});}
renderIcons();

const themeButton=document.querySelector('.theme-toggle');
function syncTheme(){const light=document.documentElement.dataset.theme==='light';themeButton.setAttribute('aria-label',`Switch to ${light?'dark':'light'} theme`);themeButton.title=themeButton.getAttribute('aria-label');themeButton.querySelector('[data-icon]').dataset.icon=light?'moon':'sun';renderIcons(themeButton);document.querySelector('meta[name="theme-color"]').content=light?'#f7f8f3':'#101311';}
themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('rui-theme',next);}catch(e){}syncTheme();});
syncTheme();
const menuButton=document.querySelector('.menu-toggle');
const pageHeader=document.querySelector('.header');
function closeMenu(){pageHeader.classList.remove('nav-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';pageHeader.classList.toggle('nav-open',open);menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#primary-nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&pageHeader.classList.contains('nav-open')){closeMenu();menuButton.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();

// Fictional weekly activity summaries. These do not contain Rui's training data.
const sampleWeeks=[
 {run:22,ride:92,runMins:132,rideMins:218,runSessions:3,rideSessions:2},
 {run:28,ride:108,runMins:165,rideMins:250,runSessions:3,rideSessions:3},
 {run:25,ride:76,runMins:145,rideMins:185,runSessions:3,rideSessions:2},
 {run:34,ride:125,runMins:198,rideMins:280,runSessions:4,rideSessions:3},
 {run:31,ride:134,runMins:180,rideMins:305,runSessions:4,rideSessions:3},
 {run:38,ride:152,runMins:218,rideMins:340,runSessions:4,rideSessions:3},
 {run:29,ride:98,runMins:170,rideMins:235,runSessions:3,rideSessions:2},
 {run:42,ride:168,runMins:240,rideMins:375,runSessions:4,rideSessions:4}
];
let sport='all',weeks=4;
function updateAnalytics(){
 const rows=sampleWeeks.slice(-weeks),showRun=sport!=='ride',showRide=sport!=='run';
 const distance=rows.reduce((t,r)=>t+(showRun?r.run:0)+(showRide?r.ride:0),0);
 const minutes=rows.reduce((t,r)=>t+(showRun?r.runMins:0)+(showRide?r.rideMins:0),0);
 const sessions=rows.reduce((t,r)=>t+(showRun?r.runSessions:0)+(showRide?r.rideSessions:0),0);
 document.getElementById('demo-distance').innerHTML=`${distance.toLocaleString('en-GB')}<small>km</small>`;
 document.getElementById('demo-time').innerHTML=`${(minutes/60).toFixed(1)}<small>h</small>`;
 document.getElementById('demo-sessions').textContent=sessions;
 document.querySelectorAll('[data-sport]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sport===sport)));
 document.querySelectorAll('[data-weeks]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.weeks)===weeks)));
 const max=Math.ceil(Math.max(...rows.map(r=>(showRun?r.run:0)+(showRide?r.ride:0)))/25)*25;
 const chart=document.getElementById('demo-chart');
 const width=Math.max(220,chart.clientWidth),left=40,top=12,bottom=145,plotWidth=width-left-8,slot=plotWidth/rows.length,bar=Math.min(31,slot*.46);
 let svg='';
 for(let i=0;i<=3;i++){const y=top+(bottom-top)*i/3;svg+=`<line x1="${left}" y1="${y}" x2="${width-8}" y2="${y}" stroke="#dce2d5" stroke-dasharray="2 4"/><text x="${left-9}" y="${y+3}" fill="#7c8773" text-anchor="end" font-size="16" font-family="monospace">${Math.round(max*(1-i/3))}</text>`;}
 rows.forEach((r,i)=>{const a=showRun?r.run:0,b=showRide?r.ride:0,ah=a/max*(bottom-top),bh=b/max*(bottom-top),x=left+slot*(i+.5)-bar/2;svg+=`<g><title>Sample week ${8-weeks+i+1}: running ${a} km, cycling ${b} km</title><rect x="${x}" y="${bottom-bh}" width="${bar}" height="${bh}" fill="#b6c99e" rx="2"/><rect x="${x}" y="${bottom-bh-ah}" width="${bar}" height="${ah}" fill="#5b7740" rx="2"/><text x="${x+bar/2}" y="169" text-anchor="middle" fill="#7c8773" font-size="16" font-family="monospace">W${8-weeks+i+1}</text></g>`;});
 chart.innerHTML=`<svg viewBox="0 0 ${width} 185" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${svg}</svg>`;chart.setAttribute('aria-label',`${weeks} fictional weeks, ${sport==='all'?'running and cycling':sport==='run'?'running':'cycling'}. Weekly distance in kilometres: ${rows.map(r=>(showRun?r.run:0)+(showRide?r.ride:0)).join(', ')}. Total ${distance} kilometres.`);
}
document.querySelectorAll('[data-sport]').forEach(b=>b.addEventListener('click',()=>{sport=b.dataset.sport;updateAnalytics();}));
document.querySelectorAll('[data-weeks]').forEach(b=>b.addEventListener('click',()=>{weeks=Number(b.dataset.weeks);updateAnalytics();}));
updateAnalytics();
let lastChartWidth=0;
new ResizeObserver(entries=>{const w=entries[0].contentRect.width;if(Math.abs(w-lastChartWidth)>1){lastChartWidth=w;updateAnalytics();}}).observe(document.getElementById('demo-chart'));

const projectCases={
 endurance:`<p class="eyebrow">PERSONAL PROJECT / LOCAL-FIRST ANALYTICS</p><h2 id="case-title">Endurance Lab</h2><p class="case-lead">Making a fragmented training history useful, inspectable and my own.</p><div class="tags"><span>Python</span><span>SQLite</span><span>Streamlit</span><span>Plotly</span><span>FIT / TCX / JSON</span></div><h3>The problem</h3><p>Training data arrives from different devices, exports and services. The same session can appear more than once, formats disagree, and useful detail can be lost between platforms.</p><h3>What I built</h3><p>A local-first application that parses endurance activity files and supported strength-training exports into a common activity model. It preserves original files, tracks provenance and uses conservative matching to avoid duplicate activities.</p><div class="pipeline" aria-label="Data pipeline"><span>Activity files</span><i aria-hidden="true">→</i><span>Shared model</span><i aria-hidden="true">→</i><span>SQLite</span><i aria-hidden="true">→</i><span>Analytics & dashboard</span></div><h3>Engineering decisions</h3><ul><li>Keep file parsers separate from the analytics layer, so each can evolve independently.</li><li>Retain source detail and report quality gaps instead of silently inventing missing values.</li><li>Use SQLite for portable storage and a Streamlit/Plotly interface for exploration.</li><li>Make activity history, performance trends and training-plan reconciliation inspectable.</li></ul><h3>What this demonstrates</h3><p>End-to-end ownership: ingestion, normalization, data quality, storage, analytics and an interface built around actual questions.</p><p class="case-note">The interactive panel on this portfolio is a browser concept using synthetic activity summaries. The full application is a separate local-first Python project; no personal training history is published here.</p><a class="button primary" href="https://github.com/ruicoelhor22/strava_analysis" target="_blank" rel="noopener noreferrer">Explore the source <span data-icon="arrow-up-right"></span></a>`,
 contracts:`<p class="eyebrow">ADIDAS INTERNSHIP / PUBLIC PROOF OF CONCEPT</p><h2 id="case-title">Making data agreements explicit.</h2><p class="case-lead">Connecting producers, consumers and the expectations between them.</p><div class="tags"><span>Collibra</span><span>Data contracts</span><span>Data products</span><span>Governance</span><span>Python</span><span>Collibra REST APIs</span><span>Databricks</span></div><h3>The problem</h3><p>When the relationships between data products are unclear, ownership, dependencies and change expectations become difficult to understand. A data contract makes those agreements visible.</p><h3>The prototype</h3><p>During my adidas internship, I developed a proof of concept using Collibra to connect data contracts with producer and consumer data products and their output ports. It captures information about the parties, usage terms and change expectations.</p><h3>My contribution</h3><p>I built the prototype using Python, Collibra REST APIs and Databricks, working within an international Data & Analytics team using Agile and Scrum practices. The work combined a technical prototype with the governance questions around ownership, contract management and relationships between data products.</p><h3>A deliberate boundary</h3><p>The published prototype creates logical relationships. Triggering infrastructure pipelines to create physical relationships was a possible future extension, not delivered functionality.</p><div class="case-demo"><p class="eyebrow">TRY THE CONCEPT / SYNTHETIC DATA</p><h3>What happens when a field changes?</h3><p>This separate browser example illustrates a schema check. The original Collibra prototype manages logical agreements; this is not a live Collibra integration.</p><div class="demo-presets"><button type="button" data-preset="valid">Load valid example</button><button type="button" data-preset="breaking">Introduce a breaking change</button></div><label for="contract-input">Example activity record (editable JSON)</label><textarea id="contract-input" spellcheck="false" autocapitalize="off" aria-describedby="contract-rule">{\n  "activity_id": "sample-001",\n  "sport": "running",\n  "distance_km": 12.5\n}</textarea><p id="contract-rule">Contract: a non-empty activity_id, sport set to running or cycling, and a non-negative numeric distance_km.</p><button class="validate-button" type="button" id="validate-contract">Check the contract</button><div id="validation-output" class="validation-output" role="status" aria-live="polite">Choose an example or edit the record, then run the check.</div></div><a class="button primary" href="https://github.com/ruicoelhor22/DataContracts-Collibra" target="_blank" rel="noopener noreferrer">View the public prototype <span data-icon="arrow-up-right"></span></a>`,

};
Object.assign(projectCases, window.PORTFOLIO_CASE_STUDIES || {});
const caseDialog=document.getElementById('case-dialog');
const caseContent=document.getElementById('case-content');
function openCase(key){if(!projectCases[key])return;caseContent.innerHTML=projectCases[key];renderIcons(caseContent);renderLineages(caseContent);caseDialog.showModal();caseDialog.scrollTop=0;document.body.classList.add('modal-open');if(key==='contracts')setupContractDemo();}
document.querySelectorAll('[data-case]').forEach(b=>b.addEventListener('click',()=>openCase(b.dataset.case)));

function setupContractDemo(){
 const input=document.getElementById('contract-input'),output=document.getElementById('validation-output');
 caseContent.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>{input.value=JSON.stringify(b.dataset.preset==='valid'?{activity_id:'sample-001',sport:'running',distance_km:12.5}:{activity_id:'sample-001',sport:'running',distance_km:'12.5'},null,2);output.textContent=b.dataset.preset==='valid'?'Valid example loaded. Run the check to see the result.':'A numeric field is now text. Run the check to inspect the change.';delete output.dataset.valid;}));
 document.getElementById('validate-contract').addEventListener('click',()=>{let record;try{record=JSON.parse(input.value);}catch(e){output.dataset.valid='false';output.textContent='Could not read this JSON. Check the quotation marks, commas and brackets, then try again.';return;}
 const errors=[];
 if(!record||typeof record!=='object'||Array.isArray(record)){errors.push('The record must be a JSON object.');}else{if(typeof record.activity_id!=='string'||!record.activity_id.trim())errors.push('activity_id must be a non-empty string.');if(!['running','cycling'].includes(record.sport))errors.push('sport must be running or cycling.');if(typeof record.distance_km!=='number'||!Number.isFinite(record.distance_km)||record.distance_km<0)errors.push('distance_km must be a non-negative number, not text.');}
 output.dataset.valid=String(!errors.length);output.textContent=errors.length?`Contract check failed\n${errors.map(e=>'• '+e).join('\n')}`:'Contract check passed. All three fields meet the example agreement.';
 });
}

const photographs=[
 {file:'evening-skyline',title:'Evening skyline',alt:'A wide sunset over a city skyline, trees and an open park'},
 {file:'city-at-night',title:'After dark',alt:'A city intersection at night, with tall buildings and warm street lights'},
 {file:'last-light',title:'Last light',alt:'Dark leaves silhouetted against a glowing orange sun'},
 {file:'on-the-water',title:'On the water',alt:'A lone kayaker crossing calm water beside a stone bridge and autumn trees'},
 {file:'quiet-details',title:'Quiet details',alt:'A pale leaf with water droplets resting among fine green branches'}
];
const photoDialog=document.getElementById('photo-dialog');
document.getElementById('gallery-grid').innerHTML=photographs.map(p=>`<figure><img src="assets/${p.file}.webp" alt="${p.alt}" loading="lazy"><figcaption>${p.title}</figcaption></figure>`).join('');
document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{photoDialog.showModal();photoDialog.scrollTop=0;document.body.classList.add('modal-open');}));
document.querySelectorAll('dialog').forEach(d=>{d.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>d.close()));d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});d.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('modal-open');});});

// User-supplied badges; fundamentals learning is distinct from professional certification.
const credentials={
 'associate':{title:'Data Engineer Associate',kind:'Professional certification',image:'assets/credentials/data-engineer-associate.png'},
 'fundamentals':{title:'Databricks Fundamentals',kind:'Fundamentals badge',image:'assets/credentials/databricks-fundamentals.png'},
 'azure':{title:'Platform Architect · Azure',kind:'Fundamentals badge',image:'assets/credentials/platform-architect-azure.png'},
 'agents':{title:'AI Agent Fundamentals',kind:'Fundamentals badge',image:'assets/credentials/ai-agent-fundamentals.png'},
 'generative':{title:'Generative AI Fundamentals',kind:'Fundamentals badge',image:'assets/credentials/generative-ai-fundamentals.png'}
};
const credentialDialog=document.getElementById('credential-dialog');
document.querySelectorAll('[data-credential]').forEach(button=>button.addEventListener('click',()=>{
 const badge=credentials[button.dataset.credential];
 document.getElementById('credential-title').textContent=badge.title;
 document.getElementById('credential-kind').textContent=badge.kind;
 const image=document.getElementById('credential-image');image.src=badge.image;image.alt=badge.title+' badge';
 credentialDialog.showModal();credentialDialog.scrollTop=0;document.body.classList.add('modal-open');
}));

// Generic portfolio diagrams, never client-specific lineage or identifiers.
const lineageExamples={
 frontwell:{title:'Operational data to stakeholder use',columns:[{title:'Sources',items:['Laboratory systems','Manufacturing systems','Enterprise systems']},{title:'Data products',items:['Source data products','Analytical data products']},{title:'Use cases',items:['Applications','Reports & dashboards','Operational decisions']}]},
 documentation:{title:'Documentation from the engineering project',columns:[{title:'Input',items:['dbt project metadata','Model definitions']},{title:'Framework',items:['Generated documentation']},{title:'Outputs',items:['Model reference','Lineage views','Compiled SQL']}]},
 nordex:{title:'Industrial data to dependable reporting',columns:[{title:'Sources',items:['Turbine data','Operational files']},{title:'Data products',items:['Centralised master data','Curated lakehouse layers']},{title:'Use cases',items:['Operational reports','Data-quality monitoring']}]}
};
function renderLineages(root=document){root.querySelectorAll('[data-lineage]').forEach(el=>{const graph=lineageExamples[el.dataset.lineage];if(!graph)return;el.innerHTML=`<figure class="lineage-figure"><figcaption>${graph.title}</figcaption><div class="lineage-columns">${graph.columns.map((col,i)=>`<div class="lineage-column"><span class="lineage-stage">${i+1} / ${col.title}</span><div class="lineage-nodes">${col.items.map(item=>`<span>${item}</span>`).join('')}</div></div>`).join('')}</div><p class="lineage-note">Illustrative relationships, using generic categories.</p></figure>`;});}
renderLineages();

const fictionalSessions={
 run:{distance:10,time:'48 min',ascent:105,elevations:[18,22,26,34,42,58,70,78,63,50,40,35,28,26,37,46,39,30,24,20,18]},
 ride:{distance:64,time:'2 h 14',ascent:680,elevations:[40,55,80,95,140,180,225,250,210,160,130,110,145,190,230,175,125,90,80,55,40]},
 trail:{distance:12,time:'1 h 19',ascent:420,elevations:[85,110,145,180,220,275,330,290,240,215,250,300,345,310,255,210,175,155,125,100,85]}
};
let selectedSession='run';
function updateSession(){
 const session=fictionalSessions[selectedSession],input=document.getElementById('route-progress'),progress=Number(input.value)/100;
 const values=session.elevations,last=values.length-1,pos=progress*last,index=Math.min(last-1,Math.floor(pos)),fraction=pos-index,elevation=Math.round(values[index]+(values[index+1]-values[index])*fraction);
 document.querySelectorAll('[data-session]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.session===selectedSession)));
 document.getElementById('session-distance').textContent=session.distance+' km';document.getElementById('session-time').textContent=session.time;document.getElementById('session-ascent').textContent=session.ascent+' m';
 document.getElementById('session-position').textContent=(session.distance*progress).toFixed(1)+' / '+session.distance+' km';document.getElementById('route-elevation').textContent=elevation+' m elevation';input.setAttribute('aria-valuetext',`${(session.distance*progress).toFixed(1)} kilometres, ${elevation} metres elevation`);
 const chart=document.getElementById('session-profile'),w=Math.max(240,chart.clientWidth),h=170,pad=10,base=150,max=Math.max(...values)+30,min=Math.min(...values)-15,y=v=>base-(v-min)/(max-min)*130,x=i=>pad+i/last*(w-pad*2),points=values.map((v,i)=>`${x(i)},${y(v)}`).join(' '),cx=pad+progress*(w-pad*2),cy=y(elevation);
 chart.innerHTML=`<svg viewBox="0 0 ${w} ${h}" aria-hidden="true"><defs><linearGradient id="profile-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8aab63" stop-opacity=".5"/><stop offset="100%" stop-color="#8aab63" stop-opacity=".04"/></linearGradient></defs><path d="M${pad},${base} L${points.replaceAll(' ', ' L')} L${w-pad},${base} Z" fill="url(#profile-fill)"/><polyline points="${points}" fill="none" stroke="#536d32" stroke-width="3" stroke-linejoin="round"/><line x1="${cx}" y1="10" x2="${cx}" y2="${base}" stroke="#7f8e71" stroke-dasharray="4 4"/><circle cx="${cx}" cy="${cy}" r="6" fill="#344c24" stroke="#fff" stroke-width="2"/></svg>`;
 chart.setAttribute('aria-label',`Fictional ${session.distance} kilometre route elevation profile. Selected point: ${(session.distance*progress).toFixed(1)} kilometres, ${elevation} metres elevation.`);
}
function setDemoPage(page){document.querySelectorAll('[data-demo-page]').forEach(b=>{const active=b.dataset.demoPage===page;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});document.getElementById('demo-overview').hidden=page!=='overview';document.getElementById('demo-session').hidden=page!=='session';if(page==='session')updateSession();else updateAnalytics();}
document.querySelectorAll('[data-demo-page]').forEach(b=>{b.addEventListener('click',()=>setDemoPage(b.dataset.demoPage));b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const page=e.key==='Home'?'overview':e.key==='End'?'session':b.dataset.demoPage==='overview'?'session':'overview';setDemoPage(page);document.querySelector(`[data-demo-page="${page}"]`).focus();}});});
document.querySelectorAll('[data-session]').forEach(b=>b.addEventListener('click',()=>{selectedSession=b.dataset.session;document.getElementById('route-progress').value='0';updateSession();}));
document.getElementById('route-progress').addEventListener('input',updateSession);
new ResizeObserver(()=>{if(!document.getElementById('demo-session').hidden)updateSession();}).observe(document.getElementById('session-profile'));
