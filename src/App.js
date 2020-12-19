import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😂": "Laughing",
  "🤣": "ROFL",
  "❤": "Heart",
  "😒": "Annoyed",
  "🤞": "Fingerscrossed",
  "😜": "Funny",
  "😘": "Kiss",
  "🤳": "Selfie",
  "😉": "Wink",
  "🎁": "Gift"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Emoji not found in database!!");
    }
  }
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <p>
        <em>Type-in your favourite emoji and find out what they mean..</em>{" "}
      </p>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h4>Emojis We Know--</h4>
      <ul>
        {emojis.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.2rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
