document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains("active");

            // Remove "active" class from all items
            accordionHeaders.forEach(item => {
                item.parentElement.classList.remove("active");
            });

            // Toggle "active" class for clicked item
            if (!isActive) {
                accordionItem.classList.add("active");
            }
        });
    });
});
