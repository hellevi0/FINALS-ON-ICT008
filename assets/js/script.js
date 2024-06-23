



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */


const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Get the loading container element
const loadingContainer = document.querySelector('.loading-container');

// Show the loading container when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadingContainer.style.display = 'block';
});

// Hide the loading container after 3 seconds
setTimeout(() => {
  loadingContainer.style.display = 'none';
}, 3000);

document.addEventListener('DOMContentLoaded', function() {
  const subscribeForm = document.getElementById('subscribeForm');

  subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Simulate successful subscription (replace with actual logic)
    alert('Subscription successful!'); // Show alert

    // Refresh the page after alert
    window.location.reload();
  });
});


document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Simulating a successful reservation (replace this with actual submission logic)
  setTimeout(function() {
    document.getElementById('reservationNotification').style.display = 'block';
    // Optionally, reset the form after submission
    document.getElementById('reservationForm').reset();
    // Hide the notification after a few seconds
    setTimeout(function() {
      document.getElementById('reservationNotification').style.display = 'none';
    }, 3000); // Adjust timeout as needed
  }, 1000); // Adjust timeout as needed for demonstration
});

  document.addEventListener('DOMContentLoaded', function() {
    const findTableBtn = document.getElementById('findTableBtn');
    const reservationSection = document.getElementById('reservation');

    if (findTableBtn && reservationSection) {
      findTableBtn.addEventListener('click', function(event) {
        event.preventDefault();
        reservationSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });



const menuLink = document.querySelector('[href="#menu"]');

menuLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Change the URL to the "Menu" page
  window.location.href = "#menu";
});


/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}


heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
  

});