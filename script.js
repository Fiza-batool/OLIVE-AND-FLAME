// ========== HAMBURGER MENU TOGGLE ==========
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

// ========== NAVBAR SCROLL SHADOW ==========
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.style.boxShadow =
      window.scrollY > 20 ? "0 4px 20px rgba(0,0,0,0.1)" : "none";
  }
});

// ========== MENU FILTER TABS ==========
const tabBtns = document.querySelectorAll(".tab-btn");
const categories = document.querySelectorAll(".menu-category");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active tab
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selected = btn.getAttribute("data-category");

    categories.forEach((cat) => {
      if (selected === "all" || cat.id === selected) {
        cat.classList.remove("hidden");
      } else {
        cat.classList.add("hidden");
      }
    });
  });
});

// ========== CONTACT FORM SUBMIT ==========
function handleFormSubmit() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const success = document.getElementById("formSuccess");

  if (!name || !email || !message) return;

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("Please fill in your name, email, and message.");
    return;
  }

  // Show success message
  if (success) {
    success.classList.add("show");
    name.value = "";
    email.value = "";
    message.value = "";

    // Hide after 5 seconds
    setTimeout(() => success.classList.remove("show"), 5000);
  }
}
