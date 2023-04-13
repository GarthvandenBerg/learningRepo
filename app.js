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
// function storeItem(keyword, item) {
//     localStorage.setItem(keyword, item);
//     console.log(localStorage.getItem(keyword) + "FromStorage");
// }

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
    if (buttonType === "Add") {
        addButton(productObj);
    } else {
        subtractButton(productObj);
    }

    // storeItem(currentProductName, currentPrice);
    console.log(currentPrice);
}

function addButton (prodObj) {
    const productName = prodObj.Product;
    const productCost = prodObj.currentPrice;
    let quantity = prodObj.Quantity;

    prodObj.productDOM.getElementsByClassName("item-count")[0].innerHTML = Number(quantity) +1;
    // localStorage.setItem("Products", )
}

function subtractButton (prodObj) {
    const productName = prodObj.Product;
    const productCost = prodObj.currentPrice;
    let quantity = prodObj.Quantity;

    if (quantity > 0) {
        prodObj.productDOM.getElementsByClassName("item-count")[0].innerHTML = Number(quantity) - 1;
    } else {
        alert ("Cant go less than 0");
    }
    // localStorage.setItem("Products", )
}

//takes the totals of each and then gives total for all items
function calculateCost () {

}