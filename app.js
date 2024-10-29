// Show the button when the user scrolls down 100px from the top
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.classList.remove("d-none");
  } else {
    backToTopBtn.classList.add("d-none");
  }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
