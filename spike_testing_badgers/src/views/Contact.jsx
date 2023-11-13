import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const showSpan = () => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  };
  //   const showSpan = () => {
  //     setShow(true);
  //   };

  return (
    <div>
      <h1>Contact</h1>
      <span
        data-testid="span"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        {name}, a message has been sent to {email}
      </span>
      <div>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={showSpan}>Send Request</button>
      </div>
    </div>
  );
}

export default Contact;
