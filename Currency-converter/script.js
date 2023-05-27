// Currency Converter App
const amountInput = document.getElementById('amount-input');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

const apiKey = '78f3a7fac201673d6992ae07ab6ef0cd'; // Replace with your own API key
const apiUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&base=EUR`;

// Fetch Currency Rates
function fetchCurrencyRates() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const currencies = Object.keys(rates);

            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                option2.value = currency;
                option2.textContent = currency;
                fromCurrencySelect.appendChild(option1);
                toCurrencySelect.appendChild(option2);
            });
        })
        .catch(error => {
            console.log('Error fetching currency rates:', error);
        });
}

// Convert Currency
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;


    fetch(`${apiUrl}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const convertedAmount = amount * rates[toCurrency];

            resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.log('Error converting currency:', error);
        });
}

// Event Listeners
convertBtn.addEventListener('click', convertCurrency);

// Fetch Currency Rates on page load
fetchCurrencyRates();
