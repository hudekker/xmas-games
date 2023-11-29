let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-image');

function openGallery() {
  document.getElementById('galleryModal').style.display = 'block';
  showCurrentImage();
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
}

function showCurrentImage() {
  // Add 'no-display' class to hide all images
  galleryImages.forEach(image => image.classList.add('no-display'));

  // Remove 'no-display' class to show the current image
  galleryImages[currentImageIndex].classList.remove('no-display');
}

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    // Wrap around to the last image
    currentImageIndex = galleryImages.length - 1;
  }
  showCurrentImage();
}

function nextImage() {
  if (currentImageIndex < galleryImages.length - 1) {
    currentImageIndex++;
  } else {
    // Wrap around to the first image
    currentImageIndex = 0;
  }
  showCurrentImage();
}


const galleryModal = document.getElementById('galleryModal');
const galleryContent = document.querySelector('.gallery-content');

galleryModal.addEventListener('click', function (event) {
  if (event.target === galleryModal || event.target === galleryContent) {
    closeGallery()
  }
});

document.addEventListener('keydown', function (event) {
  // Check if the modal is open
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal.style.display === 'block') {
    // Handle arrow key events
    switch (event.key) {
      case 'ArrowRight':
        // Handle right arrow key press
        nextImage();
        break;
      case 'ArrowLeft':
        // Handle left arrow key press
        prevImage();
        break;
      default:
        // Ignore other key presses
        break;
    }
  }
});