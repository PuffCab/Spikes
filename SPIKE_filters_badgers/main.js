//* 1 fetching the data...

const fetchData = () => {
  const url = `https://www.scorebat.com/video-api/v3/feed/?token=${API_KEY}`;

  fetch(url)
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .then((result) => {
      console.log("result", result);
      const games = result.response;
      controller(games);
    })
    .catch((error) => {
      console.log("error>>>>", error);
    });
};

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
    // console.log("typeof", typeof game.date);
    const transformedDate = new Date(game.date).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
    // console.log("date>>>>", date);

    column3.innerText = transformedDate;
    row.appendChild(column3);
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  console.log("games in CreateDropdownFunction", games);
  const dropdown = document.getElementById("leagueDropdown");

  const competitionsArray = games.map((game) => {
    return game.competition;
  });

  const uniqueCompetitionsArray = [...new Set(competitionsArray)];
  // console.log("uniqueCompetitionsArray", uniqueCompetitionsArray);

  //
  // console.log("uniqueCompetitionsArray", uniqueCompetitionsArray);

  uniqueCompetitionsArray.forEach((competitionName) => {
    const dropdownOption = document.createElement("option");
    dropdownOption.innerText = competitionName;
    dropdown.appendChild(dropdownOption);
  });
};

//* 4 make controller function

function controller(games) {
  //get the data
  //we call fetchData outside of this function
  // build table with all data
  createHtmlTable(games);

  //generate DropDown filter options
  createDropDown(games);
  //create filter functions
  setEventListeners(games);
  // set event listeners
}

//*5 add event listeners
const setEventListeners = (games) => {
  document.querySelector("#date").addEventListener("change", (event) => {
    // console.log(event);
    filterByDate(games);
  });
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {
      // console.log(event.target.value);
      filterByDropDown(games);
    });
};

//* 6 fiter by dropdown
const filterByDropDown = (games) => {
  // get dropdown value
  // console.log("filtering by dropdown", games);
  const selectedCompetition = document.querySelector("#leagueDropdown").value;
  console.log("selectedCompetition", selectedCompetition);

  const filteredGames = games.filter((game) => {
    return (
      game.competition === selectedCompetition || selectedCompetition === "all"
    );
  });

  console.log("filteredGames", filteredGames);
  createHtmlTable(filteredGames);
};

//* 7 fiter by date
const filterByDate = (games) => {
  // get date value
  console.log("filtering by date");
  const selectedDate = document.querySelector("#date").value;

  const selectedDateFormated = new Date(selectedDate).setHours(0, 0, 0, 0);
  // console.log("typeof selectedDateFormated", typeof selectedDateFormated);
  // console.log("selectedDateFormated", selectedDateFormated);

  const filteredGames = games.filter((game) => {
    // console.log("game.date", game.date);
    // console.log("selectedDate", selectedDate);
    const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
    return gameDate === selectedDateFormated;
  });
  // console.log("filteredGames", filteredGames);
  createHtmlTable(filteredGames);
};

//for you guys :
//9 combine filters

fetchData();
