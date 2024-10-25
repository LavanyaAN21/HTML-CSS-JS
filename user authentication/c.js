function authenticate() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const authMessage = document.getElementById('authMessage');

    if (username === 'user' && password === 'password') {
        authMessage.textContent = 'Authentication successful!';
        authMessage.className = 'success';
        authMessage.style.color = 'green';
    } else {
        authMessage.textContent = 'Authentication failed. Please check your username and password.';
        authMessage.className = 'error';
        authMessage.style.color = '#d9534f';
    }

    // Clear the input fields after authentication
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
