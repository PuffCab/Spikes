console.log("navigator :>> ", navigator);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCityByLocation);
  } else {
    alert("Geolocation is not supported by your browser");
  }
}

async function getCityByLocation(position) {
  console.log("position", position);
  const dataContainer = document.getElementById("data-to-display");
  dataContainer.classList.add("invisible");
  const spinner = document.getElementById("spinner");
  spinner.classList.add("invisible");
  //   const latitude = position.coords.latitude;
  // const longitude = position.coords.longitude;
  // Destructuring
  const { latitude, longitude } = position.coords;
  //   const { longitude } = position.coords;

  let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data :>> ", data);
    getWeatherByLocation(data.city);
  } catch (error) {
    console.log("error", error);
  }
}
const getWeatherByLocation = async (city) => {
  let forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
  let astronomyUrl = `http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&dt=2022-08-10`;
  let urls = [forecastUrl, astronomyUrl];

  try {
    const responses = await Promise.all(
      urls.map((url) => {
        const response = fetch(url);
        return response;
      })
    );
    console.log("responses", responses);
    // const result = await responses.json();
    // console.log("result", result);
    if (responses[0].status === 200 && responses[1].status === 200) {
      const weatherData = await responses[0].json();
      const astronomyData = await responses[1].json();
      //   console.log("weatherData :>> ", weatherData);
      console.log("astronomyData :>> ", astronomyData);
      displayData(weatherData, astronomyData);
      createEvents();
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
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

const createEvents = () => {
  const search = document.getElementById("city-search");
  let city = "";
  search.addEventListener("input", (event) => {
    // with a "change" event, will capture the value and trigger to callback only when we press enter (therefore not needing the second eventListener)
    //   console.log(event.target.value);
    city = event.target.value;
    // console.log("city :>> ", city);
  });

  search.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      getWeatherByLocation(city);
    }
  });
};

const cleanDOM = (city, tbody, astronomyCards) => {
  city.innerHTML = "";
  tbody.innerHTML = "";
  astronomyCards.innerHTML = "";
  document.getElementById("city-search").value = "";
};
getLocation();
