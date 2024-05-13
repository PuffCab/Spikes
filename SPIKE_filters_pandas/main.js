//* 1 fetching the data...

//!Do not create GLOBAL variables , unless strictly necessary.
// const url =
//       "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3";

const getData = () => {
  const url = `https://www.scorebat.com/video-api/v3/feed/?token=${token}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data :>> ", data);
      const games = data.response;
      // createHtmlTable(games);
      // createDropDown(games);
      controller(games);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

//* 2 function for creating table and dropdown
const createHtmlTable = (games) => {
  let table = document.getElementById("table");

  table.innerHTML = "";

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
    // const date = new Date();
    const myDate = game.date.toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
    // console.log("date :>> ", date);
    column3.innerText = myDate;
    row.appendChild(column3);
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  const dropdown = document.getElementById("leagueDropdown");
  // console.log("games :>> ", games);

  const competitions = games.map((game) => {
    return game.competition;
  });

  // console.log("competitions :>> ", competitions);

  const uniqueCompetitionsArray = [...new Set(competitions)];
  // console.log("uniqueCompetitionsArray :>> ", uniqueCompetitionsArray);

  uniqueCompetitionsArray.forEach((competition) => {
    const option = document.createElement("option");
    option.value = competition;
    option.innerText = competition;

    dropdown.appendChild(option);
  });
};

//* 4 make controller function

function controller(games) {
  //get the data
  //
  // build table with all data
  createHtmlTable(games);
  //generate DropDown filter options
  createDropDown(games);

  // set event listeners
  setEventListeners(games);
  //create filter functions
  //
}

//*5 add event listeners
const setEventListeners = (games) => {
  //Add event to date picker
  const datePicker = document.querySelector("#date");
  datePicker.addEventListener("change", () => {
    filterByDate(games);
  });

  const competitionDropdown = document.querySelector("#leagueDropdown");

  competitionDropdown.addEventListener("change", () => {
    // console.log("dropdown works");
    filterByDropDown(games);
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (games) => {
  // get dropdown value
  console.log("filtering by dropdown");
  //Find selected option
  const selectedValue = document.getElementById("leagueDropdown").value;
  console.log("selectedValue :>> ", selectedValue);
  console.log("games in filter :>> ", games);

  const filteredGames = games.filter((game) => {
    return game.competition === selectedValue;
  });
  // console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

//* 7 fiter by date
const filterByDate = (games) => {
  // get date value
  console.log("filter by date :>> ");
  const datePickerValue = document.querySelector("#date").value;
  const formatedDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
  // console.log("datePickerValue :>> ", formatedDate);

  // fiter
  const filteredGames = games.filter((game) => {
    console.log("game.date :>> ", game.date);
    console.log("formatedDate :>> ", formatedDate);
    const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
    console.log("gameDate :>> ", gameDate);
    return gameDate === formatedDate;
  });
  console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

getData();

//for you guys :
//9 combine filters
