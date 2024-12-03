document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (!username || !email) {
        alert("All fields are required.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    console.log("Form submitted:", { username, email });
});

//The function retrieves the value of the input field specified by fieldId, trims any leading or trailing whitespace, and then checks if the value matches the provided regular expression (regex). If the value does not match the regex, an alert message is displayed with the provided errorMessage, and the function returns false. If the value matches the regex, the function returns true.
function validateField(fieldId, regex, errorMessage) {
    const fieldValue = document.getElementById(fieldId).value.trim();
    if (!regex.test(fieldValue)) {
        alert(errorMessage);
        return false;
    }
    return true;
}

//this function is used to sanitize input by creating a text node and returning its HTML content. This helpsprevent cross-Site Scripting attacks by ensuriong that any HTML tags in the input are escaped. The sanitized input in then logged to the console
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Usage example:
const sanitizedUsername = sanitizeInput(username);
const sanitizedEmail = sanitizeInput(email);

console.log("Form submitted:", { sanitizedUsername, sanitizedEmail });

