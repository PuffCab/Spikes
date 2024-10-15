//* 1 fetching the data...

// function getData() {
//   const url = `https://www.scorebat.com/video-api/v3/feed/?token=${TOKEN}`;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log("result :>> ", result);
//       const games = result.response;
//       controller(games);
//     })
//     .catch((error) => {
//       console.log("error :>> ", error);
//     });
// }

async function getDataAsync() {
  const url = `https://www.scorebat.com/video-api/v3/feed/?token=${TOKEN}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("result :>> ", result);
    return result.response;
  } catch (error) {
    console.log("error :>> ", error);
  }
}

//* 2 function for creating table and dropdown
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

    // column3.innerText = game.date;
    column3.innerText = new Date(game.date).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
    row.appendChild(column3);
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  const dropdown = document.getElementById("leagueDropdown");
  const competitionsArray = games.map((game) => {
    return game.competition;
  });
  // console.log("competitionsArray :>> ", competitionsArray);

  const uniqueCompetitions = [...new Set(competitionsArray)];
  // console.log("uniqueCompetitions :>> ", uniqueCompetitions);
  uniqueCompetitions.forEach((competition) => {
    const option = document.createElement("option");
    option.value = competition;
    option.innerText = competition;
    dropdown.appendChild(option);
  });
};

//* 4 make controller function

async function controller() {
  //get the data
  const games = await getDataAsync();

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
  const datePicker = document.querySelector("#date");

  const competitionDropdown = document.querySelector("#leagueDropdown");

  //add event to date picker
  datePicker.addEventListener("change", (e) => {
    console.log("date selected", e.target.value);
    filterByDate(games);
  });

  //add event to droppdown
  competitionDropdown.addEventListener("change", (e) => {
    filterByDropDown(games);
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (games) => {
  console.log("dropdown selected");
  // get dropdown value
  const competitionDropdownValue =
    document.querySelector("#leagueDropdown").value;
  console.log("competitionDropdownValue :>> ", competitionDropdownValue);

  const filteredGames = games.filter((game) => {
    return game.competition === competitionDropdownValue;
  });
  console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

//* 7 fiter by date
const filterByDate = (games) => {
  // get date value
  const datePickerValue = document.querySelector("#date").value;

  const datePickerValueFormated = new Date(datePickerValue).setHours(
    0,
    0,
    0,
    0
  );
  console.log("datePickerValueFormated :>> ", datePickerValueFormated);
  const fiteredGames = games.filter((game) => {
    // console.log("game.date :>> ", game.date);
    const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
    return gameDate === datePickerValueFormated;
  });
  console.log("fiteredGames :>> ", fiteredGames);
  createHtmlTable(fiteredGames);
};

// getData();
controller();
//for you guys :
//9 combine filters
