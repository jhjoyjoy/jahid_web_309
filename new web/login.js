document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const registerLink = document.getElementById('registerLink');
    const registerModal = document.getElementById('registerModal');
    const registerForm = document.getElementById('registerForm');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const regPasswordInput = document.getElementById('regPassword');
    const strengthBars = document.querySelectorAll('.strength-bar');
    const strengthText = document.getElementById('strengthText');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    // Password visibility toggle
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
    
    // Forgot password modal
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordModal.classList.add('active');
    });
    
    // Register modal
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.classList.add('active');
    });
    
    // Close modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
    
    // Password strength indicator
    regPasswordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        if (password.length > 0) strength += 1;
        if (password.length >= 8) strength += 1;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
        if (/\d/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        
        strengthBars.forEach((bar, index) => {
            bar.style.backgroundColor = index < strength ? getStrengthColor(strength) : '#e9ecef';
        });
        
        strengthText.textContent = getStrengthText(strength);
        strengthText.style.color = getStrengthColor(strength);
    });
    
    function getStrengthColor(strength) {
        if (strength <= 2) return '#dc3545';
        if (strength === 3) return '#ffc107';
        return '#28a745';
    }
    
    function getStrengthText(strength) {
        if (strength <= 2) return 'Weak';
        if (strength === 3) return 'Moderate';
        return 'Strong';
    }
    
    // Form submissions
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userType = this.userType.value;
        
        // For demo purposes - in real app, validate with server
        simulateLogin(userType);
    });
    
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Password reset link has been sent to your email');
        this.reset();
        forgotPasswordModal.classList.remove('active');
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration successful! You can now login with your credentials.');
        this.reset();
        registerModal.classList.remove('active');
    });
    
    // Simulate login with redirection
    function simulateLogin(userType) {
        const submitButton = loginForm.querySelector('button[type="submit"]');
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
        
        // Simulate API call delay
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Sign In';
            
            // Store user data in sessionStorage (for dashboard pages to verify)
            sessionStorage.setItem('currentUser', JSON.stringify({
                email: loginForm.email.value,
                userType: userType,
                loggedIn: true
            }));
            
            // Redirect based on user type
            switch(userType) {
                case 'farmer':
                    window.location.href = 'farmer.html';
                    break;
                case 'admin':
                    window.location.href = 'admin.html';
                    break;
                case 'guest':
                    window.location.href = 'guest.html';
                    break;
                default:
                    alert('Invalid user type');
            }
        }, 1500);
    }
    
    // Carousel functionality
    let currentSlide = 0;
    const slideCount = carouselSlides.length;
    let carouselInterval;
    
    function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }
    
    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 5000);
    }
    
    // Initialize carousel
    showSlide(currentSlide);
    startCarousel();
    
    // Pause carousel on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carousel.addEventListener('mouseleave', startCarousel);
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            clearInterval(carouselInterval);
            startCarousel();
        });
    });
});