// Example function to handle cart action
let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(item.name + " added to cart.");
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        addToCart({
            name: this.dataset.name,
            price: this.dataset.price
        });
    });
});
