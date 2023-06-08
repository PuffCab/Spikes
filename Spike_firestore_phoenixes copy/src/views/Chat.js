import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

function Chat() {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");

  //   const getMessages = async () => {
  //     const querySnapshot = await getDocs(collection(db, "chat"));
  //     const messagesArray = [];
  //     querySnapshot.forEach((doc) => {
  //       //   console.log("doc", doc.data());
  //       console.log(`${doc.id} => ${doc.data()}`);
  //       messagesArray.push(doc.data());
  //     });
  //     setMessages(messagesArray);
  //   };

  const getMessagesRealTime = () => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data());
      });
      setMessages(messagesArray);
    });
  };

  const transformDate = (seconds) => {
    const date = new Date(seconds * 1000).toLocaleString();
    const intlDate = new Intl.DateTimeFormat("FA", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
    }).format(seconds * 1000);
    return intlDate;
  };

  const handleInputChange = (e) => {
    setTextMessage(e.target.value);
  };

  const handleMessageSubmit = async () => {
    console.log("textMessage", textMessage);
    const messageObject = {
      text: textMessage,
      author: user.email,
      date: new Date(),
    };
    const docRef = await addDoc(collection(db, "chat"), messageObject);
    console.log("Document written with ID: ", docRef.id);
  };

  useEffect(() => {
    //   getMessages();
    getMessagesRealTime();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div className="container">
        <div>
          <input type="text" value={textMessage} onChange={handleInputChange} />
          <button onClick={handleMessageSubmit}>Send</button>
        </div>
        {messages &&
          messages.map((msg, index) => {
            return (
              <div className="message" key={index}>
                <p>{msg.text}</p>
                <p>{msg.author}</p>
                <p>{transformDate(msg.date.seconds)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;
