alert("Please open this webpage on pc case it is not responsive for mobile yet");


document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const imageSlider = document.querySelector('.image-slider');

    // Clone the images and append them to the slider
    const images = document.querySelectorAll('.image-slider img');
    images.forEach(img => {
        const clone = img.cloneNode(true);
        imageSlider.appendChild(clone);
    });

    // Set the total width of the slider to accommodate all images
    const totalWidth = images.length * 25; // Assuming each image has a width of 25%
    imageSlider.style.width = totalWidth + '%';

    // Animation to slide the images infinitely
    let currentPosition = 0;

    function slideImages() {
        currentPosition -= 25; // Slide one image (25%)
        if (currentPosition < -totalWidth) {
            currentPosition = 0; // Reset to the beginning if reached the end
        }

        // Apply a smooth transition effect
        imageSlider.style.transition = 'transform 0.5s ease-in-out';
        imageSlider.style.transform = 'translateX(' + currentPosition + '%)';

        // Remove transition after it completes to avoid interference with manual positioning
        setTimeout(() => {
            imageSlider.style.transition = 'none';
        }, 500);
    }

    // Adjust the interval duration based on your preference
    const interval = setInterval(slideImages, 3000); // Change 3000 to your desired duration in milliseconds

    
});
const popupMenu = document.querySelector('.popup-menu');
const menuItems = popupMenu.querySelector('.menu-items');


let timer;

popupMenu.addEventListener('mouseenter', function() {
  clearTimeout(timer);
  menuItems.style.opacity = '1';
  menuItems.style.top = '130%';
  menuItems.style.pointerEvents = 'auto';
 
});

popupMenu.addEventListener('mouseleave', function() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    menuItems.style.opacity = '0';
    menuItems.style.top = 'calc(100% + 5px)';
    menuItems.style.pointerEvents = 'none';
  }, 300);
});

const popupMenu1 = document.querySelector('.popup-menu1');
const menuItems1 = popupMenu1.querySelector('.menu-items1');


let timera;

popupMenu1.addEventListener('mouseenter', function() {
  clearTimeout(timera);
  menuItems1.style.opacity = '1';
  menuItems1.style.top = '130%';
  menuItems1.style.pointerEvents = 'auto';
 
});

popupMenu1.addEventListener('mouseleave', function() {
  clearTimeout(timer);
  timera = setTimeout(() => {
    menuItems1.style.opacity = '0';
    menuItems1.style.top = 'calc(100% + 5px)';
    menuItems1.style.pointerEvents = 'none';
  }, 300);
});








