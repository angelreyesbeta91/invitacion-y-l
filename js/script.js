/* =====================================================
   1. CONFIGURACIÓN — EDITA SOLO ESTA SECCIÓN
   ===================================================== */
const weddingData = {
  groom: "Luis Enrique",
  bride: "Yesica",
  date: "2026-12-20T16:30:00",           // AAAA-MM-DDTHH:MM:SS
  subtitle: "Sé parte de nuestra historia",
  playText: "Te recomendamos recorrerla hasta el final antes de abrir los enlaces, así la música te acompaña durante toda la experiencia.",

  // Ceremonia y recepción en un solo lugar
  venue: {
    time: "4:30 PM",
    place: "Restaurante Al Gusto del Pacífico",
    address: "Calle 30 entre carrera primera y tercera, Quibdó",
    mapUrl: "https://www.google.com/maps?q=5.694204,-76.660126"
  },

  rsvp: {
    text: "¿Nos acompañas? Confirma tu asistencia hasta el 20 de noviembre de 2026.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc3qQAUV_u-RVrZzfq9GB7C5m9oHe4_ucKrhpj7QQozrliAeg/viewform"   // Formulario de Google
  },

  // Aviso importante para los invitados
  notice: { text: "Adoramos a sus hijos, pero creemos que necesitan una noche libre.", strong: "Solo adultos, por favor" },

  // Colores reservados (los invitados deben evitarlos). Cambia nombres y colores aquí.
  reserved: {
    title: "Colores reservados",
    text: "Te pedimos evitar estos colores en tu atuendo.",
    items: [{ name: "Blanco", color: "#FFFFFF" }, { name: "Verde", color: "#6F8F6A" }, { name: "Beige", color: "#D8C7A8" }]
  },

  verse: { text: "Por encima de todo nos vestimos de amor, que es el vínculo perfecto.", ref: "Colosenses 3:14" },

  gifts: {
    show: true,                           // false = oculta la sección
    text: "Estar contigo ese día es lo más valioso para nosotros. Si quieres acompañarnos con un detalle, te compartimos estas opciones.",
    // Un grupo por persona: se muestran en pestañas para que no se sature.
    groups: [
      { name: "Yesica", items: [
        { label: "Cuenta", value: "53692413811" },
        { label: "Llave Bre-B", value: "@yesica2748" },
        { label: "Nequi", value: "3214398240" }
      ]},
      { name: "Luis Enrique", items: [
        { label: "Bancolombia · Ahorros", value: "53681415811" },
        { label: "Llave Bre-B", value: "@heredia19202" }
      ]}
    ]
  }
};

const weddingImages = {
  portrait: "assets/images/foto-3.jpeg",
  venue: "assets/images/lugar.jpeg",          // foto del lugar   // foto del arco en la portada
  gallery: [                                // pos = qué parte de la foto se ve en el cuadrado
    { src: "assets/images/foto-1.jpeg", pos: "50% 45%" },
    { src: "assets/images/foto-2.jpeg", pos: "47% 50%" },
    { src: "assets/images/foto-4.jpeg", pos: "50% 25%" },
    { src: "assets/images/foto-5.jpeg", pos: "55% 60%" }
  ],
  leavesTop: "assets/images/hojas-arriba.webp",
  leavesBottom: "assets/images/hojas-abajo.webp"
};
// CANCIÓN: copia tu MP3 a la carpeta assets/music/ y escribe aquí su ruta exacta.
// Suena al abrir el sobre; el invitado puede pausarla con el botón flotante (esquina inferior derecha).
const musicUrl = "assets/music/campanas-de-amor.mp3";

