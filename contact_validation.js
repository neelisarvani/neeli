function validateContactForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  clearErrors();

  let isValid = true;

  if (name === "") {
    showError("name-error", "Name is required");
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    showError("email-error", "Email is required");
    isValid = false;
  } else if (!email.match(emailPattern)) {
    showError("email-error", "Please enter a valid email address");
    isValid = false;
  }

  if (message === "") {
    showError("message-error", "Message is required");
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    document.querySelector("form").reset();
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
