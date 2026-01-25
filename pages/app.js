document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    const clearButton = document.getElementById('clear-all');
    const productGrid = document.getElementById('product-grid');

    // Handle Dropdown Toggles
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = button.parentElement;
            
            // Close other open dropdowns
            document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
                if (dropdown !== parent) dropdown.classList.remove('active');
            });

            // Toggle current dropdown
            parent.classList.toggle('active');
        });
    });

    // Handle dropdown item selection
    document.querySelectorAll('.dropdown-content li').forEach(item => {
        item.addEventListener('click', (e) => {
            const dropdown = e.target.closest('.custom-dropdown');
            const btn = dropdown.querySelector('.dropdown-btn');
            const type = btn.getAttribute('data-type').toUpperCase();
            
            // Update button text to show selection (optional enhancement)
            // btn.innerHTML = `${e.target.innerText} <span class="arrow"></span>`;
            
            dropdown.classList.remove('active');
            console.log(`Filtering by ${type}: ${e.target.innerText}`);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Clear All functionality
    clearButton.addEventListener('click', () => {
        console.log('Filters Cleared');
        // Reset button texts if modified
        const types = ['PRODUCTS', 'FLAVOURS', 'FORMAT'];
        dropdownButtons.forEach((btn, index) => {
            btn.innerHTML = `${types[index]} <span class="arrow"></span>`;
        });
    });

    // Simple sorting visual interaction
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', (e) => {
        console.log(`Sorting by: ${e.target.value}`);
        // In a real app, logic to reorder product cards would go here
    });

    // Add a simple entrance animation to cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
let menu = document.getElementById('menuToggle');
let overlay = document.querySelector('.nav-overlay');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');



menu.addEventListener('click', () => {
  overlay.style.display = "flex";
});
closeBtn.addEventListener('click', () => {
  overlay.style.display = "none";
});
navMenu.addEventListener('click', (e) => {
    if (e.target === navMenu) {
        navMenu.classList.remove('active');
    }
});
let menuitem = document.querySelector('.menu-item2');
let link= document.querySelector('.link-list2');
menuitem.addEventListener('click', () => {
  link.style.display = "inline";
});