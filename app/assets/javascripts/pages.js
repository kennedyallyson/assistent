// Returns total price
function totalPrice() {
    let priceLength = document.getElementsByClassName('price').length;
    let price = 0;
    let quantity = 0;
    let result = 0;

    for (let i = 0; i <  priceLength; i++) {
        price = Number(document.getElementsByClassName('price')[i].value);
        quantity = parseInt(Number(document.getElementsByClassName('quantity')[i].value));

        result += price * quantity;
    }

    document.getElementById('number').innerHTML = '$ ' + result.toFixed(2);
}

// Adds a new item
function addItem() {
    let div = document.createElement('div');
    div.setAttribute('class', 'item');

    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'name');
    inputName.setAttribute('size', '6');

    let inputPrice = document.createElement('input');
    inputPrice.setAttribute('type', 'text');
    inputPrice.setAttribute('class', 'price');
    inputPrice.setAttribute('placeholder', 'price');
    inputPrice.setAttribute('size', '6');

    let inputQuantity = document.createElement('input');
    inputQuantity.setAttribute('type', 'text');
    inputQuantity.setAttribute('class', 'quantity');
    inputQuantity.setAttribute('placeholder', 'quantity');
    inputQuantity.setAttribute('size', '6');

    div.appendChild(inputName);
    div.appendChild(inputPrice);
    div.appendChild(inputQuantity);
    document.getElementById('inputContainer').appendChild(div);
}

// Always delete the last item until only one
function removeItem() {
    let del = checkInput();
    let items = document.getElementById('inputContainer');

    if (del) {
        items.removeChild(items.lastElementChild);
    }
}

// Check how many inputs you have on the screen
function checkInput() {
    let items = document.querySelectorAll('input');
    let len = items.length - 4;

    if (len === 1) {
        return false;
    }

    if (len > 1) {
        return true;
    }
}