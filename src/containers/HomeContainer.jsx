import React, { useState } from "react";
import GreenButton from "../components/GreenButton.jsx";

const HomeContainer = () => {
  const [message, setMessage] = useState("");

  const handleOnPressMe = () => {
    console.log("Hello world");
  };

  return (
    <div>
      <h3>Hello world!!</h3>

      <h3>Tell me something!!</h3>

      <input
        placeholder="something"
        onChange={(e) => setMessage(e.target.value)}
      />

      <GreenButton action={handleOnPressMe} />

      <h2>{message}</h2>
    </div>
  );
};

export default HomeContainer;
