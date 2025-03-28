document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");
    
    form.addEventListener("submit", function(event) {
        errorMessage.innerHTML = "";
        let errors = [];
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "") errors.push("Name is required.");
        if (email === "") errors.push("Email is required.");
        if (message === "") errors.push("Message is required.");
        
        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join("<br>");
            event.preventDefault();
        }
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Error message elements
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const passwordCriteriaError = document.getElementById("password-criteria-error");

    // Reset error messages
    usernameError.style.display = "none";
    passwordError.style.display = "none";
    passwordCriteriaError.style.display = "none";

    let valid = true;

    // Username validation
    if (!username) {
        usernameError.style.display = "block";
        valid = false;
    }

    // Password validation
    if (!password) {
        passwordError.style.display = "block";
        valid = false;
    } else {
        // Regex for password criteria
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

        if (!passwordRegex.test(password)) {
            passwordCriteriaError.style.display = "block";
            valid = false;
        }
    }

    if (!valid) return; // Stop if validation fails

    // Hardcoded credentials for testing
    const validUsername = "admin";
    const validPassword = "Password@123";

    if (username === validUsername && password === validPassword) {
        window.location.href = "homepage.html"; // Redirect on successful login
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
});
