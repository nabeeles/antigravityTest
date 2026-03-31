document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    // 20 nature photos: 4 local generated + 16 high-quality Unsplash placeholders
    const photos = [
        { src: 'images/mountain1.png' },
        { src: 'images/desert1.png' },
        { src: 'images/forest1.png' },
        { src: 'images/mountain2.png' },
        // Fallback Unsplash nature photos (Landscape, Water, Atmosphere, Macro)
        { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200' }, // Landscape 1
        { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200' }, // Water 1
        { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200' }, // Atmosphere 1 (Sunsets)
        { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200' }, // Macro 1
        { src: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200' }, // Landscape 2
        { src: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200' }, // Water 2
        { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200' }, // Atmosphere 2 (Auroras/Nights) - UPDATED
        { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200' }, // Macro 2
        { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200' }, // Landscape 3
        { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200' }, // Water 3
        { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200' }, // Atmosphere 3
        { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200' }, // Macro 3
        { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200' }, // Landscape 4
        { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200' }, // Water 4
        { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200' }, // Atmosphere 4
        { src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200' }  // Macro 4
    ];

    // Build the grid
    photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.classList.add('photo-item');
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = `Nature ${index + 1}`;
        img.loading = 'lazy';
        
        item.appendChild(img);
        gallery.appendChild(item);

        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = photos[currentIndex].src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    function showPrev() {
        currentIndex = (currentIndex === 0) ? photos.length - 1 : currentIndex - 1;
        lightboxImg.src = photos[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex === photos.length - 1) ? 0 : currentIndex + 1;
        lightboxImg.src = photos[currentIndex].src;
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeLightbox);
    
    // Also close on click outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxImg.parentElement) {
            closeLightbox();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
});
