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
    if (isInDate(game) && isInDropdown(game)) {
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
    }
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
    // filterByDate(games);
    // combinedFilters(games);
    createHtmlTable(games);
  });
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {
      // console.log("dropdown worked");
      // filterByDropDown(games);
      // combinedFilters(games);
      createHtmlTable(games);
    });

  // set eventlistener for checkboxes
  const checkBoxes = document.querySelectorAll("input[type='checkbox']");
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      combinedFilters(games);
    });
  });
};

//* 7 fiter by date
// const filterByDate = (games) => {
//   // console.log("i am filtering by date");
//   const datePickerValue = document.querySelector("#date").value;
//   console.log("datePickerValue :>> ", datePickerValue);
//   // console.log("datePickerValue", typeof datePickerValue);
//   const gameDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
//   console.log("gameDate :>> ", gameDate);

//   const filteredGames = games.filter((game) => {
//     const filterDate = new Date(game.date).setHours(0, 0, 0, 0);
//     return filterDate === gameDate || !gameDate;
//   });
//   console.log("filteredGames", filteredGames);
//   createHtmlTable(filteredGames);
// };

//* 8 fiter by dropdown
// const filterByDropDown = (games) => {
//   // console.log("i am filtering by competition");

//   const dropDownValue = document.querySelector("#leagueDropdown").value;
//   console.log("dropDownValue", dropDownValue);

//   const filteredGames = games.filter((game) => {
//     return game.competition === dropDownValue || dropDownValue === "all";
//   });
//   console.log("filteredGames :>> ", filteredGames);
//   createHtmlTable(filteredGames);
// };

getData();

//for you guys :
//9 combine filters

// const combinedFilters = (games) => {
//   const dropDownValue = document.querySelector("#leagueDropdown").value;
//   console.log("dropDownValue :>> ", dropDownValue);

//   const datePickerValue = document.querySelector("#date").value;
//   const gameDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
//   console.log("gameDate :>> ", gameDate);

//   // // target all checkboxes
//   // const checkBoxes = document.querySelectorAll("input[type='checkbox']");
//   // console.log("checkBoxes", checkBoxes);

//   // // create array with the values of the checked checkboxes
//   // let checkedCheckboxes = [];
//   // checkBoxes.forEach((checkbox) => {
//   //   if (checkbox.checked === true) {
//   //     checkedCheckboxes.push(checkbox.value);
//   //     console.log("checkedCheckboxes :>> ", checkedCheckboxes);
//   //   }
//   // });

//   // Doing the same as before, but targeting directly and ONLY checked checkboxes, using a css pseudo-class
//   const checkBoxes = document.querySelectorAll(
//     "input[type='checkbox']:checked"
//   );
//   console.log("checkBoxes", checkBoxes);
//   // const checkBoxesArray = Array.from(checkBoxes)

//   const valuesArray = Array.from(checkBoxes).map((checkbox) => {
//     return checkbox.value;
//   });
//   console.log("valuesArray", valuesArray);

//   const filteredGames = games.filter((game) => {
//     const filterDate = new Date(game.date).setHours(0, 0, 0, 0);

//     return (
//       (game.competition === dropDownValue || dropDownValue === "all") &&
//       (filterDate === gameDate || !gameDate) &&
//       (valuesArray.includes(game.competition) || valuesArray.length === 0)
//     );
//   });
//   createHtmlTable(filteredGames);
// };

// helper Function
const isInDropdown = (game) => {
  const dropDownValue = document.querySelector("#leagueDropdown").value;

  if (game.competition === dropDownValue || dropDownValue === "all") {
    return true;
  } else {
    return false;
  }
};

const isInDate = (game) => {
  const datePickerValue = document.querySelector("#date").value;
  const gameDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
  const filterDate = new Date(game.date).setHours(0, 0, 0, 0);

  // if (filterDate === gameDate || !gameDate) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Terary operator
  return filterDate === gameDate || !gameDate ? true : false;
};
