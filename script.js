// Fade-up scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));


// Download button → open file + scroll to instructions
function triggerDownloadAndScroll() {
    window.open("YOUR_DIRECT_DOWNLOAD_LINK", "_blank");
    document.getElementById("tutorial").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("downloadBtn").addEventListener("click", triggerDownloadAndScroll);
document.getElementById("downloadBtn2").addEventListener("click", triggerDownloadAndScroll);


// Smooth scroll for navbar links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});
