cost validatePassowrd = (password) => {
  if (typeof password === "string") {
    console.log("password.legth :>> ", password.legth);
    if (password.length < 6) {
      alert("password too short");
    } else {
      alert("password is OK");
    }
  } else {
    alert("password must be a string");
    let userPassword = password.toString();
    if (userPassword.length < 6) {
      alert("password too short");
    }
  }
};

// validatePassowrd("abc3");

validatePassowrd(123123123);

const myDate = new Date()