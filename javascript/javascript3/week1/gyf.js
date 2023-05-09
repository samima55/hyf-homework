const btn = document.getElementById("searchgif");
btn.addEventListener("click", function () {
    const inputnameValue = document.getElementById("gifname").value;
    const inputamountValue = document.getElementById("gif-amount").value;
    getgifData(inputnameValue, inputamountValue);

})

const getgifData = async (inputName, inputNumber) => {
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${inputName}&api_key=oMRn0SKYqoMW43fF96GId6AG47xj6w68&limit=${inputNumber}`)
    const gifData = await response.json();
    console.log(gifData);
    const results = document.getElementById("results");
    results.innerText = "";
    gifData.data.forEach((gif) => {
        const img = document.createElement("img");
        img.src = gif.images.original.url;
        results.appendChild(img);
    });
};