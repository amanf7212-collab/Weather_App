function getWeather() {
    const cityNameRef = document.querySelector("#cityName");
    const cityNameValue = cityNameRef.value;

    const divRef = document.querySelector("#weather");

    if (cityNameValue === "") {
        divRef.innerHTML = "<p>Please enter a city name</p>";
        return;
    }

    fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityNameValue}`)
        .then((res) => res.json())
        .then((data) => {
            divRef.innerHTML = `
                <div>
                    <h2>City: ${cityNameValue}</h2>
                    <h1>Temperature: ${data.current.temp_c}°C</h1>
                </div>
            `;
        })
        .catch((err) => {
            console.log(err);
            divRef.innerHTML = "<p>Error fetching data</p>";
        });
}