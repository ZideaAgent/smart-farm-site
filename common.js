// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const greeting = document.getElementById('greeting');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (!isLoggedIn) {
        // Redirect to landing page if not logged in
        window.location.href = 'landing.html';
        return;
    }

    // Show greeting and logout button
    if (greeting) {
        const username = localStorage.getItem('username') || 'User';
        greeting.textContent = `Hello, ${username}`;
    }
    
    if (logoutBtn) {
        logoutBtn.style.display = 'block';
    }
}

// Handle logout
function handleLogout() {
    // Clear user data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // Redirect to landing page
    window.location.href = 'landing.html';
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication status
    checkAuth();
    
    // Add logout event listener
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}); 