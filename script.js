document.addEventListener("DOMContentLoaded", function () {
    // Effet de hover et de clic sur les boutons
    const buttons = document.querySelectorAll(".btn, .btn2, .btn3");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
        button.addEventListener("click", () => {
            button.style.transform = "scale(0.9)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);
        });
    });

    // Effet fade-in sur les images
    const images = document.querySelectorAll(".presentation-image, .feature-icon, .footer-logo");
    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1s ease-in-out";
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => {
        observer.observe(img);
    });

    // Animation des sections au scroll
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    });

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
