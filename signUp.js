document
  .querySelector(".signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Handle sign-up logic here
    let email = document.querySelector("#email").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
    if (!passwordPattern.test(password)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }


    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign-up successful! You can now log in with your credentials.");
    window.location.href = "login.html"; // Redirect to login page after successful sign-up

    // For demonstration, we'll just log the values to the console
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    // You can add your sign-up logic here, such as sending the data to a server
  });

function togglePassword() {
  let password = document.querySelector("#password");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
