// Global UI Functionality for SSIMS

document.addEventListener("DOMContentLoaded", function() {
    // 1. Display Current Date
    displayCurrentDate();

    // 2. Alert auto-closing
    setupAlertAutohide();
});

// Display date in dashboard header
function displayCurrentDate() {
    const dateSpan = document.getElementById("currentDate");
    if (dateSpan) {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const today = new Date();
        dateSpan.textContent = today.toLocaleDateString("en-US", options);
    }
}

// Toggle Responsive Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("appSidebar");
    if (sidebar) {
        sidebar.classList.toggle("open");
    }
}

// Automatically dismiss flash alerts after 5 seconds
function setupAlertAutohide() {
    const alerts = document.querySelectorAll(".alert");
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            alert.style.opacity = "0";
            alert.style.transform = "translateX(100%)";
            setTimeout(() => {
                alert.remove();
            }, 500);
        }, 5000);
    });
}
