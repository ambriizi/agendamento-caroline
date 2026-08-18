document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Desconta a altura do menu fixo para não cobrir o título da seção
                const headerOffset = 80; 
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    const sectionsToAnimate = document.querySelectorAll(".about-section, .services-section, .reviews-section, .service-card, .review-card");
    
    const animationOptions = {
        root: null, // Usa a tela do navegador como referência
        threshold: 0.15, // Ativa a animação quando 15% do elemento estiver visível
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("element-visible");
                observer.unobserve(entry.target); // Para de observar após animar uma vez (ganho de performance)
            }
        });
    }, animationOptions);

    sectionsToAnimate.forEach(section => {
        // Adiciona a classe inicial de invisibilidade via JS (evita quebrar o site se o JS estiver desligado)
        section.classList.add("element-hidden");
        sectionObserver.observe(section);
    });

    const whatsappBtn = document.getElementById("whatsappBtn");

    setInterval(() => {
        whatsappBtn.style.transform = "scale(1.1)";
        setTimeout(() => {
            whatsappBtn.style.transform = "scale(1)";
        }, 300);
    }, 5000); // Executa a cada 5 segundos
});
