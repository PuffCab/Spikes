console.log("data", data);

const tBody = document.querySelector("tBody");

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  td1.innerHTML = "Number " + i;
  td2.innerHTML = data[i]["Scientific Name"];
  td3.innerHTML = "Protein amount: " + data[i].Protein;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tBody.appendChild(tr);
}
