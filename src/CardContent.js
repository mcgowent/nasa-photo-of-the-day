import React, { useState, useEffect } from "react";
import axios from "axios";

function CardContent() {
  // Pull in the date and then break it into parts to be passed into
  // the card and then rendered into the App

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15"
      )
      .then(res => {
        setData(res.data.date);
      });
    console.log("");
  }, []);

  return <div>This is a Date {data}</div>;
}

export default CardContent;
