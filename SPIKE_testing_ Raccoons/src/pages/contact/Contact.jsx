import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isVisible, setisVisible] = useState(false);
  const showSpan = () => {
    setTimeout(() => {
      setisVisible(true);
    }, 2000);
  };

  return (
    <>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <span
        data-testid="span-text"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {`Hi ${name}, message sent to ${email}`}
      </span>
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button onClick={showSpan}>Contact Me</button>
    </>
  );
}

export default Contact;
