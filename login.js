function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Vinay" && password === "123") {
    alert("Login successful!");
    window.location.href = "Home.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
