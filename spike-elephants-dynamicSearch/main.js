// console.log("navigator :>> ", navigator);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("position", position);
  //   const longitude = position.coords.longitude;
  //     const latitude = position.coords.longitude;

  //! Object destruturing

  // const {longitude} = position.coords
  // const { latitude } = position.coords

  const { latitude, longitude } = position.coords;

  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
      const { city } = result;
      getWeatherForLocation(city);
    })
    .catch((error) => {
      console.log(error);
    });
}

getLocation();

const getWeatherForLocation = (city) => {
  console.log("city", city);

  const currentDate = new Date();

  let urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
  let urlAstromy = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&dt=${currentDate}`;

  let urlsArray = [urlAstromy, urlForecast];

  let promisesArray = urlsArray.map((singleUrl) => {
    return fetch(singleUrl).then((singleResponse) => {
      console.log("singleResponse :>> ", singleResponse);
      if (singleResponse.status !== 200) {
        // alert("no such a city");
      }
      return singleResponse.json();
    });
  });
  console.log("promisesArray :>> ", promisesArray);

  Promise.all(promisesArray).then((results) => {
    console.log("results", results);
    const weatherData = results[1];
    const astronomyData = results[0];
    displayData(weatherData, astronomyData);
    addEvents();
  });

  // dealing with it just with If() conditions
  //   fetch(urlAstromy)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log("result", result);
  //       if (result) {
  //         //if our first fetch give us a result
  //         // do next fetch here
  //       }
  //     });
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

  // const forecast = weatherData.forecast
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

const addEvents = () => {
  const searchBar = document.getElementById("city-search");
  let city = "";
  searchBar.addEventListener("input", (event) => {
    city = event.target.value;
    // console.log("city", city);
    // console.log("event", event);
  });
  searchBar.addEventListener("keyup", (event) => {
    // console.log("event :>> ", event);
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
