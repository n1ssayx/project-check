// Select all necessary elements
const totalPriceElement = document.querySelector('.total');
const productCards = document.querySelectorAll('.card-body');

// Function to update the total price
function updateTotalPrice() {
    let totalPrice = 0;
    productCards.forEach((card) => {
        const quantity = parseInt(card.querySelector('.quantity').textContent, 10) || 0;
        const unitPrice = parseInt(card.querySelector('.unit-price').textContent.replace('$', ''), 10) || 0;
        totalPrice += quantity * unitPrice;
    });
    totalPriceElement.textContent = `${totalPrice}$`;
}

// Add event listeners to all product cards
productCards.forEach((card) => {
    const plusButton = card.querySelector('.fa-plus-circle');
    const minusButton = card.querySelector('.fa-minus-circle');
    const trashButton = card.querySelector('.fa-trash-alt');
    const heartButton = card.querySelector('.fa-heart');
    const quantityElement = card.querySelector('.quantity');

    // Increase quantity
    plusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent, 10) || 0;
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });

    // Decrease quantity
    minusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent, 10) || 0;
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    // Delete item
    trashButton.addEventListener('click', () => {
        card.parentElement.remove(); // Remove the entire product card
        updateTotalPrice();
    });

    // Like/Unlike item
    heartButton.addEventListener('click', () => {
        heartButton.classList.toggle('liked');
        console.log('Class list:', heartButton.classList);
        console.log('Computed color:', getComputedStyle(heartButton).color);
    });
    
    
    
    
});

// Initial total price calculation
updateTotalPrice();
