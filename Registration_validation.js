function validateRegistration(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  clearErrors();

  let isValid = true;

  if (username === "") {
    showError("username-error", "Username is required");
    isValid = false;
  }

  if (email === "") {
    showError("email-error", "Email is required");
    isValid = false;
  } else if (!email.match(emailPattern)) {
    showError("email-error", "Please enter a valid email address");
    isValid = false;
  }

  if (password === "") {
    showError("password-error", "Password is required");
    isValid = false;
  }

  if (confirmPassword === "") {
    showError("confirm-password-error", "Confirm password is required");
    isValid = false;
  } else if (password !== confirmPassword) {
    showError("confirm-password-error", "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
  }
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (element) {
    element.innerText = "";
    element.style.display = "none";
  });
}
