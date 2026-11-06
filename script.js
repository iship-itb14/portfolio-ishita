const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const pages=[['index.html','Home'],['about.html','About'],['projects.html','Projects'],['experience.html','Experience'],['contact.html','Contact']];
const cur=document.body.dataset.page;
$('#hd').innerHTML=`<div class="wrap"><a class="logo" href="index.html">Ishita Pawar</a><nav>${pages.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}<button class="tg" id="tg">Dark</button></nav></div>`;
$('#ft').innerHTML=`<div class="wrap"><span>Ishita Pawar · M.S. Data Science, CU Boulder</span><span>Boulder, Colorado</span></div>`;
const root=document.documentElement,tg=$('#tg');
const dark=()=>root.dataset.theme?root.dataset.theme=='dark':matchMedia('(prefers-color-scheme:dark)').matches;
try{const s=localStorage.getItem('t');if(s)root.dataset.theme=s}catch(e){}
const lab=()=>tg.textContent=dark()?'Light':'Dark';lab();
tg.onclick=()=>{root.dataset.theme=dark()?'light':'dark';try{localStorage.setItem('t',root.dataset.theme)}catch(e){}lab()};
// home: interests
const notes={Statistics:'Hypothesis testing, A/B testing and statistical modeling are the base of how I approach every dataset.',Stationery:'I like pens and notebooks enough that I analyzed 26,700+ Amazon stationery listings for a project.',Books:'Usually in the middle of one, and always open to recommendations.',Korean:'I understand and speak Korean. 안녕하세요!',Greenhouses:'Plants and botanical gardens are my favorite place to wander on a day off.'};
$$('.words button').forEach(b=>b.onclick=()=>{$$('.words button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#note').textContent=notes[b.dataset.k]});
// about: skills tabs
const sk={'Machine learning':['Machine Learning','Deep Learning','NLP','Classification','Clustering','Random Forest','Feature Engineering','Model Tuning','Spatio-temporal Analysis'],'Statistics':['Statistical Modeling','Hypothesis Testing','A/B Testing','Regression','Data Visualization'],'Languages and libraries':['Python','SQL','R','Pandas','NumPy','Scikit-learn','LightGBM','TensorFlow','PyTorch','Matplotlib','Hadoop','JavaScript'],'Tools and cloud':['FastAPI','REST APIs','Git','GitHub','Jupyter','AWS S3','Docker','GitHub Actions','Claude and GPT-4 APIs']};
const st=$('#tabs');if(st){const all=[];Object.entries(sk).forEach(([k,v])=>v.forEach(s=>all.push([k,s])));
$('#tags').innerHTML=all.map(a=>`<span class="tag" data-g="${a[0]}">${a[1]}</span>`).join('');
['All',...Object.keys(sk)].forEach(k=>{const b=document.createElement('button');b.className='tab'+(k=='All'?' on':'');b.textContent=k;b.onclick=()=>{$$('.tab',st).forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.tag').forEach(t=>t.classList.toggle('dim',k!='All'&&t.dataset.g!=k))};st.appendChild(b)})}
const kr=$('#kr');if(kr){const g=[['안녕하세요','Hello'],['만나서 반가워요','Nice to meet you'],['감사합니다','Thank you'],['화이팅','You can do it']];let i=0;kr.onclick=()=>{i=(i+1)%g.length;$('b',kr).textContent=g[i][0];$('span',kr).textContent=g[i][1]+' (click for another)'}}
// projects filter
const pf=$('#pf');if(pf){['All','NLP','Machine learning','Data mining','Dashboards'].forEach(k=>{const b=document.createElement('button');b.className='tab'+(k=='All'?' on':'');b.textContent=k;b.onclick=()=>{$$('.tab',pf).forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.card').forEach(c=>c.classList.toggle('hide',k!='All'&&!c.dataset.t.includes(k)))};pf.appendChild(b)})}
// contact copy
const cp=$('#cp');if(cp)cp.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText('ishitapawar19@gmail.com');cp.textContent='Copied';setTimeout(()=>cp.textContent='Copy email',1600)};
