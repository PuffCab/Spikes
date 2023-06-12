console.log("data>>>>", data);
console.log("data[0].name.common", data[0].name.common);

// const countryName = document.createElement("p");
// const textName = data[0].name.common;

const tBody = document.getElementById("tBody");

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.innerText = data[i].name.common;

  const tdPopulation = document.createElement("td");
  tdPopulation.innerText = data[i].population;

  const tdRegion = document.createElement("td");

  tdRegion.innerText = data[i].region;

  tr.appendChild(tdName);
  tr.appendChild(tdPopulation);
  tr.appendChild(tdRegion);

  tBody.appendChild(tr);
}
