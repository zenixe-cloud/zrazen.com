// valentine.js - VERSI SIMPLE TANPA ANIMASI TOMBOL
document.addEventListener('DOMContentLoaded', function() {
    // ========== VARIABLES ==========
    const body = document.body;
    const titleElement = document.querySelector('title');
    const websiteTitle = document.getElementById('website-title');
    const magicButton = document.getElementById('magic-button');
    const buttonText = document.getElementById('button-text');
    const valentineContent = document.getElementById('valentine-content');
    const defaultContent = document.getElementById('default-content');
    const headerSubtitle = document.getElementById('header-subtitle');
    const loadingScreen = document.getElementById('loading-screen');
    const particlesContainer = document.getElementById('particles');
    const confettiContainer = document.getElementById('confetti-container');
    const modeStatus = document.getElementById('mode-status');
    const footerStatus = document.getElementById('footer-status');
    
    // Audio elements
    const clickSound = document.getElementById('click-sound');
    const valentineSound = document.getElementById('valentine-sound');
    const magicSound = document.getElementById('magic-sound');
    
    // Counters
    const loveDaysCounter = document.getElementById('love-days');
    const memoriesCounter = document.getElementById('memories');
    
    // State management
    let isValentineMode = false;
    let isInitialized = false;
    
    // ========== INITIALIZATION ==========
    function initializeApp() {
        // Hide loading screen
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 800);
        
        // Create background particles
        createParticles();
        
        // Check localStorage for previous state
        const savedState = localStorage.getItem('valentineMode');
        if (savedState === 'true') {
            activateValentineMode();
        }
        
        // Initialize counters
        initializeCounters();
        
        // Add simple click event listener to button
        magicButton.addEventListener('click', handleButtonClick);
        
        // Add basic hover effects
        setupHoverEffects();
        
        isInitialized = true;
        console.log('App initialized successfully');
    }
    
    // ========== SIMPLE BUTTON HANDLER ==========
    function handleButtonClick(e) {
        // Simple click feedback
        magicButton.style.transform = 'scale(0.98)';
        setTimeout(() => {
            magicButton.style.transform = 'scale(1)';
        }, 150);
        
        // Play click sound
        playSound(clickSound);
        
        // Toggle mode
        if (!isValentineMode) {
            activateValentineMode();
        } else {
            deactivateValentineMode();
        }
    }
    
    // ========== VALENTINE MODE ==========
    function activateValentineMode() {
        isValentineMode = true;
        
        // Update page title
        titleElement.textContent = 'Valentine Special';
        
        // Update website title
        websiteTitle.textContent = 'Valentine Special';
        
        // Update button text
        buttonText.textContent = 'Back to Normal';
        
        // Update header subtitle
        headerSubtitle.textContent = 'Keajaiban cinta telah diaktifkan! 💖';
        
        // Update mode status
        modeStatus.textContent = 'Valentine Mode';
        footerStatus.innerHTML = '<i class="fas fa-heart"></i><span>Status: Valentine Active</span>';
        
        // Add valentine mode class to body
        body.classList.add('valentine-mode');
        
        // Show valentine content
        valentineContent.classList.add('active');
        
        // Hide default content
        defaultContent.classList.add('hidden');
        
        // Play valentine sound
        setTimeout(() => {
            playSound(valentineSound);
            playSound(magicSound);
        }, 200);
        
        // Create confetti
        setTimeout(() => {
            createConfetti();
        }, 300);
        
        // Start animations for other elements
        setTimeout(() => {
            startValentineAnimations();
        }, 500);
        
        // Save state to localStorage
        localStorage.setItem('valentineMode', 'true');
        
        // Start counter animations
        setTimeout(() => {
            animateCounters();
        }, 700);
        
        console.log('Valentine mode activated');
    }
    
    function deactivateValentineMode() {
        isValentineMode = false;
        
        // Restore page title
        titleElement.textContent = 'Web Biasa';
        
        // Restore website title
        websiteTitle.textContent = 'Web Biasa';
        
        // Restore button text
        buttonText.textContent = 'Click Me';
        
        // Restore header subtitle
        headerSubtitle.textContent = 'Website sederhana tanpa embel-embel khusus';
        
        // Restore mode status
        modeStatus.textContent = 'Default';
        footerStatus.innerHTML = '<i class="fas fa-lock"></i><span>Status: Normal</span>';
        
        // Remove valentine mode class
        body.classList.remove('valentine-mode');
        
        // Hide valentine content
        valentineContent.classList.remove('active');
        
        // Show default content
        defaultContent.classList.remove('hidden');
        
        // Stop valentine sound
        valentineSound.pause();
        valentineSound.currentTime = 0;
        
        // Save state to localStorage
        localStorage.setItem('valentineMode', 'false');
        
        // Reset counters
        resetCounters();
        
        console.log('Valentine mode deactivated');
    }
    
    // ========== ANIMATIONS FOR OTHER ELEMENTS ==========
    function startValentineAnimations() {
        // Simple fade in for feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease';
                card.style.opacity = '1';
            }, index * 100);
        });
        
        // Simple fade in for memory frames
        const memoryFrames = document.querySelectorAll('.memory-frame');
        memoryFrames.forEach((frame, index) => {
            frame.style.opacity = '0';
            setTimeout(() => {
                frame.style.transition = 'opacity 0.5s ease';
                frame.style.opacity = '1';
            }, index * 100 + 200);
        });
        
        // Simple fade in for counter items
        const counterItems = document.querySelectorAll('.counter-item');
        counterItems.forEach((item, index) => {
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease';
                item.style.opacity = '1';
            }, index * 100 + 400);
        });
    }
    
    // ========== PARTICLE SYSTEM ==========
    function createParticles() {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            const color = getRandomParticleColor();
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.backgroundColor = color;
            particle.style.color = color;
            
            particle.style.animation = `
                floatParticle ${duration}s linear ${delay}s infinite
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function getRandomParticleColor() {
        const colors = ['#4a6fa5', '#6b93d6', '#ff6b6b', '#e1e5eb'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // ========== CONFETTI EFFECT ==========
    function createConfetti() {
        confettiContainer.innerHTML = '';
        
        const confettiCount = 150;
        const valentineColors = [
            '#e91e63', '#ff4081', '#ff6b9d', '#ff1493', '#ff69b4',
            '#ffd700', '#c0c0c0', '#ffffff', '#ffeb3b', '#9c27b0'
        ];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            const size = Math.random() * 10 + 5;
            const posX = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 0.5;
            const color = valentineColors[Math.floor(Math.random() * valentineColors.length)];
            
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${posX}%`;
            confetti.style.backgroundColor = color;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            
            const animationName = `confettiFall${i}`;
            const rotation = Math.random() * 360;
            const endX = (Math.random() * 200 - 100);
            
            const keyframes = `
                @keyframes ${animationName} {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) translateX(${endX}px) rotate(${rotation}deg);
                        opacity: 0;
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);
            
            confetti.style.animation = `${animationName} ${duration}s linear ${delay}s forwards`;
            
            confettiContainer.appendChild(confetti);
        }
        
        setTimeout(() => {
            confettiContainer.innerHTML = '';
        }, 5000);
    }
    
    // ========== COUNTERS ==========
    function initializeCounters() {
        loveDaysCounter.textContent = '0';
        memoriesCounter.textContent = '0';
    }
    
    function animateCounters() {
        const targetLoveDays = Math.floor(Math.random() * 900) + 100;
        animateCounter(loveDaysCounter, 0, targetLoveDays, 2000);
        
        const targetMemories = Math.floor(Math.random() * 150) + 50;
        setTimeout(() => {
            animateCounter(memoriesCounter, 0, targetMemories, 1500);
        }, 500);
    }
    
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString();
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    function resetCounters() {
        loveDaysCounter.textContent = '0';
        memoriesCounter.textContent = '0';
    }
    
    // ========== HOVER EFFECTS ==========
    function setupHoverEffects() {
        // Simple hover effect for button
        magicButton.addEventListener('mouseenter', () => {
            magicButton.style.transform = 'scale(1.02)';
            magicButton.style.transition = 'transform 0.2s ease';
        });
        
        magicButton.addEventListener('mouseleave', () => {
            magicButton.style.transform = 'scale(1)';
        });
        
        // Simple hover effects for feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
        
        // Simple hover effects for memory frames
        const memoryFrames = document.querySelectorAll('.memory-frame');
        memoryFrames.forEach(frame => {
            frame.addEventListener('mouseenter', () => {
                frame.style.transform = 'scale(1.03)';
                frame.style.transition = 'transform 0.3s ease';
            });
            
            frame.addEventListener('mouseleave', () => {
                frame.style.transform = 'scale(1)';
            });
        });
    }
    
    // ========== AUDIO HANDLING ==========
    function playSound(audioElement) {
        if (!audioElement) return;
        
        try {
            audioElement.currentTime = 0;
            audioElement.volume = 0.5;
            audioElement.play().catch(error => {
                console.log('Audio play failed:', error);
            });
        } catch (error) {
            console.log('Audio error:', error);
        }
    }
    
    // ========== INITIALIZE APP ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
});