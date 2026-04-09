// ─── DATA ───────────────────────────────────────────────────────────────────
const PARTNERS = {
  molfetta: {
    name: 'Molfetta', country: 'Italia', role: 'Líder',
    org: 'Associazione InCo Molfetta APS',
    desc: 'Organización especializada en proyectos europeos, educación de personas adultas e innovación social. Lidera la coordinación del proyecto, integrando metodologías pedagógicas y herramientas digitales para la valorización del patrimonio cultural.',
    color: '#2563eb',
    logo: 'assets/logos/inco-molfetta.png',
    links: [
      { label: 'incoweb.org', url: 'https://www.incoweb.org/ita' }
    ]
  },
  altea: {
    name: 'Altea', country: 'España', role: 'Socio',
    org: "Ajuntament d'Altea / EuroAltea",
    desc: 'Municipio mediterráneo con una fuerte apuesta por la cultura, la participación y la innovación educativa. A través de EuroAltea y la colaboración con centros educativos y agentes locales, actúa como laboratorio vivo para la implementación y validación del proyecto.',
    color: '#d97706',
    logo: 'assets/logos/ajuntament-altea.png',
    links: [
      { label: 'altea.es', url: 'https://www.altea.es/portada' },
      { label: 'euroaltea.eu', url: 'https://euroaltea.eu/' }
    ]
  },
  karditsa: {
    name: 'Karditsa', country: 'Grecia', role: 'Socio',
    org: 'SVERONIS I. & SIA O.E. (E-School)',
    desc: 'Organización con amplia experiencia en e-learning y desarrollo de contenidos digitales. Contribuye al proyecto aportando soluciones tecnológicas y conocimiento en digitalización del patrimonio cultural.',
    color: '#059669',
    logo: 'assets/logos/karditsa.png',
    links: [
      { label: 'euprojects.gr', url: 'https://www.euprojects.gr/en/portfolio-items/2021-embracing-uncertainty-while-fighting-for-sustainable-development/' }
    ]
  }
};

const STEPS = [
  {
    icon: '🗺️',
    title: 'Identificación del patrimonio local',
    bullets: [
      'Reúne historias, leyendas y personajes relevantes.',
      'Implica a escuelas, asociaciones y mayores del lugar.'
    ],
    image: 'assets/images/steps/step-01.jpg'
  },
  {
    icon: '📂',
    title: 'Recopilación y curación de datos culturales',
    bullets: [
      'Clasifica textos, fotos, grabaciones y testimonios orales.'
    ],
    image: 'assets/images/steps/step-02.JPG'
  },
  {
    icon: '💻',
    title: 'Digitalización y estructuración de la información',
    bullets: [
      'Convierte los contenidos a formatos digitales (texto, imagen, audio).'
    ],
    image: 'assets/images/steps/step-03.jpg'
  },
  {
    icon: '🧠',
    title: 'Entrenamiento de modelos de IA',
    bullets: [
      'Usa herramientas accesibles (ChatGPT, DeepAI, Juji.io).'
    ],
    image: 'assets/images/steps/step-04.jpg'
  },
  {
    icon: '🎨',
    title: 'Diseño de la experiencia interactiva',
    bullets: [
      'Define la personalidad del avatar, tono y límites éticos.'
    ],
    image: 'assets/images/steps/step-05.jpg',
    portrait: true
  },
  {
    icon: '📍',
    title: 'Instalación y difusión local',
    bullets: [
      'Implementa rutas con QR, realidad aumentada o espacios interactivos.'
    ],
    image: 'assets/images/steps/step-06.jpg'
  },
  {
    icon: '📊',
    title: 'Evaluación y sostenibilidad',
    bullets: [
      'Mide impacto educativo, turístico y social.'
    ],
    image: 'assets/images/steps/step-07.jpg'
  }
];

// ─── RESET SLIDE ANIMATIONS ──────────────────────────────────────────────────
function resetSlideAnimations(slideEl) {
  const els = slideEl.querySelectorAll('.reveal');
  // 1. Unobserve + strip .visible so CSS resets all animated elements
  els.forEach(el => {
    revealObs.unobserve(el);
    el.classList.remove('visible');
  });
  // 2. Double rAF: first frame paints the reset state (bars at width:0, etc.),
  //    second frame re-observes so IntersectionObserver fires fresh animations.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      els.forEach(el => revealObs.observe(el));
    });
  });
}

// ─── GO SLIDE (smooth scroll by id) ─────────────────────────────────────────
function goSlide(id) {
  const el = document.getElementById(id);
  if (!el) return;
  resetSlideAnimations(el);
  el.scrollIntoView({ behavior: 'smooth' });
}

// ─── PROGRESS BAR + SCROLL ──────────────────────────────────────────────────
const bar     = document.getElementById('progress-bar');
const navbar  = document.getElementById('navbar');
const backtop = document.getElementById('backtop');

window.addEventListener('scroll', () => {
  const el  = document.documentElement;
  const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100;
  bar.style.width = pct + '%';
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  backtop.classList.toggle('visible', window.scrollY > 400);
});

// ─── REVEAL ON SCROLL ───────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// ─── ACTIVE NAV LINK (IntersectionObserver) ──────────────────────────────────
const slides    = document.querySelectorAll('.slide');
const navLinks  = document.querySelectorAll('.nav-slide-link');

const slideObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    }
  });
}, { threshold: 0.35 });

slides.forEach(s => slideObs.observe(s));

