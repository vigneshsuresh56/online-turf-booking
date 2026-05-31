// ── NAVIGATION ──
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('open');
}

// ── BOOKING ──
function bookTurf(event) {
  event.preventDefault();

  const name  = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
  const turf  = document.getElementById('turf').value;
  const date  = document.getElementById('date').value;
  const time  = document.getElementById('time').value;
  const sport = document.querySelector('input[name="sport"]:checked')?.value || 'Football';

  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const form    = document.getElementById('bookingForm');
  const summary = document.getElementById('bookingSummary');
  const details = document.getElementById('summaryDetails');

  if (form) form.parentElement.style.display = 'none';

  if (summary) {
    summary.style.display = 'block';
    details.innerHTML = `
      <strong>Name:</strong> ${name}<br/>
      ${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ''}
      <strong>Turf:</strong> ${turf}<br/>
      <strong>Sport:</strong> ${sport}<br/>
      <strong>Date:</strong> ${formattedDate}<br/>
      <strong>Time:</strong> ${time}<br/>
      <strong>Status:</strong> <span style="color:var(--accent);font-weight:700">Confirmed ✓</span>
    `;
  }
}

// ── CONTACT ──
function sendContact(event) {
  event.preventDefault();
  const msg = document.getElementById('contactMsg');
  if (msg) {
    msg.textContent = '✓ Message sent! We\'ll get back to you within 24 hours.';
    event.target.reset();
  }
}

// ── AUTH ──
function handleLogin(event) {
  event.preventDefault();
  alert('Login successful! (Demo)');
  window.location.href = 'index.html';
}

function handleRegister(event) {
  event.preventDefault();
  alert('Account created! (Demo)');
  window.location.href = 'login.html';
}

// ── TURF FILTER ──
function filterTurfs(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.turf-card').forEach(card => {
    if (type === 'all' || card.dataset.type.includes(type)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// ── SET MIN DATE (today) ──
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }
});