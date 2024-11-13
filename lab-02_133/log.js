function validatePassword(event) {
    // Get the password input value
    const password = document.getElementsByName('password')[0].value;
    const username = document.getElementsByName('username')[0].value;
    const errorMessage = document.getElementById('password-error');

    errorMessage.textContent = '';

    // Basic password validation checks
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Password should not be same as username
    if (password === username) {
        errorMessage.textContent = 'Password cannot be the same as username.';
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Password must contain at least one number, one uppercase letter, and one lowercase letter
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must contain at least one lowercase letter, one uppercase letter, and one number.';
        event.preventDefault(); // Prevent form submission
        return false;
    }
    return true;
}