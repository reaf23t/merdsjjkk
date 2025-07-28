// Menu Mobile
const menuBtn = document.querySelector('.menu-mobile');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Efeito de scroll no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se aberto
            nav.classList.remove('active');
        }
    });
});

// Animação ao scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .section-title');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Definir opacidade inicial
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
});

// Ativar animação no scroll
window.addEventListener('scroll', animateOnScroll);