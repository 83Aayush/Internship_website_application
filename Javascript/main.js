// ============================================================
// ARTIUS INTERIOR v2 — main.js
// ============================================================

// ---- NAVBAR ----
const navbar  = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ---- ACTIVE NAV LINK ----
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? '#ffffff'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');
const submitBtn   = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!fname || !email) {
    alert('Please fill in your name and email address.');
    return;
  }

  const origText = submitBtn.querySelector('span').textContent;
  submitBtn.querySelector('span').textContent = 'Sending...';
  submitBtn.disabled = true;
  formSuccess.style.display = 'none';
  formError.style.display = 'none';

  try {
    const formData = new FormData(contactForm);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });
    const result = await response.json();

    if (result.success) {
      formSuccess.style.display = 'flex';
      contactForm.reset();
      setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
    } else {
      formError.style.display = 'flex';
    }
  } catch (err) {
    formError.style.display = 'flex';
  } finally {
    submitBtn.querySelector('span').textContent = origText;
    submitBtn.disabled = false;
  }
});

// ---- PRODUCT CARD TILT (subtle) ----
document.querySelectorAll('.prod-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 6;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 6;
    card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
