const apiUrl = "https://open.er-api.com/v6/latest/USD";
let rates, currencies;

async function getExchangeRates() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    rates = data.rates;
    currencies = Object.keys(rates);
}

getExchangeRates();

// Get user input for amount, currency from, and currency to
const amountInput = document.querySelector('amount');
const currencyFromSelect = document.querySelector('currency-from');
const currencyToSelect = document.querySelector('currency-to');
const resultOutput = document.querySelector('result');

const currencyFrom = currencyFromSelect.value;
const currencyTo = currencyToSelect.value;

// Define a function to calculate the conversion
function convertCurrency(amount, currencyFrom, currencyTo) {
    const rateFrom = rates[currencyFrom];
    const rateTo = rates[currencyTo];
    return (amount / rateFrom) * rateTo;
}



function updateResult() {
    const amount = parseFloat(amountInput.value);
    const currencyFrom = currencyFromSelect.value;
    const currencyTo = currencyToSelect.value;
    const result = convertCurrency(amount, currencyFrom, currencyTo);
    resultOutput.textContent = `${amount} ${currencyFrom} = ${result} ${currencyTo}`;
}

amountInput.addEventListener('input', updateResult);
currencyFromSelect.addEventListener('change', updateResult);
currencyToSelect.addEventListener('change', updateResult);

