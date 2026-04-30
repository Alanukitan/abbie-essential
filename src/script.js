let currentSlide = 0;
const slider = document.getElementById("testimonialSlider");
const totalSlides = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/xvzlokzb",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" },
  ],
  styles: {
    title: {
      backgroundColor: "gray",
    },
    button: {
      backgroundColor: "gray",
    },
  },
});
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

hamburger.addEventListener("click", () => {
  const isOpen =
    mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px";

  if (isOpen) {
    mobileMenu.style.maxHeight = "0px";
    bar1.style.transform = "";
    bar2.style.opacity = "1";
    bar3.style.transform = "";
    hamburger.setAttribute("aria-expanded", "false");
  } else {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    bar1.style.transform = "translateY(7px) rotate(45deg)";
    bar2.style.opacity = "0";
    bar3.style.transform = "translateY(-7px) rotate(-45deg)";
    hamburger.setAttribute("aria-expanded", "true");
  }
});

// Close menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.maxHeight = "0px";
    bar1.style.transform = "";
    bar2.style.opacity = "1";
    bar3.style.transform = "";
    hamburger.setAttribute("aria-expanded", "false");
  });
});
