// load weather 
const loadWeather = () =>{
    const input = document.getElementById("input-value");
    const inputValue = input.value;

    // clear input value
    input.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=92cfe3bb5ec1287085c066be868134dc`)
        .then(resp => resp.json())
        .then(data => displayWeather(data))
}

const displayWeather = (weather) =>{
    const wrapper = document.getElementById("wrapper");
    const div = document.createElement("div");
    wrapper.textContent = "";
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
        <h1>${weather.name}</h1>
        <h2>${weather.sys.country}</h2>
        <h3><span>${Math.round(weather.main.temp - 273.15)}</span>&deg;C</h3>
    `;
    wrapper.appendChild(div);
}