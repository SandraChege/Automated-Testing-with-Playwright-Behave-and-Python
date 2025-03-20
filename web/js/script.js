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