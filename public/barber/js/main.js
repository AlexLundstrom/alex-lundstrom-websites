document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Header Scroll Performance
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Highlight Active Nav Link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // Check if current path matches link href attributes
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Dynamic Scroll Animations (Intersection Observer)
  const fadeElems = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElems.forEach(elem => {
      observer.observe(elem);
    });
  } else {
    // Fallback if browser lacks support
    fadeElems.forEach(elem => elem.classList.add('visible'));
  }

  // Dynamic Menu Generator Support
  // Used in menu.html to load and parse static object
  initMenuRenderer();
});

// Menu Data Store matching config requirements
const menuData = {
  categories: [
    {
      name: "Haircuts & Styling",
      description: "Tailored hair designs executed with classic tools & modern skills.",
      items: [
        {
          name: "Classic Haircut",
          description: "Full service haircut finished with hot towel skin shave outline and style.",
          price: 35,
          tags: ["Popular", "Signature"]
        },
        {
          name: "Buzz Cut",
          description: "One-length premium clipper trim all-over with outline shaving.",
          price: 22,
          tags: ["Essential"]
        },
        {
          name: "Skin Fade",
          description: "High-precision fade starting down to complete skin-level.",
          price: 42,
          tags: ["Expert"]
        },
        {
          name: "Long Hair Styling",
          description: "Expert scissors-only cut customized for medium-to-long profiles.",
          price: 48,
          tags: []
        }
      ]
    },
    {
      name: "Beard Grooming",
      description: "Sharp grooming designed to complete the contemporary face silhouette.",
      items: [
        {
          name: "Beard Trim & Sculpting",
          description: "Shaping with clippers and scissors including premium beard oil wash.",
          price: 25,
          tags: ["Popular"]
        },
        {
          name: "Royal Razor Beard Trim",
          description: "Beard trim styled and shaped using a traditional open razor and steam towel treatment.",
          price: 38,
          tags: ["Luxury"]
        },
        {
          name: "Mustache Grooming",
          description: "Clean detail line cleanup and mustache styling using organic wax.",
          price: 15,
          tags: []
        }
      ]
    },
    {
      name: "Combo Experiences",
      description: "All-in-one luxury treatments curated for complete renewal.",
      items: [
        {
          name: "The Barbery Signature Combo",
          description: "Our signature hair slice, precise beard sculpting, completed with a scalp massage.",
          price: 55,
          tags: ["Best Value", "Premium"]
        },
        {
          name: "The Royal Treatment",
          description: "Skin fade, luxury open-razor hot shave, followed with deep charcoal face peel mask.",
          price: 80,
          tags: ["Elite"]
        }
      ]
    }
  ]
};

function initMenuRenderer() {
  const container = document.getElementById('dynamic-menu-target');
  if (!container) return; // Only process if dynamic menu render target exists in DOM

  // Preserve any static content already rendered in the menu container.
  if (container.querySelector('.menu-category')) return;

  container.innerHTML = ''; // Clean placeholder

  menuData.categories.forEach(category => {
    const sectionHTML = `
      <div class="menu-category fade-in">
        <h2 class="menu-category-title">${category.name}</h2>
        <p class="menu-category-desc">${category.description}</p>
        <div class="menu-items-list">
          ${category.items.map(item => `
            <div class="menu-item">
              <div class="menu-item-header">
                <h3 class="menu-item-name">${item.name}</h3>
                <span class="menu-item-price">${item.price} €</span>
              </div>
              <p class="menu-item-desc">${item.description}</p>
              ${item.tags && item.tags.length > 0 ? `
                <div class="menu-item-tags">
                  ${item.tags.map(tag => `<span class="menu-tag">${tag}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', sectionHTML);
  });
}