// ─── PARTNERS MODAL ─────────────────────────────────────────────────────────
function openPartner(id) {
  const p = PARTNERS[id];
  if (!p) return;

  // Read translatable fields from active language; fall back to PARTNERS data
  const lang = document.documentElement.getAttribute('data-lang') || 'es';
  const t = (translations[lang] && translations[lang].slide02 && translations[lang].slide02['popup_' + id]) || {};

  const logo = document.getElementById('m-logo');
  logo.src = p.logo; logo.alt = t.entity || p.org;
  document.getElementById('m-name').textContent           = t.title         || p.name;
  document.getElementById('m-role').textContent           = t.role          || p.role;
  document.getElementById('m-role').style.background      = p.color;
  document.getElementById('m-country-label').textContent  = t.country_label || 'País';
  document.getElementById('m-country').textContent        = t.country       || p.country;
  document.getElementById('m-org').textContent            = t.entity        || p.org;
  document.getElementById('m-org').style.color            = p.color;
  document.getElementById('m-desc').textContent           = t.text          || p.desc;
  document.getElementById('m-links').innerHTML            = p.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" class="modal-link">${l.label} ↗</a>`
  ).join('');
  const modal = document.getElementById('partner-modal');
  modal.dataset.partner = id;
  modal.classList.add('open');
}

function closePartner(e) {
  if (e.target === document.getElementById('partner-modal')) {
    document.getElementById('partner-modal').classList.remove('open');
  }
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('partner-modal').classList.remove('open');
    document.getElementById('celebration-modal').classList.remove('open');
  }
});

// ─── CHATBOT ────────────────────────────────────────────────────────────────
function askChat(q, a) {
  const msgs = document.getElementById('chat-messages');

  const uMsg = document.createElement('div');
  uMsg.className = 'msg user';
  uMsg.textContent = q;
  msgs.appendChild(uMsg);
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    const bMsg = document.createElement('div');
    bMsg.className = 'msg bot';
    bMsg.textContent = a;
    msgs.appendChild(bMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 600);
}

function askChatByIndex(n) {
  const lang = document.documentElement.getAttribute('data-lang') || 'es';
  const chat = translations[lang] && translations[lang].slide03 && translations[lang].slide03.chatbot;
  if (!chat) return;
  askChat(chat['q' + n], chat['a' + n]);
}

// ─── STEPS ──────────────────────────────────────────────────────────────────
let activeStep = -1;

function toggleStep(i) {
  const btns   = document.querySelectorAll('.tl-step');
  const detail = document.getElementById('step-detail');

  if (activeStep === i) return;

  btns.forEach(b => b.classList.remove('active'));
  btns[i].classList.add('active');

  // Esborra la imatge IMMEDIATAMENT, abans del fade-out,
  // perquè no siga visible mentre el panell s'esvaeix.
  const imgWrap = document.getElementById('sd-img-wrap');
  const img     = document.getElementById('sd-img');
  imgWrap.classList.remove('has-image', 'portrait');
  img.src = '';

  // Fade out, swap content, fade in
  detail.classList.remove('visible');
  setTimeout(() => {
    const s    = STEPS[i];
    const lang = document.documentElement.getAttribute('data-lang') || 'es';
    const t    = translations[lang] && translations[lang].slide04 && translations[lang].slide04.steps && translations[lang].slide04.steps[i];
    const prefix = (uiStrings[lang] && uiStrings[lang].s4 && uiStrings[lang].s4.stepPrefix) || 'Paso';
    const title   = (t && t.title)   || s.title;
    const bullets = (t && t.bullets) || s.bullets;

    document.getElementById('sd-icon').textContent  = s.icon;
    document.getElementById('sd-num').textContent   = prefix + ' ' + (i + 1);
    document.getElementById('sd-title').textContent = title;
    document.getElementById('sd-desc').innerHTML    = bullets.map(b => '<li>' + b + '</li>').join('');
    if (s.image) {
      img.src = s.image; img.alt = title;
      imgWrap.classList.add('has-image');
      imgWrap.classList.toggle('portrait', !!s.portrait);
    }
    detail.classList.add('visible');
  }, 180);

  activeStep = i;
}

// Precàrrega de totes les imatges dels passos per evitar flash en la primera visita
document.addEventListener('DOMContentLoaded', () => {
  STEPS.forEach(s => {
    if (s.image) { const p = new Image(); p.src = s.image; }
  });
  toggleStep(0);
});

// ─── ACCORDION ──────────────────────────────────────────────────────────────
function toggleAcc(btn) {
  const body   = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all open
  document.querySelectorAll('.accordion-btn.open').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.style.maxHeight = '0';
  });

  if (!isOpen) {
    btn.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

// ─── CHECKLIST ──────────────────────────────────────────────────────────────
function toggleCheck(el) {
  el.classList.toggle('done');
  const box = el.querySelector('.check-box');
  box.textContent = el.classList.contains('done') ? '✓' : '';

  const total = document.querySelectorAll('.check-item').length;
  const done  = document.querySelectorAll('.check-item.done').length;

  if (done === total) {
    openCelebration();
  }
}

// ─── CELEBRATION MODAL ──────────────────────────────────────────────────────
function openCelebration() {
  const lang = document.documentElement.getAttribute('data-lang') || 'es';
  const fp = translations[lang] && translations[lang].slide09 && translations[lang].slide09.final_popup;
  if (fp) {
    document.querySelector('.celebration-title').textContent = fp.title;
    document.querySelector('.celebration-sub').textContent   = fp.text;
    document.querySelector('.celebration-cta').textContent   = fp.button;
  }
  document.getElementById('celebration-modal').classList.add('open');
}

function closeCelebration(e) {
  // Close when clicking the backdrop overlay, or when called directly (button)
  if (!e || e.target === document.getElementById('celebration-modal')) {
    document.getElementById('celebration-modal').classList.remove('open');
  }
}
