/* EDIT WEBSITE CONTENT HERE. Keep filenames in sync with the included HTML pages. */
const BUSINESS = {
  name: 'Harris Heating', legalName: 'HARRIS HEATING LIMITED', phone: '07520 664091', tel: '+447520664091',
  email: 'info@harrisheatingltd.co.uk', domain: 'harrisheatingltd.co.uk',
  address: '53 Nork Way, Banstead, England, SM7 1HL', number: '10291579', areas: 'Banstead & Surrey',
  headline: 'Good work.\nWarm homes.',
  intro: 'Plumbing and heating for homes and small businesses across Surrey. From the little repairs to the bigger plans, we’re here to help.',
  about: 'We’re a family-run plumbing and heating business serving Banstead and Surrey. Built on reliability, craftsmanship and customer care, we bring a friendly, down-to-earth approach to every job.',
  services: [
    {id:'boilers', title:'Boilers', image:'boiler-installation.webp', alt:'Wall-mounted boiler with copper pipework', intro:'A new installation or a boiler that needs attention. Talk to us about the right next step for your home or business.', items:['Boiler installations','Boiler breakdowns','Electric boiler installations','Emergency call outs'], note:'For a breakdown, tell us the boiler make, model and any fault code. Call to discuss the problem and current availability.'},
    {id:'heating', title:'Heating & controls', image:'heating-controls.webp', alt:'Heating controls and system equipment', intro:'From radiators to smart controls, we help you look after the system that keeps your space comfortable.', items:['Central heating','Radiators','Heating controls','Heating electrics','Smart thermostats','Underfloor heating','Magnaclean flushes','Power flushing'], note:'Tell us which rooms or parts of your system need attention, or share your plans for an upgrade.'},
    {id:'plumbing', title:'General plumbing', image:'plumber-working.webp', alt:'Plumbing work beneath a sink', intro:'Practical help with everyday plumbing, for homeowners, landlords and small businesses across Surrey.', items:['General plumbing','Plumbing repairs','Emergency call outs'], note:'Describe the issue and where it is in the property. Photos can help us understand what you need before arranging a visit.'},
    {id:'bathrooms', title:'Bathrooms & wet rooms', image:'bathroom-shower.webp', alt:'Shower installation with patterned wall tiles', intro:'Make more of your bathroom. We can help with design and installation, from a fresh bathroom layout to a wet room.', items:['Bathroom design','Bathroom installations','Wet rooms'], note:'Share your ideas, room dimensions and any photos of the existing space so we can discuss your plans.'},
    {id:'hot-water', title:'Hot water & cylinders', image:'hot-water-system.webp', alt:'Hot water cylinder and associated copper pipework', intro:'Hot water systems for your property, including hot water and unvented cylinders.', items:['Hot water cylinders','Unvented cylinders'], note:'Let us know about your existing system and what you would like to change, or describe the issue you’re experiencing.'},
    {id:'gas-safety', title:'Landlord gas safety', image:'boiler-service.webp', alt:'Gas boiler and connected pipework', intro:'Landlord gas safety checks for rental properties across Surrey, from a local Gas Safe registered business.', items:['Landlord gas safety checks'], note:'Get in touch with the property location and details of the gas appliances to discuss arranging a check.'}
  ],
  faqs: [
    ['Where do you work?','We serve domestic and commercial customers across Surrey, including Banstead. Contact us with your postcode to discuss your job.'],
    ['Can I call about an urgent repair?','Yes, emergency call outs are among our services. Please call to discuss the issue and confirm current availability.'],
    ['Do you work with landlords and businesses?','Yes. We work with homeowners, landlords and small businesses, including landlord gas safety checks.'],
    ['How do I discuss a quote?','Call or email with your postcode and a brief description of the work. For an installation, photos and details of your existing system are useful.']
  ]
};
/* END OF EDITABLE CONTENT */
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const call = (label='Call '+BUSINESS.phone) => `<a class="button" href="tel:${esc(BUSINESS.tel)}">${esc(label)}</a>`;
const photo = (s, cls='', eager=false) => `<img class="${cls}" src="assets/${s.image}" alt="${esc(s.alt)}" width="1000" height="1200" ${eager?'fetchpriority="high"':'loading="lazy"'}>`;
function render(page='home') {
 const b=BUSINESS, s=b.services.find(s=>s.id===page);
 const cards=b.services.map((x,i)=>`<a class="service reveal" href="${x.id}.html">${photo(x)}<div><span class="number">0${i+1}</span><h3>${x.title}</h3><span class="text-link">Explore service</span></div></a>`).join('');
 const header=`<a class="skip" href="#main">Skip to content</a><header><div class="nav-wrap"><a class="brand" href="index.html" aria-label="Harris Heating home"><img class="company-logo" src="assets/harris-heating-logo.svg" alt="Harris Heating Ltd" width="1020" height="320"></a><button class="menu" aria-controls="navigation" aria-expanded="false">Menu</button><nav id="navigation" aria-label="Main navigation"><a href="index.html#services">Services</a><a href="index.html#about">About us</a><a href="index.html#areas">Our area</a><a href="#contact">Contact</a></nav><a class="nav-call" href="tel:${b.tel}">${b.phone}</a></div></header>`;
 const contact=`<section class="contact" id="contact"><div class="wrap contact-grid"><div><p class="eyebrow">LET’S TALK</p><h2>A small repair.<br>A bigger project.<br>Start with a call.</h2></div><div><p>Tell us what you need and where you’re based. We’ll discuss the next step with you.</p><a class="big-phone" href="tel:${b.tel}">${b.phone}</a><a class="email" href="mailto:${b.email}">${b.email}</a><p class="small">For urgent plumbing or heating enquiries, please call to check availability.</p></div></div></section>`;
 const footer=`<footer class="wrap"><div class="footer-top"><a class="brand" href="index.html"><img class="company-logo" src="assets/harris-heating-logo.svg" alt="Harris Heating Ltd" width="1020" height="320" loading="lazy"></a><p>Local care. Work done properly.<br>${b.areas}</p><a href="privacy.html">Privacy notice</a></div><div class="legal"><p>${b.legalName} · Company number ${b.number}<br>Registered office: ${b.address}</p><p>© ${new Date().getFullYear()} ${b.name}</p></div></footer><div class="mobile-call">${call()}</div>`;
 let main;
 if(s) main=`<section class="wrap detail-hero"><div><a class="back" href="index.html#services">All services</a><p class="eyebrow">${b.areas} / ${b.name}</p><h1>${s.title}</h1><p class="lead">${s.intro}</p>${call('Discuss your job')}</div>${photo(s,'detail-photo',true)}</section><section class="wrap detail-body"><div><p class="eyebrow">HOW WE CAN HELP</p><h2>Care for every detail.</h2><ul class="service-list">${s.items.map(x=>`<li>${x}</li>`).join('')}</ul></div><aside><h3>Before you get in touch</h3><p>${s.note}</p><a href="mailto:${b.email}">${b.email}</a></aside></section><section class="wrap other"><h2>More from Harris Heating</h2><div class="related">${b.services.filter(x=>x!==s).map(x=>`<a href="${x.id}.html">${x.title}</a>`).join('')}</div></section>`;
 else if(page==='privacy') main=`<section class="wrap privacy"><p class="eyebrow">${b.legalName}</p><h1>Privacy notice</h1><p>This website uses no analytics, advertising cookies, online forms or third-party embeds. It does not store information in your browser.</p><h2>When you contact us</h2><p>If you call or email us, we use the contact details and job information you provide to respond to your enquiry and manage any work you request. Email links open your own email application.</p><h2>Your information</h2><p>Please only send information needed for your enquiry. To ask about your personal information, request access or correction, or raise a privacy concern, contact ${b.legalName} at <a href="mailto:${b.email}">${b.email}</a> or write to ${b.address}.</p><p>If this site is hosted online, the hosting provider may process technical connection data to deliver the website.</p></section>`;
 else main=`<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">LOCAL PLUMBING & HEATING / SURREY</p><h1>Good work.<br><span>Warm homes.</span></h1><p class="lead">${b.intro}</p><div class="actions">${call()}<a class="button secondary" href="#services">Our services</a></div><p class="hero-foot">Family-run. Based in Banstead. Here for Surrey.</p></div><div class="hero-image">${photo(b.services[0],'',true)}<div class="photo-label"><span>THE DETAILS MATTER</span><strong>Heating. Handled with care.</strong></div></div></div></section><section class="trust wrap"><div><img src="assets/gas-safe-trans.png" alt="Gas Safe Register" width="106" height="120"><p><strong>Gas Safe registered</strong><span>Care for your home and heating</span></p></div><p>Local & reliable</p><p>High-quality parts</p><p>All jobs guaranteed</p></section><section class="wrap section" id="services"><div class="section-head reveal"><div><p class="eyebrow">WHAT WE DO</p><h2>One local team.<br>A whole lot of know-how.</h2></div><p>From a boiler breakdown to a new bathroom. Plumbing and heating services for homes, landlords and small businesses.</p></div><div class="services">${cards}</div><div class="service-note"><p>Not sure where your job fits?</p><a href="tel:${b.tel}">Give us a call. Let’s talk it through.</a></div></section><section class="about" id="about"><div class="wrap about-grid"><div class="about-photo reveal">${photo(b.services[2])}<span>BANSTEAD & SURREY</span></div><div class="reveal"><p class="eyebrow">MEET HARRIS HEATING</p><h2>Traditional values.<br>A personal approach.</h2><p>${b.about}</p><p>We’ve grown through word of mouth and customer recommendations. Whatever the size of the job, we bring the same care and attention to detail.</p><dl><div><dt>Local expertise</dt><dd>Proudly serving Surrey and Banstead</dd></div><div><dt>Transparent pricing</dt><dd>Clear conversations about your work and costs</dd></div><div><dt>Registered & connected</dt><dd>Gas Safe registered and members of Checkatrade</dd></div></dl></div></div></section><section class="wrap areas section" id="areas"><div class="reveal"><p class="eyebrow">CLOSE TO HOME</p><h2>Banstead roots.<br>Surrey reach.</h2></div><div class="reveal"><p>Local plumbing and heating for domestic and commercial customers across Surrey.</p><p>Not sure if we cover your area? Give us a call and we’ll be happy to confirm.</p><a class="text-link" href="tel:${b.tel}">Call ${b.phone} to check coverage</a></div></section><section class="faq wrap section"><div><p class="eyebrow">A FEW USEFUL ANSWERS</p><h2>Before you call.</h2></div><div>${b.faqs.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('')}</div></section>`;
 return header+`<main id="main">${main}${contact}</main>`+footer;
}
if(typeof module!=='undefined') module.exports={BUSINESS,render};
if(typeof document!=='undefined') {
 document.getElementById('site').innerHTML=render(document.body.dataset.page);
 const menu=document.querySelector('.menu'), nav=document.querySelector('nav');
 function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.focus();}});
 // Accumulate movement in each direction so tiny scroll changes do not flicker.
 const header=document.querySelector('header');
 let lastY=Math.max(0,window.scrollY), direction=0, travel=0, framePending=false;
 const showHeader=()=>header.classList.remove('header-hidden');
 function updateHeader(){
   const y=Math.max(0,window.scrollY), delta=y-lastY;
   lastY=y; framePending=false;
   if(y<=header.offsetHeight || menu.getAttribute('aria-expanded')==='true' || header.querySelector(':focus-visible')){
     showHeader();travel=0;direction=0;return;
   }
   if(!delta)return;
   const nextDirection=Math.sign(delta);
   travel=nextDirection===direction?travel+Math.abs(delta):Math.abs(delta);
   direction=nextDirection;
   if(travel>=8)header.classList.toggle('header-hidden',direction>0);
 }
 window.addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(updateHeader);}},{passive:true});
 header.addEventListener('focusin',showHeader);
 menu.addEventListener('click',showHeader);
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(e=>{e.classList.add('animate');observer.observe(e);});}
}
