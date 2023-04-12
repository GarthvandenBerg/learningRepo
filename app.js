const products = {
    Orange: 1.5,
    Apple: 2,
    Pear: 4,
    Tomato: 2,
    Kiwi: 3
};

let cart;

let elements = document.querySelectorAll('.shop-item-button');

// adds event listeners to all buttons 
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', getProduct);
}

// User purchases an item it should get stored into local storage to use in cart 
function storeItem(keyword, item) {
    localStorage.setItem(keyword, item);
    console.log(localStorage.getItem(keyword) + "FromStorage");
}

// Gets Item name from label when button press using parent node
function getProduct(e) {
    const product = e.srcElement.parentNode;
    const currentProductName = product.getElementsByClassName("item-label")[0].innerHTML;
    let currentPrice = 0;

    for (const prod in products) {
        if (prod === currentProductName) {
            currentPrice = products[prod]
        }
    }

    cart += {
        currentProductName: currentPrice
    }
    // storeItem(currentProductName, currentPrice);
    console.log(currentPrice);
    console.log(cart);
}