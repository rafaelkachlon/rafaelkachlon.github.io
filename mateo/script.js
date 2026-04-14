let currentSlide = 1;
const totalSlides = 9;

function changeSlide(direction) {
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    currentSlide += direction;
    if (currentSlide > totalSlides) currentSlide = 1;
    if (currentSlide < 1) currentSlide = totalSlides;
    document.getElementById(`slide${currentSlide}`).classList.add('active');
    updateNavButtons();
}

function updateNavButtons() {
    document.querySelector('.btn-nav.prev').style.visibility = currentSlide === 1 ? 'hidden' : 'visible';
    document.querySelector('.btn-nav.next').style.visibility = currentSlide === totalSlides ? 'hidden' : 'visible';
}

updateNavButtons();

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'ArrowLeft' || e.key === ' ' || e.key === 'Enter') { if (currentSlide < totalSlides) changeSlide(1); }
    if (e.key === 'ArrowRight' || e.key === 'Backspace') { if (currentSlide > 1) changeSlide(-1); }
});

document.querySelectorAll('.image-placeholder').forEach(cell => {
    cell.addEventListener('click', () => {
        const img = cell.querySelector('img');
        if (!img) return;
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').classList.add('active');
    });
});

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}
