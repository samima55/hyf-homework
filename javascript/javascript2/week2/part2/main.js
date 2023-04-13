console.log('Script loaded');

const products = getAvailableProducts();

function renderProducts(products) {
    const ulTag = document.querySelector("section ul");
    products.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
        <ul>
            <li>${product.name}</li>
            <li>price: ${product.price}</li>
            <li>Rating: ${product.rating}</li>
        </ul>
        `;
        ulTag.appendChild(liTag);
    })
}
renderProducts(products);


const inputTag = document.getElementById("searchbyName");
inputTag.addEventListener("input", () => renderSearchProdcuts(products));




function renderSearchProdcuts(products) {
    const filteredArray = products.filter(product =>
        product.name.toLowerCase().startsWith(inputTag.value.toLowerCase())
    );

    const ulTag = document.createElement("ul");
    filteredArray.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
            <ul>
              <li>${product.name}</li>
              <li>Price: ${product.price}</li>
              <li>Rating: ${product.rating}</li>
            </ul>
        `;
        ulTag.appendChild(liTag);
    });

    const result = document.querySelector("section ul");
    result.innerHTML = "";
    result.appendChild(ulTag);
}
renderFilteredArray(products);

/* max price products search*/
const inputPriceTag = document.getElementById("maxPrice");
inputPriceTag.addEventListener("input", () => renderMaxPrice(products));

function renderMaxPrice(products) {
    const filteredArray = products.filter(product => product.price <= inputPriceTag.value);

    const ulTag = document.createElement("ul");
    filteredArray.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
            <ul>
              <li>${product.name}</li>
              <li>Price: ${product.price}</li>
              <li>Rating: ${product.rating}</li>
            </ul>
        `;
        ulTag.appendChild(liTag);
    });

    const result = document.querySelector("section ul");
    result.innerHTML = "";
    result.appendChild(ulTag);
}
