// promises

// const namePromise = new Promise((res, rej) => {
//   const myName = "Emily";
//   if (myName === "Doron") {
//     res("Yes, that is indeed my name.")
//   } else {
//     rej(`${myName} isn't my name...`)
//   }
// });

// namePromise.then((res) => console.log(res)).catch((error) => console.log(error));

// dates

// const dateNow = new Date();
// console.log(dateNow);
// const dateNowString = dateNow.toLocaleDateString();
// console.log(dateNowString);

// // const dateNow2 = Date();
// // console.log(typeof dateNow2);

// const birthday = new Date("1987-06-30");
// const birthday2 = new Date(1987, 5, 30);

//filtering
let url =
  "https://www.scorebat.com/video-api/v3/feed/?token=NTczMDVfMTY3NzQ5MTgwOV83OWMwMzdlMDNhYmQ3NjMxNjcxNTU2OGI3Njk2ODRkYTZmZjA3MTdk";
const fetchData = () => {
  fetch(
    "https://www.scorebat.com/video-api/v3/feed/?token=NTczMDVfMTY3NzQ5MTgwOV83OWMwMzdlMDNhYmQ3NjMxNjcxNTU2OGI3Njk2ODRkYTZmZjA3MTdk"
  )
    .then((res) => {
      return res.json();
    })
    .then((fetchResult) => {
      console.log("fetch result: ", fetchResult);
      controllerFunction(fetchResult.response);
    })
    .catch((error) => console.log(error));
};

fetchData();

const controllerFunction = (games) => {
  buildTable(games);
  compOptions(games);
  addEventListeners(games);
};

const addEventListeners = (games) => {
  const compsOptions = document.getElementById("comps");
  compsOptions.addEventListener("change", (event) => {
    // console.log(event.target.value);
    if (event.target.value === "all") {
      buildTable(games);
    } else {
      const filteredGames = games.filter((game) => {
        return game.competition === event.target.value;
      });
      // console.log(filteredGames);
      buildTable(filteredGames);
    }
  });

  const datePicker = document.querySelector("input[type='date']");
  datePicker.addEventListener("change", (event) => {
    // console.log(event.target.value);
    const formattedDate = formatDate(event.target.value);
    // console.log(formattedDate);
    const filteredGames = games.filter((game) => {
      const gameDate = formatDate(game.date);
      return gameDate === formattedDate;
    });
    // console.log(filteredGames)
    if (filteredGames.length === 0) {
      const gameTable = document.getElementById("game-table");
      gameTable.innerHTML = "";
      const row = document.createElement("tr");
      gameTable.append(row);
      const cell = document.createElement("td");
      cell.colSpan = 3;
      cell.innerHTML = "There are no results for this date :(";
      row.appendChild(cell);
    } else {
      buildTable(filteredGames);
    }
  });
};

const buildTable = (games) => {
  const gameTable = document.getElementById("game-table");
  gameTable.innerHTML = "";
  games.forEach((game) => {
    const row = document.createElement("tr");
    gameTable.appendChild(row);
    const title = document.createElement("td");
    title.innerHTML = game.title;
    const comp = document.createElement("td");
    comp.innerHTML = game.competition;
    const date = document.createElement("td");
    const formattedDate = formatDate(game.date);
    date.innerHTML = formattedDate;

    row.append(title, comp, date);
  });
};

const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

const compOptions = (games) => {
  const compsOptions = document.getElementById("comps");
  const compNames = games.map((game) => {
    return game.competition;
  });
  const set = new Set(compNames);
  const uniqueComps = [...set];
  uniqueComps.forEach((game) => {
    const option = document.createElement("option");
    option.setAttribute("value", game);
    option.innerHTML = game;
    compsOptions.append(option);
  });
};
