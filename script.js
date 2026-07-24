document.addEventListener('DOMContentLoaded', () => {
    // Shade Selector Logic
    const swatches = document.querySelectorAll('.swatch');
    const dropdown = document.getElementById('shade-dropdown');
    const selectedShadeLabel = document.getElementById('selected-shade');

    // Update label when swatch clicked
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove active from all
            swatches.forEach(s => s.classList.remove('active'));
            // Add active to clicked
            swatch.classList.add('active');
            
            const shadeName = swatch.getAttribute('data-shade');
            selectedShadeLabel.textContent = shadeName;
            dropdown.value = shadeName;
        });
    });

    // Update swatches when dropdown changed
    dropdown.addEventListener('change', (e) => {
        const shadeName = e.target.value;
        selectedShadeLabel.textContent = shadeName;
        
        swatches.forEach(s => {
            s.classList.remove('active');
            if (s.getAttribute('data-shade') === shadeName) {
                s.classList.add('active');
            }
        });
    });

    // The image gallery is now a static grid, no JS needed for thumbnails.

    // Product Details Accordion Logic
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle +/-
            const span = this.querySelector('span');
            span.textContent = span.textContent === '+' ? '-' : '+';
            
            // Toggle Content
            const content = this.nextElementSibling;
            content.classList.toggle('open');
        });
    });

    // FAQ (Marketing Plan) Accordion Logic
    const faqAccordions = document.querySelectorAll('.faq-header');
    faqAccordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle +/-
            const span = this.querySelector('span');
            span.textContent = span.textContent === '+' ? '-' : '+';
            
            // Toggle Content
            const content = this.nextElementSibling;
            content.classList.toggle('open');
        });
    });
});
