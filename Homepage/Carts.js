// JavaScript to calculate the subtotal dynamically
document.addEventListener('DOMContentLoaded', function() {
    const qtySelectors = document.querySelectorAll('.qty-select');
    const subtotalElement = document.getElementById('subtotal');
    
    function calculateSubtotal() {
        let subtotal = 0;
        qtySelectors.forEach(select => {
            const qty = parseInt(select.value);
            const itemPrice = 0;  // Price is N0.00, replace with actual price if needed
            if (!select.disabled) {
                subtotal += qty * itemPrice;
            }
        });
        subtotalElement.textContent = `N${subtotal.toFixed(2)}`;
    }

    // Event listeners to update subtotal when quantity changes
    qtySelectors.forEach(select => {
        select.addEventListener('change', calculateSubtotal);
    });

    // Initial calculation
    calculateSubtotal();
});
