// ========================================
// Mobile Navigation
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ========================================
// Places Dropdown
// ========================================

const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");

if (dropdown && dropBtn) {
    dropBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdown.classList.toggle("active");
    });
}


// ========================================
// Custom Right-Click Menu
// ========================================

const contextMenu = document.getElementById("contextMenu");

// Show custom menu
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    if (!contextMenu) return;

    const menuWidth = 190;
    const menuHeight = 250;
    const padding = 10;

    let x = event.clientX;
    let y = event.clientY;

    // Prevent menu from going off the right side
    if (x + menuWidth > window.innerWidth) {
        x = window.innerWidth - menuWidth - padding;
    }

    // Prevent menu from going off the bottom
    if (y + menuHeight > window.innerHeight) {
        y = window.innerHeight - menuHeight - padding;
    }

    // Prevent negative positions
    x = Math.max(padding, x);
    y = Math.max(padding, y);

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;

    contextMenu.classList.add("active");
});


// ========================================
// Close Right-Click Menu
// ========================================

// Close when clicking anywhere else
document.addEventListener("click", (event) => {
    if (
        contextMenu &&
        !contextMenu.contains(event.target)
    ) {
        contextMenu.classList.remove("active");
    }
});


// Close when pressing Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && contextMenu) {
        contextMenu.classList.remove("active");
    }
});


// ========================================
// Right-Click Menu Actions
// ========================================

if (contextMenu) {
    contextMenu.addEventListener("click", (event) => {
        const button = event.target.closest("button");

        if (!button) return;

        const action = button.dataset.action;

        switch (action) {

            // Home
            case "home":
                window.location.href = "index.html";
                break;


            // Browser Back
            case "back":
                window.history.back();
                break;


            // Browser Forward
            case "forward":
                window.history.forward();
                break;


            // Reload Page
            case "reload":
                window.location.reload();
                break;


            // ❤️ I Really Like This Page
            case "like":
                window.open(
                    "https://venmo.com/u/YOUR-VENMO-USERNAME",
                    "_blank",
                    "noopener,noreferrer"
                );
                break;


            // Back to Top
            case "top":
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                break;
        }

        contextMenu.classList.remove("active");
    });
}


// ========================================
// Close Mobile Navigation After Selecting
// ========================================

if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ========================================
// Close Dropdown When Clicking Outside
// ========================================

document.addEventListener("click", (event) => {
    if (
        dropdown &&
        !dropdown.contains(event.target)
    ) {
        dropdown.classList.remove("active");
    }
});
