const dropdownButtons = document.querySelectorAll('.dropdown-btn');
let activeDropdown = null;

dropdownButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = button.getAttribute('data-target');
        const targetDropdown = document.getElementById(targetId);

        // If a dropdown is currently active and it's not the clicked one, hide it
        if (activeDropdown && activeDropdown !== targetDropdown) {
            activeDropdown.style.display = 'none';
        }

        // Toggle the visibility of the clicked dropdown
        if (targetDropdown.style.display === 'block') {
            targetDropdown.style.display = 'none';
            activeDropdown = null;
        } else {
            targetDropdown.style.display = 'block';
            activeDropdown = targetDropdown;
        }
    });
});

// search icon
// Toggle the search container
const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', (event) => {
    searchContainer.classList.add('active');
    searchBar.focus(); // Focus on the search input
    event.stopPropagation(); // Prevent the event from bubbling up to document
  });

  document.addEventListener('click', (event) => {
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
      searchContainer.classList.remove('active');
    }
  });

  searchContainer.addEventListener('click', (event) => {
    event.stopPropagation();
  });


  // Select the relevant elements
const currencyContainer = document.getElementById('currency-container-1');
const flagImage = document.getElementById('flag-1');
const currencyCode = document.getElementById('currency-code-1');
const dropdown = document.getElementById('dropdown-1');

// Toggle the visibility of the dropdown when clicking on the currency container
currencyContainer.addEventListener('click', (event) => {
  currencyContainer.classList.toggle('active');
});

// Add event listener to each dropdown item
const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the currency and flag data from the clicked item
    const selectedCurrency = item.getAttribute('data-currency');
    const selectedFlag = item.getAttribute('data-flag');

    // Replace the header currency code and flag
    currencyCode.textContent = selectedCurrency;
    flagImage.src = selectedFlag;

    // Hide the dropdown after selection
    currencyContainer.classList.remove('active');
  });
});

// Optionally, close the dropdown when clicking outside the currency container
document.addEventListener('click', (event) => {
  if (!currencyContainer.contains(event.target)) {
    currencyContainer.classList.remove('active');
  }
});



const heartIcon = document.getElementById('heart-icon');
const favoriteList = document.getElementById('favorite-list');
const closeFavorite = document.getElementById('close-favorite');

// Toggle favorite list visibility when clicking on the heart icon
heartIcon.addEventListener('click', () => {
  favoriteList.classList.toggle('active');
});

// Close the favorite list when the close icon is clicked
closeFavorite.addEventListener('click', () => {
  favoriteList.classList.remove('active');
});

// Close favorite list when clicking outside the favorite list container
document.addEventListener('click', (event) => {
  if (!favoriteList.contains(event.target) && !heartIcon.contains(event.target)) {
    favoriteList.classList.remove('active');
  }
});


const cartImage = document.getElementById('cart-image');
  
cartImage.addEventListener('click', () => {
  // Navigate to a different page
  window.location.href = 'Princewill/Homepage/Carts.html'; // Change to your desired URL
});
