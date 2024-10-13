document.addEventListener('DOMContentLoaded', function() {
    // Apply coupon functionality
    document.querySelector('.apply-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const couponCode = document.querySelector('.coupon input').value;
        
        if (couponCode === 'DISCOUNT10') {
            alert('Coupon applied! 10% discount');
            updateSummary(-10);  // Update total with discount
        } else {
            alert('Invalid coupon code');
        }
    });

    // Function to update the order summary
    function updateSummary(discount) {
        const subtotal = 100;  // Example value
        const shippingFee = 0;
        const tax = 5;
        const total = subtotal + shippingFee + tax + discount;

        document.querySelector('.order-summary .total span').textContent = `N${total.toFixed(2)}`;
    }

    // Initial calculation of order summary
    updateSummary(0);
});
