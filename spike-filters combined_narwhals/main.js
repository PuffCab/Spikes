//* 1 fetching the data...
// const getData = () => {
//   fetch(
//     "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3"
//   )
//     .then(function (response) {
//       return response.json();
//     })

//     //   (response) => {
//     //   return response.json();
//     // })
//     .then((result) => {
//       console.log("resul >>>", result);
//       // createHtmlTable(result.response);
//       // createDropDown(result.response);
//       const myData = result.response;
//       controller(myData);
//     })
//     .catch((error) => {});
// };

//* 2 turn fetch into async await

const getDataAsync = async () => {
  try {
    const response = await fetch(
      "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3"
    );
    const result = await response.json();
    console.log("result :>> ", result);
    return result.response;
  } catch (error) {
    console.log("error :>> ", error);
  }
};

//* 3 function for creating table and dropdown
const createHtmlTable = (footballList) => {
  let table = document.getElementById("table");

  table.innerHTML = "";
  
  footballList.forEach((ele, i) => {
    if(isInDate(ele) && isInDropdown(ele) && isInCheckbox(ele)) {
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
    }
    
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

//* 5 make an async controller function
//main function
async function controller() {
  //get the data
  const games = await getDataAsync();
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
    // filterByDate(gameList);
    // filtersCombined(gameList);
    createHtmlTable(gameList)
  });
  document
    .querySelector("#leagueDropdown")
    .addEventListener("change", (event) => {
      // console.log("selector is working");
      // filterByDropDown(gameList);
      // filtersCombined(gameList);
      createHtmlTable(gameList)
    });

        // const checkBoxes = document.querySelectorAll(".checkbox")
        // console.log('checkBoxes', checkBoxes)
        //with pseudoclass selector
        const checkBoxes = document.querySelectorAll("input[type='checkbox']")
        // console.log('checkBoxes', checkBoxes)

        checkBoxes.forEach((checkbox)=> {
          checkbox.addEventListener("click", () => {
            // console.log("works")
            // filtersCombined(gameList)
            createHtmlTable(gameList)
          })
        })

};

//* 7 fiter by date
// const filterByDate = (gameList) => {
//   // console.log("gameList :>> ", gameList);
//   const datePickerValue = document.querySelector("#date").value;
//   const selectedDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
//   // console.log("selectedDate", selectedDate);

//   const filteredGames = gameList.filter((game) => {
//     const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
//     // console.log("game.date :>> ", gameDate);
//     return selectedDate === gameDate;
//   });
//   console.log("filteredGames :>> ", filteredGames);
//   createHtmlTable(filteredGames);
// };

//* 8 fiter by dropdown
// const filterByDropDown = (gameList) => {
//   // console.log(gameList);
//   const dropDownValue = document.querySelector("#leagueDropdown").value;
//   // console.log("dropDownValue :>> ", dropDownValue);
//   const filteredGames = gameList.filter((game) => {
//     return game.competition === dropDownValue;
//   });
//   // console.log("filteredGames :>> ", filteredGames);
//   createHtmlTable(filteredGames);
// };
// getData();
controller();
//for you guys :
//9 combine filters

// const filtersCombined = (gameList) => {
//   const datePickerValue = document.querySelector("#date").value;
//   const selectedDate = new Date(datePickerValue).setHours(0, 0, 0, 0);

//   const dropDownValue = document.querySelector("#leagueDropdown").value;

//   const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked")
//   const checkedCheckboxesArray = Array.from(checkedCheckboxes)
//   const checkboxesValues = checkedCheckboxesArray.map((checkbox)=> {
//     return checkbox.value
//   })
//   // console.log('checkboxesValues :>> ', checkboxesValues);
//   const filteredGames = gameList.filter((game) => {
//     const gameDate = new Date(game.date).setHours(0, 0, 0, 0);
//     return (
//       (selectedDate === gameDate || !selectedDate) &&
//         (game.competition === dropDownValue ||
//       dropDownValue === "all") && (checkboxesValues.includes(game.competition) || checkboxesValues.length === 0)
//     );
//   });
//   console.log("filteredGames :>> ", filteredGames);
//   createHtmlTable(filteredGames);
// };

// Helper function

const isInDropdown = (game) => {
  const dropDownValue = document.querySelector("#leagueDropdown").value;
  if( game.competition === dropDownValue || dropDownValue === "all") {
    return true
  } else {
    return false
  }
}

const isInDate= (game) => {
  const datePickerValue = document.querySelector("#date").value;
  const selectedDate = new Date(datePickerValue).setHours(0, 0, 0, 0);
  const gameDate = new Date(game.date).setHours(0, 0, 0, 0);

  // ternary operator
  return gameDate === selectedDate || !selectedDate ? true : false

}

const isInCheckbox = (game) => {
    const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked")
  const checkedCheckboxesArray = Array.from(checkedCheckboxes)
  const checkboxesValues = checkedCheckboxesArray.map((checkbox)=> {
    return checkbox.value
  })

  return (checkboxesValues.includes(game.competition) || checkboxesValues.length=== 0) ? true : false
}

