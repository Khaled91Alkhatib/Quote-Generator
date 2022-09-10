import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./App.scss";

function App() {
  const [advice, setAdvice] = useState("Loading...");
  const msg = new SpeechSynthesisUtterance();
  const notify = () => toast.success("Copied!");


  const newAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log("response", response.data.slip.advice);
        setAdvice(response.data.slip.advice);
        // console.log("test", advice);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    newAdvice();
  }, []); // eslint-disable-line

  const speechHandler = (msg) => {
    msg.text = advice;
    window.speechSynthesis.speak(msg);
  };

  const onCopyClick = () => {
    navigator.clipboard.writeText(advice);
    notify();
  };

  return (
    <div className="main-load">
      <div className="content">
        <div className="title">Daily Dose of Advice</div>
        <div className="advice-and-button">
          <div id="toClip" className="advice">{advice}</div>
          <div className="icons-with-button">
            <i onClick={() => speechHandler(msg)} className="fa fa-microphone icons"></i>
            <button className="button" onClick={() => { newAdvice(); }}>Give me advice!</button>
            <i onClick={onCopyClick} className="fa fa-copy icons" />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
