console.log("Script loaded");

const products = getAvailableProducts();
const ultag = document.createElement('ul');
const bodyTag = document.body;
function renderProducts(products) {
    for (item of products) {
        const liTag = document.createElement('li');
        const name = document.createElement('h2');
        const price = document.createElement('p');
        const rating = document.createElement('p');
        name.innerText = `${item.name}`;
        price.innerText = `Price: ${item.price}`;
        rating.innerText = `Rating: ${item.rating}`;
        liTag.appendChild(name);
        liTag.appendChild(price);
        liTag.appendChild(rating);
        // liTag.innerText = `${item['name']} ${item.price} ${item.rating}`;
        ultag.appendChild(liTag);
    }
}
bodyTag.appendChild(ultag);
renderProducts(products);
console.log(products);