import React, { useState, useEffect } from "react";
import axios from "axios";
import CovidChart from "./CovidChart";

function CovidChartDetails({ country }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [allCases, setAllCases] = useState([]);
  const [deathCases, setDeathCases] = useState([]);
  const [date, setDate] = useState([]);
  const[recover , setRecover] = useState([])

  let dateContainer = [];
  let caseContainer = [];
  let deathContainer = [];
  let recovered = []

  const fetchCountryChartDetails = () => {
    let myData = [];
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=100`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
        myData = response.data;
        const { timeline } = myData;
        const { cases, deaths , recovered } = timeline;
        for (const date of Object.keys(cases)) {
          // console.log(date)
          dateContainer.push(date);
        }

        setDate(dateContainer);

        for (const covidCase of Object.values(cases)) {
          caseContainer.push(covidCase);
        }
        setAllCases(caseContainer);
        for (const death of Object.values(deaths)) {
          deathContainer.push(death);
        }
        setDeathCases(deathContainer);
        // console.log(deathContainer);
        // console.log(dateContainer);
        // dateContainer.map((date) => console.log(date));
        // console.log(caseContainer);

        // setAllCases(dateContainer)
      })
      .catch((error) => {
        const errMsg = error.message;
        setError(errMsg);
      });
  };

  useEffect(() => {
    fetchCountryChartDetails();
    console.log(country)
  }, [country]);

  return (
    <div className="chart-container">
      {/* {deathCases.map((death) => console.log(death))} */}
      <CovidChart date={date} deathCases={deathCases} allCases={allCases} country = {country} recover ={recover}/>
    </div>
  );
}

export default CovidChartDetails;
