import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [advice, setAdvice] = useState("");

  const newAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log("response", response.data.slip.advice);
        setAdvice(response.data.slip.advice);
        console.log("test", advice);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    newAdvice();
  }, []); // eslint-disable-line

  return (
    <div className="main-load">
      <div className="content">
        <div className="title">Daily Dose of Advice</div>
        <div className="advice-and-button">
          <div className="advice">{advice}</div>
          <button className="button" onClick={newAdvice}>Give me advice!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
