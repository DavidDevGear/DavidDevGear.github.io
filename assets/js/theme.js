// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    if (!themeToggle || !themeIcon) {
        console.warn('Theme toggle elements not found');
        return;
    }
    
    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('gdg-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', initialTheme);
        updateThemeIcon(initialTheme);
        console.log(`Theme initialized: ${initialTheme}`);
    }
    
    // Update icon based on theme
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('gdg-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Button animation
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
        
        console.log(`Theme changed to: ${newTheme}`);
    }
    
    // Initialize
    initTheme();
    
    // Add click event
    themeToggle.addEventListener('click', toggleTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('gdg-theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
});

// Stats counter animation
document.addEventListener('DOMContentLoaded', function() {
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target')) || 0;
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 30);
        });
    }
    
    // Animate stats when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Observe all stat containers
    const statContainers = document.querySelectorAll('.stats-grid, .stats-container');
    statContainers.forEach(container => {
        if (container.querySelector('.stat-number')) {
            observer.observe(container);
        }
    });
    
    // Fallback: animate after 2 seconds if not triggered by intersection
    setTimeout(() => {
        const animatedStats = document.querySelectorAll('.stat-number[data-target]');
        animatedStats.forEach(stat => {
            if (stat.textContent === '0' || stat.textContent === '') {
                const target = parseInt(stat.getAttribute('data-target')) || 0;
                if (target > 0) {
                    let current = 0;
                    const increment = target / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current);
                    }, 30);
                }
            }
        });
    }, 2000);
});

// Initialize product comparisons
document.addEventListener('DOMContentLoaded', function() {
    const comparisonTables = document.querySelectorAll('.comparison-table');
    
    comparisonTables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            row.addEventListener('click', function() {
                this.classList.toggle('winner-cell');
            });
        });
    });
});

// Add fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to cards with delay
    const cards = document.querySelectorAll('.card, .category-card, .product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
    
    // Console greeting
    console.log('🎮 Game Dev Gear - All scripts loaded successfully!');
    console.log('Current theme:', document.documentElement.getAttribute('data-theme'));
});
