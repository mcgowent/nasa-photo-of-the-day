import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import Url from "./components/Url";
import Date from "./components/Date";
import Copyright from "./components/Copyright";
import Explanation from "./components/Explanation";

function Data() {
  // Pull in the date and then break it into parts to be passed into
  // the card and then rendered into the App
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
      .then(e => {
        setData(e.data);
      })
      .catch(err => { return 'nothing' })
  }, []);

  console.log(data);
  return (
    <div>
      <h1><Title title={data.title} /></h1>
      <h2>By<Copyright copyright={data.copyright} /></h2>
      <h3><Date date={data.date} /></h3>
      <Explanation explanation={data.explanation} />
      <Url url={data.url} />
    </div>
  );
}

export default Data;
