import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

import { auth, db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import usrimg from "/Users/ankit/Desktop/slack-clone/src/pexels-andrea-piacquadio-920382.jpg";

function ChatInput({ channelName, channelId, chatRef }) {
  // const inputRef = useRef(null);
  const [input, setInput] = useState("");

//   console.log(channelId);
    const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevents refresh
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      // message: inputRef.current.value,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
        behavior: "smooth",
    })
    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        {/* <input ref={inputRef} placeholder={`Message #ROOM`}/> */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > Button {
    display: none;
  }
`;
