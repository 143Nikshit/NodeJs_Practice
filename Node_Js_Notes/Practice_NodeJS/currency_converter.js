import https from 'https';
import chalk from 'chalk';
import readline from 'readline';
import { read } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const apiKey = '12ab34cd56ef78gh'; // Replace with your actual API key
const url = "https://api.exchangerate-api.com/v4/latest/USD";

const currencyConverter = (amount, rate) =>{
    return (amount * rate).toFixed(2)
}
https.get(url, (response) => {
    let data = '';
    response.on("data", (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        const rates = JSON.parse(data).rates;

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g., EUR, GBP, JPY): ', (currency) => {
                const rate = rates[currency.toUpperCase()];
                console.log(amount, rate, currency);
                if(rates){
                    console.log(`${amount} USD is approximately ${currencyConverter(amount, rate)} ${currency}`);
                }else{
                    console.log(`Invalid `)
                }
            })
            rl.close();
        })
    })
})