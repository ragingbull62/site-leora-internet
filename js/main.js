document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 2. Navbar Shrink on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Smooth Scrolling for anchor links (fallback for Safari)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Get navbar height for offset
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Politique de confidentialité — section repliée, révélée par le bouton du footer
    const privacySection = document.getElementById('privacy');
    const privacyToggles = document.querySelectorAll('[data-privacy-toggle]');

    if (privacySection && privacyToggles.length) {
        const scrollToEl = (el, extra = 0) => {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - extra;
            window.scrollTo({ top, behavior: 'smooth' });
        };

        privacyToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                privacySection.classList.add('is-open');
                // laisse le temps au navigateur d'afficher la section avant de calculer la position
                requestAnimationFrame(() => scrollToEl(privacySection));
            });
        });

        const closeBtn = privacySection.querySelector('[data-privacy-close]');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                privacySection.classList.remove('is-open');
                const contact = document.getElementById('contact');
                if (contact) scrollToEl(contact);
            });
        }
    }

    // 5. Form Submit Handler (AJAX désactivé temporairement pour l'activation)
    const form = document.getElementById('contactForm');
    /*
    if (form) {
        form.addEventListener('submit', (e) => {
            // ... interceptor désactivé ...
        });
    }
    */
});
