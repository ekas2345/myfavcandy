// Quantity Selector
const quantityInput = document.getElementById('quantity');
document.getElementById('increase').addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});
document.getElementById('decrease').addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Accordion Toggle
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const content = accordion.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
