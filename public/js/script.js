document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuToggle = document.createElement('div');
  mobileMenuToggle.className = 'mobile-menu-toggle';
  mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  
  const header = document.querySelector('header');
  header.appendChild(mobileMenuToggle);
  
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  
  document.body.appendChild(overlay);
  
  function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }
  
  mobileMenuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  // Animation for elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        const animationClass = element.classList[1];
        element.style.opacity = '1';
        element.classList.add(animationClass);
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
  
  // Smooth hover effects for profile image
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('mouseenter', () => {
      gsap.to('.image-hover-effect', { 
        opacity: 1,
        duration: 0.3
      });
    });
    
    profileImage.addEventListener('mouseleave', () => {
      gsap.to('.image-hover-effect', { 
        opacity: 0,
        duration: 0.3
      });
    });
  }
  
  // Social icons animation
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        y: -5,
        duration: 0.2
      });
    });
    
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        y: 0,
        duration: 0.2
      });
    });
  });
  
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});