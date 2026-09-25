const DOWNLOAD_URL =
    "https://drive.google.com/uc?export=download&id=1HDG3W5N7kqDR4L0VFQ8A_51grYBG9D-N";

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
    }
);

fadeElements.forEach(element => {
    observer.observe(element);
});


function downloadExtension() {
    window.open(
        DOWNLOAD_URL,
        "_blank",
        "noopener,noreferrer"
    );

    const tutorial = document.getElementById("tutorial");

    if (tutorial) {
        setTimeout(() => {
            tutorial.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 150);
    }
}


const downloadButtons = [
    document.getElementById("downloadBtn"),
    document.getElementById("downloadBtn2"),
    document.getElementById("downloadBtn3")
];

downloadButtons.forEach(button => {
    if (button) {
        button.addEventListener("click", downloadExtension);
    }
});


const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const selector = link.getAttribute("href");
        const target = document.querySelector(selector);

        if (!target) {
            return;
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        document
            .querySelector(".topbar")
            ?.classList.remove("mobile-open");
    });
});


const mobileMenu = document.getElementById("mobileMenu");
const topbar = document.querySelector(".topbar");

if (mobileMenu && topbar) {
    mobileMenu.addEventListener("click", () => {
        topbar.classList.toggle("mobile-open");
    });
}


document.addEventListener("click", event => {
    if (!topbar || !topbar.classList.contains("mobile-open")) {
        return;
    }

    if (
        !topbar.contains(event.target)
    ) {
        topbar.classList.remove("mobile-open");
    }
});


const extensionCard = document.querySelector(".extension-card");

if (extensionCard && window.matchMedia("(pointer: fine)").matches) {
    const wrapper = extensionCard.closest(".extension-wrapper");

    wrapper.addEventListener("mousemove", event => {
        const rect = wrapper.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        extensionCard.style.transform =
            `perspective(1000px)
             rotateY(${x * 8}deg)
             rotateX(${y * -5}deg)
             translateY(-3px)`;
    });

    wrapper.addEventListener("mouseleave", () => {
        extensionCard.style.transform =
            "perspective(1000px) rotateY(-5deg) rotateX(2deg)";
    });
}


const navDownload = document.getElementById("downloadBtn");

if (navDownload) {
    navDownload.addEventListener("mouseenter", () => {
        navDownload.querySelector("span").textContent = "↓";
    });
}
