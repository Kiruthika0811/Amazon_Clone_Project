const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
const header_slider = document.querySelector('.header-slider'); // Get the header slider element

let n = 0;
let autoSlideInterval; // Store the interval ID for auto-sliding

// Function to change the slide
function changeslide() {
    // Hide all images
    imgs.forEach(img => img.style.display = 'none');

    // Show the current image
    imgs[n].style.display = 'block';
}

// Initial call to show the first image
changeslide();

// Previous button event listener
prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1; // Wrap to the last image
    }
    e.preventDefault();
    changeslide();
});

// Next button event listener
next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0; // Wrap to the first image
    }
    e.preventDefault();
    changeslide();
});

// Function to move to the next slide automatically
function autoMoveSlide() {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0; // Wrap to the first image
    }
    changeslide();
}

// Start automatic slide change when the mouse is over the header-slider
header_slider.addEventListener('mouseover', () => {
    // Start the interval when mouse is over
    autoSlideInterval = setInterval(autoMoveSlide, 2500); // Change slide every 2 seconds
});

// Stop automatic slide change when the mouse leaves the header-slider
header_slider.addEventListener('mouseleave', () => {
    // Stop the interval when mouse leaves
    clearInterval(autoSlideInterval);
});
