function task1() {
  setTimeout(() => {
    console.log("task1 complete");
  }, 1000);
}
function task2() {
  setTimeout(() => {
    console.log("task2 complete");
  }, 2000);
}
function task3() {
  setTimeout(() => {
    console.log("task3 complete");
  }, 3000);
}

// task1();
// task2();
// task3();

const getCatFacts = () => {
  fetch("https://catfact.ninja/facts")
    .then((response) => {
      // console.log("response :>> ", response.json());
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

getCatFacts();
