// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ===========================
// MOBILE HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ===========================
// PORTFOLIO FILTER — FIXED
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const pfCards = document.querySelectorAll('.pf-card');
const noResults = document.getElementById('noResults');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      // Active button update
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      pfCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

// ===========================
// CONTACT FORM VALIDATION
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMsg = document.getElementById('formSuccess');
    const errorMsg = document.getElementById('formError');

    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';

    if (!name || !email || !message) {
      if (errorMsg) {
        errorMsg.textContent = 'Please fill in all required fields.';
        errorMsg.style.display = 'flex';
      }
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (errorMsg) {
        errorMsg.textContent = 'Please enter a valid email address.';
        errorMsg.style.display = 'flex';
      }
      return;
    }

    if (successMsg) successMsg.style.display = 'flex';
    contactForm.reset();
  });
}

// ===========================
// BOOKING FORM VALIDATION
// ===========================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const successMsg = document.getElementById('bookingSuccess');
    const errorMsg = document.getElementById('bookingError');

    const name = document.getElementById('bName').value.trim();
    const email = document.getElementById('bEmail').value.trim();
    const date = document.getElementById('bDate').value;
    const time = document.getElementById('bTime').value;

    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';

    if (!name || !email || !date || !time) {
      if (errorMsg) {
        errorMsg.textContent = 'Please fill in all required fields.';
        errorMsg.style.display = 'flex';
      }
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (errorMsg) {
        errorMsg.textContent = 'Please enter a valid email address.';
        errorMsg.style.display = 'flex';
      }
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      if (errorMsg) {
        errorMsg.textContent = 'Please select a future date.';
        errorMsg.style.display = 'flex';
      }
      return;
    }

    if (successMsg) successMsg.style.display = 'flex';
    bookingForm.reset();
  });
}
// ===========================
// FAQ ACCORDION — working
// ===========================
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const allItems = document.querySelectorAll('.faq-item');

  allItems.forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('open');
    }
  });

  faqItem.classList.toggle('open');
}

// ===========================
// MEETING TYPE SELECTOR
// ===========================
function selectMeeting(element, type) {
  document.querySelectorAll('.meeting-type-card').forEach(card => {
    card.classList.remove('active-meeting');
  });
  element.classList.add('active-meeting');

  const meetingTypeInput = document.getElementById('meetingType');
  if (meetingTypeInput) {
    meetingTypeInput.value = type;
  }
}

// Set minimum date to today for booking
const bDateInput = document.getElementById('bDate');
if (bDateInput) {
  const today = new Date().toISOString().split('T')[0];
  bDateInput.setAttribute('min', today);
}