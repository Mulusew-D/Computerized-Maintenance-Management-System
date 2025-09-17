// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Form validation on Contact page
function validateContactForm(event) {
  event.preventDefault(); // stop submission to validate
  const form = document.getElementById("contactForm");
  const name = form["name"].value.trim();
  const email = form["email"].value.trim();
  const message = form["message"].value.trim();
  let errors = [];

  if (name === "") {
    errors.push("Name is required");
  }
  if (email === "") {
    errors.push("Email is required");
  } else {
    // basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Email is invalid");
    }
  }
  if (message === "") {
    errors.push("Message is required");
  }

  const errorDiv = document.getElementById("formErrors");
  errorDiv.innerHTML = ""; // clear previous

  if (errors.length > 0) {
    errors.forEach(err => {
      const p = document.createElement("p");
      p.style.color = "red";
      p.textContent = err;
      errorDiv.appendChild(p);
    });
    return false;
  } else {
    // On success, you might send data, for now simple alert
    alert("Thank you, your message has been submitted!");
    form.reset();
    return true;
  }
}
