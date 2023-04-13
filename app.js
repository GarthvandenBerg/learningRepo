const products = {
    Orange: 1.5,
    Apple: 2,
    Pear: 4,
    Tomato: 2,
    Kiwi: 3
};
const totalBtn = document.getElementById('totalBtn');
const cartDiv = document.getElementById('cart');
let elements = document.querySelectorAll('.shop-item-button');

// adds event listeners to all buttons 
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', getProduct);
}
totalBtn.addEventListener('click', calculateCost);

// Gets Item name from label when button press using parent node
function getProduct(e) {
    const product = e.srcElement.parentNode;
    const buttonType = e.srcElement.value;
    const currentProductName = product.getElementsByClassName("item-label")[0].innerHTML;
    let currentPrice = 0;
    let currentCount = product.getElementsByClassName("item-count")[0].innerHTML;

    const productObj = {
        Product: currentProductName,
        Price: currentPrice,
        Quantity: currentCount,
        productDOM: product
    };

    //getproduct price
    for (const prod in products) {
        if (prod === currentProductName) {
            currentPrice = products[prod]
        }
    }

    //check if adding or subtracting from 
    if (buttonType === "+") {
        addButton(productObj);
    } else {
        subtractButton(productObj);
    }
}

function addButton(prodObj) {
    const productName = prodObj.Product;
    const productCost = prodObj.currentPrice;
    let quantity = prodObj.Quantity;

    prodObj.productDOM.getElementsByClassName("item-count")[0].innerHTML = Number(quantity) + 1;
}

function subtractButton(prodObj) {
    const productName = prodObj.Product;
    const productCost = prodObj.currentPrice;
    let quantity = prodObj.Quantity;

    if (quantity > 0) {
        prodObj.productDOM.getElementsByClassName("item-count")[0].innerHTML = Number(quantity) - 1;
    } else {
        alert("Cant go less than 0");
    }
}

//takes the totals of each and then gives total for all items
function calculateCost() {
    const shopItems = document.querySelectorAll(".shop-item");
    let totalDisplay = document.getElementById("result");

    let total = 0;

    // get the total number or each item 
    for (let i = 0; i < shopItems.length; i++) {
        let itemCost = shopItems[i].getElementsByClassName("item-cost")[0].innerHTML;
        let countItem = shopItems[i].lastElementChild.innerHTML;
        total += itemCost * countItem;
    }

    totalDisplay.innerHTML = `<p>Your total is ${total}</p>`
}