// console.log("secretName", secretName);
const fetchData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      return response.json();
    })
    .then((countries) => {
      console.log("countries", countries);
      controllerFunction(countries);
    });
};

fetchData();

const controllerFunction = (countries) => {
  displayTable(countries);
  subregionOptions(countries);
  regionOptions(countries);
  addEventListeners(countries);
};

const displayTable = (countries) => {
  const countriesTable = document.getElementById("countries-table");
  countriesTable.textContent = "";
  if (countries.length === 0) {
    countriesTable.textContent = "go back to school";
  } else {
    countries.forEach((country) => {
      if (isRegion(country) && isSubRegion(country)) {
        const row = document.createElement("tr");
        countriesTable.appendChild(row);
        const name = document.createElement("td");
        name.textContent = country.name.common;
        const region = document.createElement("td");
        region.textContent = country.region;
        const subregion = document.createElement("td");
        // const formattedDate = formatDate(game.date);
        subregion.textContent = country.subregion;

        const continent = document.createElement("td");
        continent.textContent = country.continents[0];
        row.append(name, region, subregion, continent);
      }
    });
  }
};

const subregionOptions = (countries) => {
  const subregionsOptions = document.getElementById("subregions");
  const subregions = countries.map((country) => {
    return country.subregion;
  });
  // console.log("subregions", subregions);
  const set = new Set(subregions);
  const uniqueSubRegions = [...set];
  console.log("uniqueSubRegions", uniqueSubRegions);
  uniqueSubRegions.forEach((subregion) => {
    const option = document.createElement("option");
    option.setAttribute("value", subregion);
    option.textContent = subregion;
    subregionsOptions.append(option);
  });
};

const regionOptions = (countries) => {
  const regionsOptions = document.getElementById("regions");
  const regions = countries.map((country) => {
    return country.region;
  });
  // console.log("subregions", subregions);
  const set = new Set(regions);
  const uniqueRegions = [...set];
  console.log("uniqueRegions ", uniqueRegions);
  uniqueRegions.forEach((region) => {
    const option = document.createElement("option");
    option.setAttribute("value", region);
    option.textContent = region;
    regionsOptions.append(option);
  });
};

const addEventListeners = (countries) => {
  const subregionsOptions = document.getElementById("subregions");

  subregionsOptions.addEventListener("change", (e) => {
    // console.log("region", e.target.value);
    // filterBySubregion(countries);
    // combinedFilters(countries);
    displayTable(countries);
  });

  const regionsOptions = document.getElementById("regions");

  regionsOptions.addEventListener("change", (e) => {
    // console.log("subregion", e.target.value);
    // filterByRegion(countries);
    // combinedFilters(countries);
    displayTable(countries);
  });

  const checkBoxes = document.querySelectorAll("input[type='checkbox']");
  console.log("checkBoxes", checkBoxes);

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      // console.log("working")
      combinedFilters(countries);

      // filterByCheckbox(countries)
    });
  });
};

const filterBySubregion = (countries) => {
  const selectedSubregion = document.getElementById("subregions").value;

  const filteredCountries = countries.filter((country) => {
    return (
      country.subregion === selectedSubregion || selectedSubregion === "all"
    );
  });

  displayTable(filteredCountries);
  // console.log("filteredCountries", filteredCountries);
};

const filterByRegion = (countries) => {
  const selectedRegion = document.getElementById("regions").value;

  const filteredCountries = countries.filter((country) => {
    return country.region === selectedRegion || selectedRegion === "all";
  });

  displayTable(filteredCountries);
  // console.log("filteredCountries", filteredCountries);
};

const filterByCheckbox = (countries) => {
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  console.log("checkboxes inside FilterFunc", checkboxes);

  // const checkboxesValuesArray = [...checkboxes]
  // const myArray = checkboxesValuesArray.map((element)=> {
  //   return element.value
  // })
  // console.log('myArray', myArray)
  // console.log('checkboxesValuesArray', checkboxesValuesArray)

  const checkboxesValues = Array.from(checkboxes).map((checkbox) => {
    return checkbox.value;
  });
  console.log("checkboxesValues", checkboxesValues);

  const filteredCountries = countries.filter((country) => {
    return (
      checkboxesValues.includes(country.continents[0]) ||
      checkboxesValues.length === 0
    );
  });
  displayTable(filteredCountries);
};

const combinedFilters = (countries) => {
  const selectedSubregion = document.getElementById("subregions").value;
  const selectedRegion = document.getElementById("regions").value;

  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  console.log("checkboxes inside FilterFunc", checkboxes);

  const checkboxesValues = Array.from(checkboxes).map((checkbox) => {
    return checkbox.value;
  });
  const filteredCountries = countries.filter((country) => {
    return (
      (country.region === selectedRegion || selectedRegion === "all") &&
      (country.subregion === selectedSubregion ||
        selectedSubregion === "all") &&
      (checkboxesValues.includes(country.continents[0]) ||
        checkboxesValues.length === 0)
    );
  });
  subregionOptions(filteredCountries);
  displayTable(filteredCountries);
};

//Helper functions

const isRegion = (country) => {
  const selectedRegion = document.getElementById("regions").value;
  if (country.region === selectedRegion || selectedRegion === "all") {
    return true;
  } else {
    false;
  }
};

const isSubRegion = (country) => {
  const selectedSubregion = document.getElementById("subregions").value;

  return country.subregion === selectedSubregion || selectedSubregion === "all"
    ? true
    : false;
};

// Ternary Operator
// //  is 1 = 1 ?
// //     yes : do soemthing
// //   no: do something else
function ternary(params) {
  1 === 2 ? console.log("yes it is") : console.log("no it isn't");
}
ternary();
