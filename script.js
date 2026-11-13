
// A V Sanjana - Portfolio Interactions

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after selecting a section
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Reveal elements while scrolling
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Back to Top button
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Hero tagline typing animation
const typingText = document.getElementById("typing-text");

if (typingText) {
    const phrases = [
        "Creating possibilities.",
        "Building meaningful solutions.",
        "Exploring new technologies.",
        "Turning ideas into reality."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingText.textContent =
            currentPhrase.substring(0, characterIndex);

        let speed = deleting ? 45 : 85;

        if (!deleting && characterIndex === currentPhrase.length) {
            deleting = true;
            speed = 1600;
        } else if (deleting && characterIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typingText.textContent = "";
    typeEffect();
}
