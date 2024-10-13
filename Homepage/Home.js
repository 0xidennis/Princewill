// // arrival dropdown
// // Function to toggle between Men and Women dropdown sections
// function toggleDropdown(sectionId) {
//     // Get the dropdown sections for Men and Women
//     var menDropdown = document.getElementById('men-dropdown');
//     var womenDropdown = document.getElementById('women-dropdown');
    
//     // Initially hide both sections
//     menDropdown.style.display = 'none';
//     womenDropdown.style.display = 'none';

//     // Show the clicked section
//     if (sectionId === 'men') {
//         menDropdown.style.display = 'block';
//     } else if (sectionId === 'women') {
//         womenDropdown.style.display = 'block';
//     }
// }

// // Function to toggle the entire "NEW ARRIVALS" dropdown content
// function toggleDropdownContent(dropdownId) {
//     var dropdown = document.getElementById(dropdownId);
//     dropdown.classList.toggle('active')

//     // Toggle visibility of the dropdown content
//     if (dropdown.style.display === 'block') {
//         dropdown.style.display = 'none';
//     } else {
//         dropdown.style.display = 'block';
//     }
// }

// // Close dropdown if clicked outside
// window.onclick = function(event) {
//     if (!event.target.matches('.dropdown-header')) {
//         // Hide all dropdowns if clicked outside
//         var dropdowns = document.getElementsByClassName('dropdown-content');
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             openDropdown.style.display = 'none';
//         }
//     }
// }


  
// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        // Hide any open dropdowns before showing the new one
        hideAllDropdowns();
        dropdown.classList.add('show');
    }
}

// Function to toggle between Men and Women sections
function toggleSection(sectionId) {
    var menSection = document.getElementById('men-dropdown');
    var womenSection = document.getElementById('women-dropdown');

    // Hide both sections
    menSection.classList.remove('active');
    womenSection.classList.remove('active');

    // Show the selected section
    var section = document.getElementById(sectionId);
    section.classList.add('active');
}

// Function to hide all dropdowns when clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-header, .header')) {
        hideAllDropdowns();
    }
}

function hideAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('show');
    });
    
    // Hide all sections
    var sections = document.querySelectorAll('.dropdown-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
}




// search icon
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');

    // Toggle the search bar when the search icon is clicked
    searchIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from propagating to document
        searchContainer.classList.toggle('active');
    });

    // Hide the search bar when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchContainer.contains(event.target)) {
            searchContainer.classList.remove('active');
        }
    });
});

// currency
// Add event listeners to the arrow-down icons
document.querySelectorAll('.arrow-down').forEach((arrow, index) => {
    arrow.addEventListener('click', function() {
        const container = document.getElementById(`currency-container-${index + 1}`);
        container.classList.toggle('active');
    });
});

// Add event listeners to the dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const container = this.closest('.currency-container');
        const currencyCodeElement = container.querySelector('.currency-code');
        const flagElement = container.querySelector('.flag');
        
        // Update the currency code and flag based on the clicked item
        const selectedCurrency = this.getAttribute('data-currency');
        const selectedFlag = this.getAttribute('data-flag');
        currencyCodeElement.innerHTML = selectedCurrency;
        flagElement.src = selectedFlag;
        
        // Hide the dropdown after selecting
        container.classList.remove('active');
    });
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    const target = event.target;
    const currencyContainers = document.querySelectorAll('.currency-container');
    currencyContainers.forEach(container => {
        if (!container.contains(target)) {
            container.classList.remove('active');
        }
    });
});

