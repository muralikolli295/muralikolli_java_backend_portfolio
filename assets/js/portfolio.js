document.addEventListener("DOMContentLoaded", () => {
    /*============= ACTIVE NAVIGATION ================*/
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function setActiveNav() {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", setActiveNav);
    /*=============== SMOOTH SCROLL ==================*/
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId.startsWith("#")) return;
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });

    /*=================== STICKY HEADER EFFECT ====================*/
    const header = document.querySelector(".header");

    function updateHeader() {
        if (!header) return;
        if (window.scrollY > 20) {
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
        } else {
            header.style.boxShadow = "none";
        }
    }
    window.addEventListener("scroll", updateHeader);

    /*================== SCROLL TO TOP BUTTON =================*/
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        function toggleScrollButton() {
            if (window.scrollY > 500) {
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.style.display = "none";
            }
        }
        window.addEventListener("scroll", toggleScrollButton);
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    /*============= CURRENT YEAR ================*/
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    /*========== INITIAL CALLS ============*/
    updateHeader();
    setActiveNav();
});