import fetch from "node-fetch";

const exchangeRequest = {
    method: 'GET',
    redirect: 'follow',
    headers: {
        "apikey": "dMwv08pxJDiVZoyNLM3JAfkEyaLJUg1M"
    }
};

const exchange = async (from, to, amount) => {
    try {
        const response = await fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, exchangeRequest);
        const data = await response.json();
        return data["result"];
    } catch (e) {
        console.log(e);
        throw new Error(`Unable to convert currency ${from} to ${to}`);
    }
};

const getCountries = async (currencyCode) => {
    try {
        const response = await fetch(`http://api.countrylayer.com/v2/currency/${currencyCode}?access_key=5a23c23b17987673dd8afb49adf25134`);
        const data = await response.json();
        return data.map(country => country['name']);
    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
};

const convertCurrency = async (from, to, amount) => {
    const countries = await getCountries(to);
    const convertedAmount = await exchange(from, to, amount);
    return `${amount} ${from} is worth ${convertedAmount} ${to}. \nYou can spend these in the following countries:\n\t${countries.join('\n\t')}`;
};


convertCurrency('USD', 'HRK', 20)
    .then((message) => {
        console.log(message);
    })
    .catch((e) => {
        console.log(e.message);
    });