document.querySelector(".login-container").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Handle login logic here
    let email = document.getElementById("email").value;
   
    let password = document.getElementById("password").value;
    // Retrieve stored credentials from localStorage
    let storedEmail = localStorage.getItem("email");
   
    let storedPassword = localStorage.getItem("password");
    // Check if the entered credentials match the stored credentials
    if (email === storedEmail  && password === storedPassword) {
        alert("Login successful! Welcome back, " + email + "!");
        email = "";
        password = "";
        window.location.href = "welcome.html"; // Redirect to welcome page after successful login
    }
    else {
        alert("Login failed! Please check your email, username, and password.");
    }   
    // For demonstration, we'll just log the values to the console
    console.log("Email:", email);
  
    console.log("Password:", password);

    // You can add your login logic here, such as sending the data to a server    
});
