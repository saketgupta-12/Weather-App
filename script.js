
const apikey = process.env.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
async function WeatherDetails() {
    const name = document.getElementById("city").value;
    try{
        const response = await fetch(apiUrl + `&q=${name}&appid=${apikey}`);
        const data = await response.json();
        console.log(data);
        const country = data.sys.country;
        const temperature = data.main.temp;
        const humid = data.main.humidity;
        const wind = data.wind.speed;
        setbackground(data.weather[0].main);
        document.getElementById("temp").innerHTML=`${temperature}&deg;C`;
        document.getElementById("cityname").innerHTML=`${name},${country}`;
        document.getElementById("humidity").innerHTML=`${humid}%`
        document.getElementById("windspeed").innerHTML=`${wind}km/hr`;
    }
    catch(error){
        alert("Incorrect City name");
    }
}
function setbackground(data){
    const container  = document.querySelector(".weather-container");
    const text=document.body;
    let imagePath="";
    switch (data.toLowerCase()) {
        case "clear":
            imagePath = "images/clear.png";
            break;
        case "clouds":
            imagePath = "images/clouds.png";
            break;
        case "rain":
            imagePath = "images/rain.png";
            break;
        case "drizzle":
            imagePath = "images/rain.png";
            break;
        case "snow":
            imagePath = "images/snow.png";
            break;
        case "thunderstorm":
            imagePath = "images/thunderstorm.png";
            break;
        case "mist":
            imagePath = "images/mist.png";
            break;
        case "fog":
            imagePath = "images/mist.png";
            break;
        default:
            imagePath = "images/images.png";
    }
    container.style.backgroundImage = `url('${imagePath}')`;
    container.style.backgroundSize = "cover";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
}