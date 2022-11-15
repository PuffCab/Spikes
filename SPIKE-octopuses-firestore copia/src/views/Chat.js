import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

function Chat() {
  const { user } = useContext(AuthContext);

  const [chatMsgs, setChatMsgs] = useState([]);
  const [message, setMessage] = useState("");

  const getMessages = async () => {
    // try {
    //   const querySnapshot = await getDocs(collection(db, "Chat"));
    //   const myMsgs = [];
    //   querySnapshot.forEach((doc) => {
    //     console.log("doc :>> ", doc);
    //     console.log(`${doc.id} => ${doc.data()}`);
    //     myMsgs.push(doc.data());
    //   });
    //   console.log("myMsgs :>> ", myMsgs);
    //   setChatMsgs(myMsgs);
    // } catch (error) {
    //   console.log("error", error);
    // }

    const q = query(collection(db, "Chat"));
    onSnapshot(q, (querySnapshot) => {
      const myMsgs = [];
      querySnapshot.forEach((doc) => {
        myMsgs.push(doc.data());
      });
      setChatMsgs(myMsgs);
      console.log("chat messages", myMsgs);
    });
  };

  const msgDate = (date) => {
    return new Date(date * 1000).toLocaleString();
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmitMsg = async () => {
    console.log("message", message);
    try {
      const docRef = await addDoc(collection(db, "Chat"), {
        text: message,
        date: new Date(),
        author: user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h2>Whatsapp clone</h2>
      <input
        type="text"
        value={message}
        name="chat"
        onChange={handleMsgChange}
        placeholder="write your message"
      />
      <button onClick={handleSubmitMsg}>Send</button>

      {chatMsgs &&
        chatMsgs.map((msg, index) => {
          return (
            <div key={index} style={{ backgroundColor: "grey" }}>
              <p>{msg.author}</p>
              <p>{msg.text}</p>
              <p>{msgDate(msg.date.seconds)}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Chat;
