import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <div>Daily Dose of Advice</div>
      <div>{advice}</div>
    </div>
  );
}

export default App;
