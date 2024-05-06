import React, { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [userName, setUserName] = useState(null);

  //   const getContactMessage = () => {
  //     setIsVisible(true);
  //   };
  const getContactMessageAsync = () => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  };

  const fetchUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const result = await response.json();
    console.log("result :>> ", result);
    setUserName(result.username);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <span
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        data-testid="test-span"
      >
        Thank you {name}, we will send an email to {email}
      </span>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button data-testid="test-button" onClick={getContactMessageAsync}>
        Contact me
      </button>
      {userName && (
        <div>
          <h3>userName: {userName}</h3>
        </div>
      )}
    </div>
  );
}

export default Contact;
