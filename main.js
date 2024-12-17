const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_container h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header_container img", {
  ...scrollRevealOption,
  origin: "right",
});

// why container
ScrollReveal().reveal(".why_container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".why_container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".why_container li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".why_container img", {
  ...scrollRevealOption,
  origin: "left",
});

// hero container
ScrollReveal().reveal(".hero_card", {
  ...scrollRevealOption,
  interval: 500,
});

// categories container
ScrollReveal().reveal(".categories_image", {
  duration: 1000,
  interval: 500,
});

// membership container
ScrollReveal().reveal(".membership_card", {
  ...scrollRevealOption,
  interval: 500,
});

// posts container
ScrollReveal().reveal(".posts_card", {
  ...scrollRevealOption,
  interval: 500,
});

// photos card
ScrollReveal().reveal(".photos_card", {
  duration: 1000,
  interval: 500,
});

//testimonials
ScrollReveal().reveal(".testimonials_card", {
  ...scrollRevealOption,
  interval: 500,
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav_links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
