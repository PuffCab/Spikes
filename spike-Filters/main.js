//* 1 fetching the data...
const getData = () => {
  fetch(
    "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3"
  )
    .then(function (response) {
      return response.json();
    })

    //   (response) => {
    //   return response.json();
    // })
    .then((result) => {
      console.log("resul >>>", result);
      // createHtmlTable(result.response);
      // createDropDown(result.response);
      const myData = result.response;
      controller(myData);
    })
    .catch((error) => {});
};

//* 3 function for creating table and dropdown
const createHtmlTable = (footballList) => {
  let table = document.getElementById("table");

  table.innerHTML = "";
  footballList.forEach((ele, i) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerHTML = ele.title;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerHTML = ele.competition;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    //* reformat date
    // console.log(typeof ele.date);

    const date = new Date(ele.date).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
    // console.log("date :>> ", date);

    column3.innerHTML = date;
    row.appendChild(column3);
  });
};

//* 4 generate Dropdown options
const createDropDown = (gameList) => {
  // console.log("gameList>>>", gameList);
  const dropdown = document.getElementById("leagueDropdown");

  const competitions = gameList.map((game) => {
    return game.competition;
  }); // we extract just the competition names and store them into an array called "competitions"
  const unique = [...new Set(competitions)]; // we remove the duplicates from competitions array
  // console.log("unique :>> ", unique);

  unique.forEach((competitionName) => {
    // console.log(competitionName);
    let option = document.createElement("option");

    option.innerHTML = competitionName;
    option.value = competitionName;
    dropdown.appendChild(option);
  });
};

//* 5 make controller function
//main function
function controller(games) {
  //get the data

  // build table with all data
  createHtmlTable(games);
  //generate DropDown filter options
  createDropDown(games);
  //create filter functions
  //
  // set event listeners
  setEventListeners(games);
}

//*6 add event listeners
const setEventListeners = (gameList) => {
  document.querySelector("#date").addEventListener("change", (event) => {
    // console.log("date selector working");
    filterByDate(gameList);
  });
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {
      // console.log("selector is working");
      filterByDropDown(gameList);
    });
};

//* 7 fiter by date
const filterByDate = (gameList) => {
  // console.log("gameList :>> ", gameList);
  const datePickerValue = document.querySelector("#date").value;
  const selectedDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
  // console.log("selectedDate", selectedDate);

  const filteredGames = gameList.filter((game) => {
    const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
    // console.log("game.date :>> ", gameDate);
    return selectedDate === gameDate;
  });
  console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};

//* 8 fiter by dropdown
const filterByDropDown = (gameList) => {
  // console.log(gameList);
  const dropDownValue = document.querySelector("#leagueDropdown").value;
  // console.log("dropDownValue :>> ", dropDownValue);
  const filteredGames = gameList.filter((game) => {
    return game.competition === dropDownValue;
  });
  // console.log("filteredGames :>> ", filteredGames);
  createHtmlTable(filteredGames);
};
getData();
//for you guys :
//9 combine filters
