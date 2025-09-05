'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);




const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}



const counters = document.querySelectorAll(".card-title1");

  const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 100;

    const updateCount = () => {
      const current = +counter.innerText.replace('+', '');
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = `${Math.min(current + increment, target)}+`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCounter(counter);
        observer.unobserve(counter); // Only run once
      }
    });
  }, {
    threshold: 0.5 // 50% of the element must be visible
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });



  const inner = document.querySelector('.trusted-scroll__inner');
inner.innerHTML += inner.innerHTML; // Duplicate logos












const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const okBtn = document.getElementById("okBtn");

// Open popup when button clicked
openPopup.addEventListener("click", () => {
  popup.style.display = "flex"; // ✅ show only on click
});

// Close popup when X or OK clicked
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
okBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup if user clicks outside the box
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});