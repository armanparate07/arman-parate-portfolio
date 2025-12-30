// GSAP + Lenis Setup
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Project Data (for dynamic injection)
const projectCardsHTML = `
<!-- Employee Management -->
<a href="https://github.com/armanparate07/employee-management-system" target="_blank" class="project-card grid md:grid-cols-12 items-center no-underline" data-category="java">
  <div class="md:col-span-7 aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
    <img src="https://i.ibb.co/C39GGGtv/20250622-1244-Employee-Management-System-simple-compose-01jyb7q40nf6mv6ymk5qf571m2.png"
         class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
  </div>
  <div class="md:col-span-4 md:col-start-9 mt-10">
    <span class="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Java / SQL / Swing</span>
    <h3 class="text-4xl serif mt-2 hover:underline">Employee Management System</h3>
    <p class="mt-4 text-zinc-500 leading-relaxed">Complete desktop application for managing employee records with database integration and user-friendly interface.</p>
  </div>
</a>

<!-- Electricity Billing -->
<a href="https://github.com/armanparate07/electricity-billing-system" target="_blank" class="project-card grid md:grid-cols-12 items-center no-underline" data-category="java">
  <div class="md:col-span-4 mt-10 order-2 md:order-1">
    <span class="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Java / Swing / MySQL</span>
    <h3 class="text-4xl serif mt-2 hover:underline">Electricity Billing System</h3>
    <p class="mt-4 text-zinc-500 leading-relaxed">Automated billing system for electricity consumers with calculation, invoice generation, and payment tracking.</p>
  </div>
  <div class="md:col-span-7 md:col-start-6 aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-2xl order-1 md:order-2">
    <img src="https://i.ibb.co/zVbQcSHf/20250622-1241-Electricity-Billing-System-simple-compose-01jyb7jz6fe8mbn7zcqhbv2gx2.png"
         class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
  </div>
</a>

<!-- Vehicle Detection -->
<a href="https://github.com/armanparate07/vehicle-detection" target="_blank" class="project-card grid md:grid-cols-12 items-center no-underline" data-category="python">
  <div class="md:col-span-7 aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
    <img src="https://i.ibb.co/rGXcVkys/20250622-1216-Vehicle-Detection-Showcase-simple-compose-01jyb638agf1pbhf2vq79w0f8s.png"
         class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
  </div>
  <div class="md:col-span-4 md:col-start-9 mt-10">
    <span class="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Python / YOLOv5 / AI</span>
    <h3 class="text-4xl serif mt-2 hover:underline">Vehicle Detection System</h3>
    <p class="mt-4 text-zinc-500 leading-relaxed">Computer vision application using YOLOv5 for real-time vehicle detection and classification from video streams.</p>
  </div>
</a>

<!-- Virtual Desktop Assistant -->
<a href="https://github.com/armanparate07/virtual-desktop-assistant" target="_blank" class="project-card grid md:grid-cols-12 items-center no-underline" data-category="python">
  <div class="md:col-span-4 mt-10 order-2 md:order-1">
    <span class="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Python / NLP / Automation</span>
    <h3 class="text-4xl serif mt-2 hover:underline">Virtual Desktop Assistant</h3>
    <p class="mt-4 text-zinc-500 leading-relaxed">Voice-controlled assistant capable of performing desktop tasks, web searches, and system operations using natural language.</p>
  </div>
  <div class="md:col-span-7 md:col-start-6 aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-2xl order-1 md:order-2">
    <img src="https://i.ibb.co/Lzh7hH8M/20250622-1254-Virtual-Robot-Assistant-simple-compose-01jyb88w3nfy288bk7ecpxnqwk.png"
         class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
  </div>
</a>

<!-- Netflix Dashboard -->
<a href="https://github.com/armanparate07/netflix-dashboard" target="_blank" class="project-card grid md:grid-cols-12 items-center no-underline" data-category="data">
  <div class="md:col-span-7 aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-2xl">
    <img src="https://i.ibb.co/ds6ZPm23/20250622-1318-Netflix-Dashboard-Thumbnail-simple-compose-01jyb9pjm5feftjnd4shmw8vcs.png"
         class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
  </div>
  <div class="md:col-span-4 md:col-start-9 mt-10">
    <span class="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Data Analysis / Visualization</span>
    <h3 class="text-4xl serif mt-2 hover:underline">Netflix Insights Dashboard</h3>
    <p class="mt-4 text-zinc-500 leading-relaxed">Interactive dashboard analyzing Netflix content trends, ratings, and viewing patterns with visual insights.</p>
  </div>
</a>

<!-- More Projects -->
<div class="project-card text-center py-20 bg-zinc-900/10 border border-white/5 rounded-2xl" data-category="more">
  <h4 class="text-2xl serif mb-6">Explore my wider range of development work on GitHub</h4>
  <p class="text-zinc-500 mb-10 max-w-2xl mx-auto">From web applications to machine learning projects, my GitHub repository showcases diverse technical skills and problem-solving approaches.</p>
  <a href="https://github.com/armanparate07" target="_blank"
     class="px-10 py-5 border border-zinc-800 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-flex items-center gap-4">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
    View All GitHub Projects
  </a>
</div>
`;

