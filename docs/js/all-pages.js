document.addEventListener("DOMContentLoaded", () => {
  const date = new Date().getFullYear();
  const dateContainer = document.querySelector(".date");
  dateContainer.innerHTML = date;
});

AOS.init({
  offset: 200, // Start animation when the section is 200px from the viewport
  duration: 600, // Animation duration
  easing: "ease-out", // Easing function
  delay: 100, // Delay before animation starts
});
