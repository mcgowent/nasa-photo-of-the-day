import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContent from "./components/Cards/CardContent"
import { Divider } from "semantic-ui-react";


function Data() {
  // Pull in the date and then break it into parts to be passed into
  // the card and then rendered into the App
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
      .then(e => {
        setData(e.data);
      })
      .catch(err => { return 'nothing', err })
  }, []);
  return (
    <div>
      {data ?
        <CardContent
          title={data.title}
          url={data.url}
          copyright={data.copyright}
          explanation={data.explanation}
          date={data.date} />
        :
        <div>Loading...</div>
      }
    </div>



  )
}

export default Data;
