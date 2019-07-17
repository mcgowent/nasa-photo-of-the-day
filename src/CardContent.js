import React, { useState, useEffect } from "react";
import axios from "axios";

function CardContent() {
  // Pull in the date and then break it into parts to be passed into
  // the card and then rendered into the App

  const [copyData, setCopyData] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [explanationData, setExplanationData] = useState([]);
  const [urlData, setUrlData] = useState([]);
  const [titleData, setTitleData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15"
      )
      .then(e => {
        setCopyData(e.data.copyright);
        setDateData(e.data.date);
        setExplanationData(e.data.explanation);
        setUrlData(e.data.url);
        setTitleData(e.data.title);
      });
    console.log("");
  }, []);

  return (
    <div className="parent">
      <div>
        <h1>{titleData}</h1>
        <h2>{copyData}</h2>
        <h3>{dateData}</h3>
        <p>{explanationData}</p>
      </div>
      <div>
        <img width="500" src={urlData} alt={urlData} />
      </div>
    </div>
  );
}

export default CardContent;
