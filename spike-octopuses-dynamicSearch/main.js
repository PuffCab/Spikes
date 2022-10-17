function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCityByLocation);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function getCityByLocation(position) {
  console.log("position :>> ", position);
  //   const longitude = position.coords.longitude;
  //     const latitude = position.coords.latitude;

  const { longitude, latitude } = position.coords; // destructiring , this is the same as the two variables above

  let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log("result", result);
      getWeatherForLocation(result.city);
    })
    .catch((error) => {
      console.log(error);
    });
}
getLocation();

const getWeatherForLocation = (city) => {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("invisble");
  console.log("city", city);
  let urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
  let urlAstronomy = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&dt=${new Date()}`;
  let urls = [urlForecast, urlAstronomy];

  Promise.all(
    urls.map((url) => {
      return fetch(url).then((response) => response.json());
    })
  ).then((result) => {
    console.log("result", result);
    const weatherData = result[0];
    const astronomyData = result[1];
    displayData(weatherData, astronomyData);
    createEvents();
  });
};

const displayData = (weatherData, astronomyData) => {
  // hide spinner
  const spinner = document.getElementById("spinner");
  spinner.classList.add("invisible");
  //show table
  const containerData = document.getElementById("data-to-display");
  containerData.classList.remove("invisible");

  const city = document.getElementById("city");
  const tbody = document.getElementById("weather-data");
  const astronomyCards = document.getElementById("astronomy-cards");

  cleanDOM(city, tbody, astronomyCards);

  // const forecast = weatherData.forecast;
  // const location = weatherData.forecast; // this is the same as below (destructiring)
  const { forecast, location } = weatherData;

  city.innerText = `Diplaying the weather for ${location.name} in ${location.country}`;
  const { astronomy } = astronomyData;

  createAstronomyCards(astronomyCards, astronomy);
  createTable(tbody, forecast);
};

const createTable = (tbody, forecast) => {
  forecast.forecastday.forEach((day) => {
    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerText = day.date;
    td2.innerText = day.day.mintemp_c;
    td3.innerText = day.day.maxtemp_c;
    td4.innerText = day.day.condition.text;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    tbody.appendChild(row);
  });
};

const createAstronomyCards = (astronomyCards, astronomy) => {
  const divSun = document.createElement("div");
  divSun.setAttribute("class", "card ");
  const divSunBody = document.createElement("div");
  divSunBody.setAttribute("class", "card-body");
  const h5Sun = document.createElement("h5");
  h5Sun.setAttribute("class", "card-title");
  h5Sun.innerText = "Sun";
  const ulSun = document.createElement("ul");
  ulSun.setAttribute("class", "list-group list-group-flush");
  const ulSunRise = document.createElement("li");
  ulSunRise.setAttribute("class", "list-group-item");
  ulSunRise.innerText = `Sunrise is at ${astronomy.astro.sunrise}`;
  const ulSunSet = document.createElement("li");
  ulSunSet.setAttribute("class", "list-group-item");
  ulSunSet.innerText = `Sunset is at ${astronomy.astro.sunset}`;
  ulSun.appendChild(ulSunRise);
  ulSun.appendChild(ulSunSet);
  divSunBody.appendChild(h5Sun);
  divSun.appendChild(divSunBody);
  divSun.appendChild(ulSun);
  astronomyCards.appendChild(divSun);
};

const createEvents = () => {
  const search = document.getElementById("city-search");

  let city = "";
  search.addEventListener("input", (event) => {
    // console.log("input search :>> ", event.target.value);
    // console.log("event :>> ", event);
    city = event.target.value;
    //   getWeatherForLocation(city)
  });

  search.addEventListener("keyup", (event) => {
    // console.log("event keyup", event);
    if (event.key === "Enter") {
      getWeatherForLocation(city);
    }
  });
};

const cleanDOM = (city, tbody, astronomyCards) => {
  city.innerHTML = "";
  tbody.innerHTML = "";
  astronomyCards.innerHTML = "";
  document.getElementById("city-search").value = "";
};
