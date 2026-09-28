// --- 1. AMBIL ELEMEN DOM ---
const cursorDot = document.getElementById("cursor-dot");
const cursorTrailer = document.getElementById("cursor-trailer");
const interactiveElements = document.querySelectorAll(".interactive-btn, .target-box, .badge");

// Posisi target kursor real-time (posisi mouse)
let mouseX = 0;
let mouseY = 0;

// Posisi trailer kursor (digunakan untuk efek lerp/perataan gerakan)
let trailerX = 0;
let trailerY = 0;

// --- 2. TANGKAP PERGERAKAN MOUSE ---
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Titik utama (dot) langsung mengikuti posisi mouse tanpa jeda
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

// --- 3. ANIMASI TRAILER DENGAN INTERPOLASI LERP ---
function animateTrailer() {
    // Rumus LERP (Linear Interpolation) untuk efek pergerakan mulus/mengalir
    // Trailer mengejar posisi mouse sebesar 15% setiap frame (0.15)
    trailerX += (mouseX - trailerX) * 0.15;
    trailerY += (mouseY - trailerY) * 0.15;

    cursorTrailer.style.left = `${trailerX}px`;
    cursorTrailer.style.top = `${trailerY}px`;

    // Ulangi animasi setiap frame browser
    requestAnimationFrame(animateTrailer);
}

// Jalankan loop animasi
animateTrailer();

// --- 4. EVENT HOVER & KLIK PADA ELEMEN INTERAKTIF ---
interactiveElements.forEach((element) => {
    // Saat mouse masuk ke elemen interaktif
    element.addEventListener("mouseenter", () => {
        cursorTrailer.classList.add("hovered");
    });

    // Saat mouse keluar dari elemen interaktif
    element.addEventListener("mouseleave", () => {
        cursorTrailer.classList.remove("hovered");
    });
});

// Efek tekan tombol mouse (MouseDown / MouseUp)
window.addEventListener("mousedown", () => {
    cursorTrailer.classList.add("active");
});

window.addEventListener("mouseup", () => {
    cursorTrailer.classList.remove("active");
});
