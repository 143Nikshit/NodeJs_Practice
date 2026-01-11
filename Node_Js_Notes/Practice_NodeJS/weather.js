//Error: Missing API key value in the API_KEY constant.
import readline from 'readline';

const API_KEY ='https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input : process.stdin,  
    output : process.stdout
});

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('City not found. Please check the city name. ');
        }
        const weatherData = await response.json();
        console.log(weatherData);

        console.log('\nWeather Information:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp} °C`);
        console.log(`Weather: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);

    }catch (error){
        console.log(error);
    }
}

const city = await rl.question('Enter a city name to get its weather: ');
await getWeather(city);
rl.close();