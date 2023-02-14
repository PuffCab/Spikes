import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../store/AuthContext";

function Chat() {
  // console.log("db", db);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const { user } = useContext(AuthContext);

  // const getMessages = async () => {
  //   const q = query(collection(db, "chat"));

  //   const querySnapshot = await getDocs(q);
  //   const msgs = [];
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, " => ", doc.data());
  //     msgs.push(doc.data());
  //   });
  //   // console.log("msgs", msgs);
  //   setMessages(msgs);
  // };
  const getUpdatedMessages = () => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });
  };

  const handleSubmit = async () => {
    const msgObj = {
      text: text,
      author: user.email,
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "chat"), msgObj);
    console.log("Document written with ID: ", docRef.id);
  };

  const msgDate = (time) => {
    const date = new Date(time * 1000).toLocaleString();
    return date;
  };

  const handleInputChange = (e) => {
    // console.log("e.target.value :>> ", e.target.value);
    setText(e.target.value);
  };

  useEffect(() => {
    // getMessages();
    getUpdatedMessages();
  }, []);

  return (
    <div>
      <h1>Chat</h1>

      {messages &&
        messages.map((message, index) => {
          return (
            <div style={{ border: "solid" }} key={index}>
              <p> {message.author}</p>
              <p> {message.text}</p>
              <p> {msgDate(message.date.seconds)}</p>
            </div>
          );
        })}
      <div>
        <input type="text" name="chat" id="chat" onChange={handleInputChange} />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
