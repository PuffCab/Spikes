//* 1 fetching the data...

const url =
  "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3";
const getData = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result", result);
      const games = result.response;
      controller(games);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

//* 2 function for creating table and dropdown
const createHtmlTable = (games) => {
  let table = document.getElementById("table");
  table.innerText = "";

  games.forEach((game) => {
    if (isInDropdown(game) && isInDatePicker(game) && isInCheckBox(game)) {
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
      // console.log("type of date", typeof game.date);
      const date = new Date(game.date).toLocaleString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "2-digit",
      });
      // console.log("date", typeof date);
      // console.log("date-->", date);

      column3.innerText = date;
      row.appendChild(column3);
    }
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  const dropdown = document.getElementById("leagueDropdown");

  const competitions = games.map((game) => {
    return game.competition;
  });

  const uniqueCompetitions = [...new Set(competitions)];
  // console.log("uniqueCompetitions", uniqueCompetitions);

  uniqueCompetitions.forEach((singleCompetition) => {
    const option = document.createElement("option");
    option.innerText = singleCompetition;
    option.value = singleCompetition;
    dropdown.appendChild(option);
  });
};

//* 4 make controller function

function controller(games) {
  //get the data
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
    // console.log("date selected");
    // filterByDate(games);
    // filtersCombined(games);
    createHtmlTable(games);
  });
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {
      // filterByDropDown(games);
      // filtersCombined(games);
      createHtmlTable(games);
    });

  const checkBoxes = document.querySelectorAll("input[type='checkbox']");
  console.log("checkBoxes", checkBoxes);

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      console.log("checkbox clicked");
      // filtersCombined(games);
      createHtmlTable(games);
    });
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (games) => {
  // get dropdown value
  // console.log("dropdown working");
  // console.log("games in dropdown-->", games);
  const selectedOption = document.getElementById("leagueDropdown").value;
  console.log("selectedOption", selectedOption);

  const filteredGames = games.filter((game) => {
    return game.competition === selectedOption || selectedOption === "all";
  });

  console.log("filteredGames", filteredGames);
  createHtmlTable(filteredGames);
};

//* 7 fiter by date
// const filterByDate = (games) => {
//   // get date value
//   const selectedDate = document.getElementById("date").value;
//   console.log("selectedDate", selectedDate);
//   const dateValue = new Date(selectedDate).setHours(0, 0, 0, 0);
//   // console.log("dateValue", dateValue);

//   const filteredGames = games.filter((game) => {
//     // console.log("game.date", game.date);
//     const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
//     // console.log("gameDate", gameDate);
//     return gameDate === dateValue || !selectedDate;
//   });

//   // console.log("filteredGames", filteredGames);
//   createHtmlTable(filteredGames);
// };

getData();

//for you guys :
//9 combine filters

// const filtersCombined = (games) => {
//   const selectedOption = document.getElementById("leagueDropdown").value;
//   const selectedDate = document.getElementById("date").value;
//   // console.log("selectedDate", selectedDate);
//   const dateValue = new Date(selectedDate).setHours(0, 0, 0, 0);

//   const filteredGames = games.filter((game) => {
//     const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
//     return (
//       (game.competition === selectedOption || selectedOption === "all") &&
//       (gameDate === dateValue || !selectedDate)
//     );
//   });
//   createHtmlTable(filteredGames);
// };

//Helper

const isInDropdown = (game) => {
  const selectedOption = document.getElementById("leagueDropdown").value;

  if (selectedOption === game.competition || selectedOption === "all") {
    return true;
  } else {
    return false;
  }
};

const isInDatePicker = (game) => {
  const selectedDate = document.getElementById("date").value;
  const dateValue = new Date(selectedDate).setHours(0, 0, 0, 0);
  const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
  return gameDate === dateValue || !selectedDate ? true : false;
};

const isInCheckBox = (game) => {
  const checkBoxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  console.log("checkBoxes", checkBoxes);
  const checkBoxesArray = Array.from(checkBoxes).map((element) => {
    return element.value;
  });
  console.log("checkBoxesArray", checkBoxesArray);
  // checkBoxesArray.forEach((checkBox) => {
  //   if (checkBox.includes(game.competition)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // console.log("checkBoxes", checkBoxes);

  if (
    checkBoxesArray.includes(game.competition) ||
    checkBoxesArray.length === 0
  ) {
    return true;
  } else {
    false;
  }
};
