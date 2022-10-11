//* 1 fetching the data...
const getData = () => {
  fetch(
    "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("data", result.response);
      // createHtmlTable(result.response);
      // createDropDown(result.response);
      controller(result.response);
    });
};

//* 3 function for creating table and dropdown
const createHtmlTable = (games) => {
  let table = document.getElementById("table");
  table.innerText = "";

  games.forEach((game, i) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = game.title;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = game.competition;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    //* reformat date
    const gameDate = new Date(game.date).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
    // console.log(typeof gameDate);

    column3.innerText = gameDate;
    row.appendChild(column3);
  });
};
//* 4 generate Dropdown options
const createDropDown = (games) => {
  const dropdown = document.getElementById("leagueDropdown");

  const competitions = games.map((game) => {
    return game.competition;
  });

  const uniqueCompetitions = [...new Set(competitions)];
  // console.log("competions", uniqueCompetitions);

  uniqueCompetitions.forEach((uniqueCompetition) => {
    let option = document.createElement("option");
    option.value = uniqueCompetition;
    option.innerText = uniqueCompetition;
    dropdown.appendChild(option);
  });
};

//* 5 make controller function

function controller(games) {
  //get the data
  //
  // build table with all data
  createHtmlTable(games);
  //generate DropDown filter options
  createDropDown(games);
  //create filter functions
  setEventListeners(games);
  // set event listeners
}

//*6 add event listeners
const setEventListeners = (games) => {
  document.querySelector("#date").addEventListener("change", (event) => {
    // console.log("date picker worked");
    filterByDate(games);
  });
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {
      // console.log("dropdown worked");
      filterByDropDown(games);
    });
};

//* 7 fiter by date
const filterByDate = (games) => {
  // console.log("i am filtering by date");
  const datePickerValue = document.querySelector("#date").value;
  // console.log("datePickerValue", typeof datePickerValue);
  const gameDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
  console.log("gameDate :>> ", gameDate);

  const filteredGames = games.filter((game) => {
    const filterDate = new Date(game.date).setHours(0, 0, 0, 0);
    return filterDate === gameDate;
  });
  console.log("filteredGames", filteredGames);
  createHtmlTable(filteredGames);
};

//* 8 fiter by dropdown
const filterByDropDown = (games) => {
  // console.log("i am filtering by competition");

  const dropDownValue = document.querySelector("#leagueDropdown").value;
  console.log("dropDownValue", dropDownValue);

  const filteredGames = games.filter((game) => {
    return game.competition === dropDownValue;
  });
  console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

getData();

//for you guys :
//9 combine filters

const secondLog = () => {
  console.log("second");
};
const printOut = () => {
  console.log("first");
  secondLog();
  console.log("third");
};
printOut();
