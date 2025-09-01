// Contact form handling and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Contact method interactions
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('click', function() {
            const link = this.querySelector('.method-link');
            const methodType = this.dataset.method;
            
            // Add click animation
            this.style.transform = 'translateX(10px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different contact methods
            if (methodType === 'email') {
                window.location.href = link.getAttribute('href');
            } else {
                // For other methods, open in new tab (when URLs are properly set)
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    window.open(href, '_blank');
                }
            }
        });
        
        // Add hover sound effect (optional)
        method.addEventListener('mouseenter', function() {
            // You can add sound effects here if desired
            // For now, just add visual feedback
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.contact-hero, .contact-form-section, .contact-info-section, .contact-cta'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});