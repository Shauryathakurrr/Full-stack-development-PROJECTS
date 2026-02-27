const images = [
  "images/art1.jpg",
  "images/art2.jpg",
  "images/art3.jpg",
  "images/art4.jpg"
];

let current = 0;
const heroImage = document.getElementById("heroImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showImage(index) {
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.src = images[index];
    heroImage.style.opacity = 1;
  }, 300);
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});
// Get modal elements
const modal = document.getElementById("fullscreenModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event to all gallery images
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
