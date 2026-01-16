// SageWorks AI - Main JavaScript
// Handles animations, interactions, and dynamic content

(function() {
  'use strict';

  // Update year in footer
  const updateYear = () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  };

  // Intersection Observer for fade-in animations
  const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  };

  // Smooth scroll for anchor links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerOffset = 80; // Height of sticky header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // Active nav link highlighting
  const initActiveNavLinks = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNav = () => {
      let scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
  };

  // Parallax effect for background orbs
  const initParallax = () => {
    const bgCanvas = document.querySelector('.bg-canvas');
    
    if (!bgCanvas) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      bgCanvas.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  };

  // Stats counter animation
  const initStatsCounter = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
      const target = parseInt(element.textContent);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target + '+';
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          animateCounter(entry.target);
          entry.target.dataset.animated = 'true';
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
  };

  // Card hover effect enhancement
  const initCardEffects = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.setProperty('--hover-scale', '1.02');
      });

      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  };

  // Mobile menu toggle (if needed later)
  const initMobileMenu = () => {
    // Placeholder for future mobile menu functionality
    const nav = document.querySelector('.nav-links');
    
    // Check if viewport is mobile
    const isMobile = () => window.innerWidth < 768;
    
    if (isMobile() && nav) {
      // Future: Add hamburger menu logic here
      console.log('Mobile menu ready for implementation');
    }
  };

  // Keyboard navigation enhancement
  const initKeyboardNav = () => {
    document.addEventListener('keydown', (e) => {
      // ESC key to close modals (future feature)
      if (e.key === 'Escape') {
        // Close any open modals
      }
      
      // Arrow keys for section navigation (optional)
      if (e.key === 'ArrowDown' && e.ctrlKey) {
        // Navigate to next section
      }
    });
  };

  // External link security
  const initExternalLinks = () => {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      // Add rel attributes for security
      if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  };

  // Loading state management
  const initLoadingState = () => {
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      
      // Trigger any load-dependent animations
      setTimeout(() => {
        document.querySelectorAll('.hero > *').forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }, 100);
    });
  };

  // Performance optimization: Debounce scroll events
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Add scroll direction detection
  let lastScrollTop = 0;
  const initScrollDirection = () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', debounce(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header?.classList.add('header-hidden');
      } else {
        // Scrolling up
        header?.classList.remove('header-hidden');
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 100));
  };

  // Console easter egg
  const initEasterEgg = () => {
    console.log('%c🧠 SageWorks AI', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
    console.log('%cTemporal & Network-Native Systems', 'font-size: 14px; color: #00d4ff;');
    console.log('%cBuilt by Peace Thabiwa', 'font-size: 12px; color: #a0a0b8;');
    console.log('%c\nInterested in the code? Check out: https://github.com/PEACEBINFLOW', 'font-size: 11px;');
  };

  // Initialize all features when DOM is ready
  const init = () => {
    updateYear();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavLinks();
    initParallax();
    initStatsCounter();
    initCardEffects();
    initMobileMenu();
    initKeyboardNav();
    initExternalLinks();
    initLoadingState();
    initScrollDirection();
    initEasterEgg();

    console.log('✅ SageWorks AI website initialized');
  };

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
