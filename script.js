// Light/Dark Theme
let themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Counter
let count = 0;
let countDisplay = document.getElementById("count");
let addBtn = document.getElementById("addBtn");
let resetBtn = document.getElementById("resetBtn");

addBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function() {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ toggle
let questions = document.querySelectorAll(".question");

questions.forEach(function(q) {
  q.addEventListener("click", function() {
    let answer = q.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

// Form Validation
let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let formMessage = document.getElementById("formMessage");

  let valid = true;

  // name check
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // email check
  if (email.indexOf("@") === -1) {
    emailError.textContent = "Email must have @";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // password check
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // final message
  if (valid) {
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
  }
});
