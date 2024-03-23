const string1 = "12345789";

const findMissing = () => {
  // transform into array
  const array1 = string1.split("");
  console.log("array1 :>> ", array1);
  for (let i = 0; i < array1.length; i++) {
    if (i + 1 == array1[i]) {
      console.log("not missing");
    } else {
      const missingNumber = i + 1;
      console.log("missingNumber :>> ", missingNumber);
      return;
    }
  }
};
findMissing();
