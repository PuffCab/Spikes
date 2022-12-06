console.log("data :>> ", data);
console.log("data :>> ", data[0].Calories);

const tBody = document.getElementById("tbody");

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = "Nr. " + (i + 1);
  let td2 = document.createElement("td");
  td2.innerText = data[i]["Scientific Name"];
  let td3 = document.createElement("td");
  td3.innerText = data[i].Calories;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tBody.appendChild(tr);
}