// Certificates Data
const certs = [
  { title: "AWS Cloud Technical Essentials", link: "https://drive.google.com/file/d/1n2czhRZV_fRPbTnnYt0EzssxftgXTyna/view", issuer: "Amazon Web Services" },
  { title: "Ethical Hacking", link: "https://drive.google.com/file/d/1kP32jYP3pCGF76bzgxfAhP-3QXEgFloq/view", issuer: "Cybersecurity Institute" },
  { title: "Java Programming Fundamental", link: "https://drive.google.com/file/d/18SJiDfqluIYOevrs2QSXEMBxR7OH2XdE/view", issuer: "Oracle Certified" },
  { title: "Foundation of User Experience", link: "https://drive.google.com/file/d/1j_z7s7NFCI73UBkSWekRy2TCTVLJx9v3/view", issuer: "Google UX Design" }
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Inject Projects
  const projectGrid = document.getElementById('project-grid');
  if (projectGrid) projectGrid.innerHTML = projectCardsHTML;

  // Inject Certificates
  const certGrid = document.getElementById('cert-grid');
  if (certGrid) {
    certs.forEach(c => {
      certGrid.insertAdjacentHTML('beforeend', `
        <div class="cert-card p-10 bg-zinc-900 border border-white/5 flex flex-col justify-between h-[250px] rounded-xl hover:border-blue-500/30 transition-all">
          <div>
            <h4 class="text-xl serif mb-4">${c.title}</h4>
            <p class="text-sm text-zinc-500">${c.issuer}</p>
          </div>
          <a href="${c.link}" target="_blank"
             class="text-[10px] uppercase tracking-widest border-b border-blue-600 pb-1 w-fit hover:text-blue-500 transition-colors">
            View Certificate →
          </a>
        </div>
      `);
    });
  }

  // GSAP Animations
  gsap.from(".reveal-text", { 
    y: 100, 
    opacity: 0, 
    duration: 1.5, 
    ease: "power4.out", 
    delay: 0.5 
  });

  // Custom Cursor
  window.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", { 
      x: e.clientX - 8, 
      y: e.clientY - 8, 
      duration: 0.2 
    });
  });

  // Theme Toggle
  let isDark = true;
  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.toggle('light-mode', !isDark);
    document.getElementById('toggle-icon').innerText = isDark ? "Light" : "Dark";
    
    const tl = gsap.timeline();
    if (isDark) {
      tl.to(".theme-bg-a", { backgroundColor: "#0d0d0d", color: "#e5e5e5", duration: 1 })
        .to(".theme-bg-b", { backgroundColor: "#1a1a1a", duration: 1 }, 0)
        .to(".card-ui, .cert-card", {
          backgroundColor: "#18181b",
          color: "#e5e5e5",
          borderColor: "rgba(255,255,255,0.05)",
          duration: 1
        }, 0);
    } else {
      tl.to(".card-ui, .cert-card", {
        backgroundColor: "#ffffff",
        color: "#000000",
        borderColor: "rgba(0,0,0,0.15)",
        duration: 1
      }, 0);
    }
    tl.to("#toggle-circle", { top: isDark ? "100%" : "0%", duration: 0.5 }, 0);
  });

  // Project Filtering
  window.filterProjects = function(cat, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.project-card').forEach(card => {
      if (card.dataset.category === cat) {
        gsap.to(card, { opacity: 1, display: 'grid', scale: 1, duration: 0.6, ease: "power2.out" });
      } else {
        gsap.to(card, { opacity: 0, display: 'none', scale: 0.95, duration: 0.6, ease: "power2.in" });
      }
    });
    ScrollTrigger.refresh();
  };

  // Initialize: show only Java projects
  document.querySelectorAll('.project-card').forEach(card => {
    if (card.dataset.category === 'java') {
      gsap.set(card, { opacity: 1, display: 'grid', scale: 1 });
    } else {
      gsap.set(card, { opacity: 0, display: 'none', scale: 0.95 });
    }
  });

  // Scroll animations
  gsap.utils.toArray('.card-ui').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  // Nav active state
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 300)) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('text-blue-500');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('text-blue-500');
      }
    });
  });
});