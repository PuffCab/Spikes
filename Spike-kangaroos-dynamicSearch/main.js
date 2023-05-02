// console.log("navigator", navigator);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("position", position);

  // OBJECT DESCTRUCTURING
  //   const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  // const {latitude} = position.coords
  // const { longitude } = position.coords
  const { latitude, longitude } = position.coords;
  let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result", result.city);
      getWeatherByCity(result.city);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

getLocation();

const getWeatherByCity = (city) => {
  // hide spinner

  const spinner = document.getElementById("spinner");
  spinner.classList.remove("invisible");
  //show table
  const containerData = document.getElementById("data-to-display");
  containerData.classList.add("invisible");

  setTimeout(() => {
    let urlAstronomy = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&dt=${new Date()}`;
    let urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

    let urlsArray = [urlAstronomy, urlForecast];
    //   let promisesArray = urlsArray.map((singleUrl) => {
    //     return fetch(singleUrl).then((singleResponse) => {
    //       console.log("singleResponse", singleResponse);
    //       return singleResponse.json();
    //     });
    //   });
    //   console.log("promisesArray", promisesArray);
    //   Promise.all(promisesArray).then((result) => {
    //     console.log("result", result);
    //   });

    Promise.all(
      urlsArray.map((singleUrl) => {
        return fetch(singleUrl).then((singleResponse) => {
          console.log("singleResponse", singleResponse);
          return singleResponse.json();
        });
      })
    ).then((result) => {
      console.log("result", result);
      const astronomyData = result[0];
      const weatherData = result[1];

      displayData(weatherData, astronomyData);
      addEvents();
    });
  }, 1000);
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
  let city = "";
  const searchInput = document.getElementById("city-search");
  searchInput.addEventListener("input", (event) => {
    console.log("event", event.target.value);
    console.log("input event", event);
    city = event.target.value;
    console.log("city", city);
  });
  searchInput.addEventListener("keydown", (event) => {
    console.log("key event", event);
    if (event.key === "Enter") {
      // console.log("do something");
      getWeatherByCity(city);
    }
  });
};

const cleanDOM = (city, tbody, astronomyCards) => {
  city.innerHTML = "";
  tbody.innerHTML = "";
  astronomyCards.innerHTML = "";
  document.getElementById("city-search").value = "";
};
