/**
 * North Barber - Main Interactive JavaScript
 * Modern, Lightweight, Vanilla JS Engine
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------------------------
    // 1. Dynamic Year Update
    // ----------------------------------------------------------------------
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 2. Language Switcher & Persistence
    // ----------------------------------------------------------------------
    const langButtons = document.querySelectorAll(".lang-btn");
    let currentLang = localStorage.getItem("northbarber_lang") || "fi";

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem("northbarber_lang", lang);
        document.documentElement.setAttribute("lang", lang);

        // Update active class on buttons
        langButtons.forEach((btn) => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Translate innerText / innerHTML elements
        const translatableElements = document.querySelectorAll("[data-fi][data-en]");
        translatableElements.forEach((el) => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.innerHTML = text;
            }
        });

        // Translate Placeholders
        const placeholderElements = document.querySelectorAll("[data-fi-placeholder][data-en-placeholder]");
        placeholderElements.forEach((el) => {
            const placeholderText = el.getAttribute(`data-${lang}-placeholder`);
            if (placeholderText) {
                el.setAttribute("placeholder", placeholderText);
            }
        });
    };

    // Initial trigger
    updateLanguage(currentLang);

    // Click handler for language toggle buttons
    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const selectedLang = btn.getAttribute("data-lang");
            if (selectedLang !== currentLang) {
                updateLanguage(selectedLang);
            }
        });
    });

    // ----------------------------------------------------------------------
    // 3. Mobile Navigation Drawer Toggle
    // ----------------------------------------------------------------------
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleNav = () => {
        const isOpen = navMenu.classList.contains("active");
        if (isOpen) {
            navMenu.classList.remove("active");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        } else {
            navMenu.classList.add("active");
            navToggle.classList.add("active");
            navToggle.setAttribute("aria-expanded", "true");
            document.body.style.overflow = "hidden";
        }
    };

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", toggleNav);

        // Close menu when clicking navigation links
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (navMenu.classList.contains("active")) {
                    toggleNav();
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. Header Scroll State
    // ----------------------------------------------------------------------
    const header = document.getElementById("header");
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ----------------------------------------------------------------------
    // 5. Active Section Indicator in Nav
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll("section[id]");
    
    const highlightNavOnScroll = () => {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");
            const navItem = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

            if (navItem) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navItem.classList.add("active");
                } else {
                    navItem.classList.remove("active");
                }
            }
        });
    };

    window.addEventListener("scroll", highlightNavOnScroll, { passive: true });

    // ----------------------------------------------------------------------
    // 6. Smooth Scroll Offset Handling for Internal Links
    // ----------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 7. Scroll Reveal Animations (IntersectionObserver)
    // ----------------------------------------------------------------------
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach((el) => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach((el) => el.classList.add("reveal-visible"));
    }

    // ----------------------------------------------------------------------
    // 8. Contact Form Handling
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (!name || !email || !phone) {
                formFeedback.className = "form-feedback error";
                formFeedback.textContent = currentLang === "fi"
                    ? "Täytä kaikki pakolliset kentät."
                    : "Please fill in all required fields.";
                return;
            }

            // Simulate Successful Form Submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === "fi" ? "LÄHETETÄÄN..." : "SENDING...";

            setTimeout(() => {
                formFeedback.className = "form-feedback success";
                formFeedback.textContent = currentLang === "fi"
                    ? "Kiitos! Varauspyyntösi on lähetetty. Otamme sinuun yhteyttä mahdollisimman pian."
                    : "Thank you! Your appointment request has been submitted. We will contact you shortly.";
                
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;

                // Hide message after 6 seconds
                setTimeout(() => {
                    formFeedback.style.display = "none";
                    formFeedback.className = "form-feedback";
                }, 6000);
            }, 1000);
        });
    }
});
