// Collapsible sections
let collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
