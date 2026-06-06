// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing animation
const typingText = "2nd year student at PDEU · Building real projects and learning every day!";
const typingElement = document.querySelector('#hero p');
let index = 0;

typingElement.textContent = '';

function type() {
    if (index < typingText.length) {
        typingElement.textContent += typingText[index];
        index++;
        setTimeout(type, 80);
    }
}

type();

// Scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});