/* =====================================================
   2. LÓGICA — normalmente no necesitas tocar nada aquí
   ===================================================== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const when = new Date(weddingData.date);
weddingData.dateShort = [when.getDate(), when.getMonth() + 1, when.getFullYear()].map(n => String(n).padStart(2, "0")).join(" . ");
weddingData.initials = `${weddingData.groom[0]} & ${weddingData.bride[0]}`;
const get = p => p.split(".").reduce((o, k) => (o ? o[k] : ""), weddingData);

$$("[data-bind]").forEach(el => (el.textContent = get(el.dataset.bind)));
$$("[data-href]").forEach(el => (el.href = get(el.dataset.href)));
document.title = `${weddingData.groom} y ${weddingData.bride} · Nos casamos`;
$$("[data-img]").forEach(el => (el.src = weddingImages[el.dataset.img]));

// Iconos de línea
const ICONS = {
  church: '<path d="M24 3v9M20 7h8M24 12 9 24v18h30V24zM18 42V33a6 6 0 0 1 12 0v9M4 42h40"/>',
  glasses: '<path d="M9 6l12 4-4 18a5 5 0 0 1-9-3zM39 6L27 10l4 18a5 5 0 0 0 9-3zM14 34v9M9 43h10M34 34v9M29 43h10"/>',
  camera: '<rect x="5" y="14" width="38" height="27" rx="4"/><circle cx="24" cy="27" r="8"/><path d="M17 14l3-5h8l3 5"/>',
  gift: '<rect x="8" y="20" width="32" height="22"/><path d="M5 14h38v6H5zM24 14v28M24 14c-7-9-13-1-6 0M24 14c7-9 13-1 6 0"/>',
  music: '<path d="M18 36V10l20-4v26"/><circle cx="12" cy="36" r="6"/><circle cx="32" cy="32" r="6"/>',
  moon: '<path d="M36 30A16 16 0 0 1 18 8a16 16 0 1 0 18 22z"/><path d="M34 8h6l-6 6h6"/>',
  heart: '<path d="M12 20S3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12z" transform="translate(24 24.5) scale(1.6) translate(-12 -11.5)"/>',
  play: '<circle cx="24" cy="24" r="20" stroke-width="3"/><path d="M19 15l14 9-14 9z" fill="currentColor"/>'
};
const icon = n => `<svg viewBox="0 0 48 48" aria-hidden="true">${ICONS[n] || ""}</svg>`;
$$("[data-icon]").forEach(el => (el.innerHTML = icon(el.dataset.icon)));

// Opcionales y botones
if (!weddingData.gifts.show) $("#regalos").remove();
// Colores reservados
$("#colors").innerHTML = weddingData.reserved.items.map(c => `<li><i style="background:${c.color}"></i><span class="caps small">${c.name}</span></li>`).join("");

// Lluvia de sobres: pestañas por persona + botón copiar
const gg = weddingData.gifts.groups;
$("#giftInfo").innerHTML =
  `<div class="tabs" role="tablist">${gg.map((g, i) => `<button role="tab" class="tab${i ? "" : " on"}" data-t="${i}" aria-selected="${!i}">${g.name}</button>`).join("")}</div>` +
  gg.map((g, i) => `<ul class="gift-list" data-p="${i}"${i ? " hidden" : ""}>${g.items.map(x => `<li><span>${x.label}</span><b>${x.value}</b><button class="copy" data-v="${x.value}">Copiar</button></li>`).join("")}</ul>`).join("");
$("#giftInfo").addEventListener("click", e => {
  const t = e.target.closest(".tab");
  if (t) {
    $$(".tab").forEach(b => { b.classList.toggle("on", b === t); b.setAttribute("aria-selected", b === t); });
    $$(".gift-list").forEach(l => (l.hidden = l.dataset.p !== t.dataset.t));
    return;
  }
  const b = e.target.closest(".copy"); if (!b) return;
  navigator.clipboard?.writeText(b.dataset.v).then(() => { b.textContent = "¡Copiado!"; setTimeout(() => (b.textContent = "Copiar"), 1800); });
});
$("#giftBtn")?.addEventListener("click", e => {
  const i = $("#giftInfo"), open = i.hidden;
  i.hidden = !open; e.target.setAttribute("aria-expanded", open);
});

// Hojas en acuarela (SVG con filtro de papel/acuarela) o tu propia imagen
let gid = 0;
function watercolor() {
  const id = "wc" + gid++;
  let s = 11 + gid * 7;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const pal = ["#4c6b3f", "#7c9a5d", "#9fb592", "#6f7d76", "#8d9a95", "#2f5a4a", "#c3d3bb", "#a9bda4", "#5b7a5a"];
  const leaf = (x, y, a, L, c) => `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a.toFixed(0)})"><path d="M0 0C${L * .25} ${-L * .2} ${L * .7} ${-L * .22} ${L} 0C${L * .7} ${L * .22} ${L * .25} ${L * .2} 0 0Z" fill="${c}" opacity=".8"/><path d="M2 0H${L * .9}" stroke="#fff" stroke-opacity=".4" stroke-width="1"/></g>`;
  let g = "";
  const N = 11;
  for (let i = 0; i < N; i++) {
    const x = (i + .5) * 1000 / N + (rnd() - .5) * 50, len = 120 + rnd() * 150, sw = (rnd() - .5) * 60, n = 6 + Math.floor(rnd() * 5);
    let b = `<path d="M${x} -5Q${x + sw} ${len / 2} ${x + sw * 1.6} ${len}" stroke="#8b7b55" stroke-width="1.5" fill="none" opacity=".7"/>`;
    for (let k = 1; k <= n; k++) {
      const t = k / n, q = 1 - t;
      const px = q * q * x + 2 * q * t * (x + sw) + t * t * (x + sw * 1.6), py = q * q * -5 + q * t * len + t * t * len;
      const L = (38 + rnd() * 38) * (1 - t * .3), round = i % 3 === 0;
      const sp = 30 + rnd() * 30;
      b += leaf(px, py, 90 + sp, L, pal[Math.floor(rnd() * 9)]) + leaf(px, py, 90 - sp, L, pal[Math.floor(rnd() * 9)]);
      if (round && k > n - 3) b += `<ellipse cx="${px + (rnd() - .5) * 40}" cy="${py + 16}" rx="22" ry="20" fill="${pal[6 + k % 3]}" opacity=".7"/>`;
    }
    g += `<g class="sway" style="animation-delay:-${(rnd() * 8).toFixed(1)}s">${b}</g>`;
  }
  return `<svg viewBox="0 0 1000 300" preserveAspectRatio="xMidYMin slice" aria-hidden="true"><defs><filter id="${id}" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence baseFrequency=".035" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="9"/><feGaussianBlur stdDeviation=".5"/></filter></defs><g filter="url(#${id})">${g}</g></svg>`;
}
$$("[data-leaves]").forEach(el => {
  const img = new Image();
  img.alt = ""; img.decoding = "async";
  img.src = el.classList.contains("flip") ? weddingImages.leavesBottom : weddingImages.leavesTop;
  img.onerror = () => (el.innerHTML = watercolor());   // si falta la imagen, se dibujan hojas
  el.appendChild(img);
});

// Countdown
const pad = n => String(n).padStart(2, "0");
function tick() {
  const s = Math.floor(Math.max(0, when - Date.now()) / 1000);
  $("#cd-d").textContent = pad(Math.floor(s / 86400));
  $("#cd-h").textContent = pad(Math.floor(s % 86400 / 3600));
  $("#cd-m").textContent = pad(Math.floor(s % 3600 / 60));
  $("#cd-s").textContent = pad(s % 60);
}
tick(); setInterval(tick, 1000);

// Galería + visor
const gal = weddingImages.gallery.map(g => g.src), lb = $("#lb"), lbImg = $("#lbImg");
let cur = 0;
$("#gallery").innerHTML = weddingImages.gallery.map((g, i) => `<button class="reveal" data-i="${i}" aria-label="Ampliar foto ${i + 1}"><img src="${g.src}" style="object-position:${g.pos}" alt="Foto de la pareja ${i + 1}" loading="lazy" onerror="this.style.visibility='hidden'"></button>`).join("");
const show = i => { cur = (i + gal.length) % gal.length; lbImg.src = gal[cur]; lbImg.alt = `Foto de la pareja ${cur + 1}`; };
$("#gallery").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { show(+b.dataset.i); lb.hidden = false; } });
lb.addEventListener("click", e => {
  if (e.target === lb || e.target.matches(".lb-x")) lb.hidden = true;
  if (e.target.matches(".prev")) show(cur - 1);
  if (e.target.matches(".next")) show(cur + 1);
});
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") lb.hidden = true;
  if (e.key === "ArrowLeft") show(cur - 1);
  if (e.key === "ArrowRight") show(cur + 1);
});

// Aparición al hacer scroll + volver arriba
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));
const toTop = $("#toTop");
addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 600), { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0 }));

// Música (solo suena tras un clic del invitado)
const audio = new Audio(musicUrl), mBtn = $("#music"), pBtn = $("#playBtn");
audio.loop = true; mBtn.hidden = false;
audio.addEventListener("error", () => { mBtn.hidden = true; pBtn.closest(".play").hidden = true; });
function setMusic(play) {
  play ? audio.play().catch(() => {}) : audio.pause();
  mBtn.classList.toggle("on", play);
  mBtn.textContent = play ? "❚❚" : "♪";   // pausa / música
  mBtn.setAttribute("aria-label", play ? "Pausar música" : "Reproducir música");
}
const toggleMusic = () => setMusic(audio.paused);
mBtn.addEventListener("click", toggleMusic);
pBtn.addEventListener("click", toggleMusic);

// Sobre de invitación: al abrirlo se muestra la invitación y suena la música
const env = $("#env");
$("#envBtn").addEventListener("click", () => {
  if (env.classList.contains("open")) return;
  env.classList.add("open");
  setMusic(true);
  setTimeout(() => { env.classList.add("gone"); document.body.classList.remove("locked"); scrollTo(0, 0); }, 2300);
  setTimeout(() => env.remove(), 3500);
});

// Los nombres siempre en una sola línea (se reduce la letra si hace falta)
function fit() {
  $$(".names, .fit").forEach(el => {
    el.style.fontSize = "";
    let fs = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth + 1 && fs > 18) { fs -= 2; el.style.fontSize = fs + "px"; }
  });
}
document.fonts.ready.then(fit);
addEventListener("resize", fit);
