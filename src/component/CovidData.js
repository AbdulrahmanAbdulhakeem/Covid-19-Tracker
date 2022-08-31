import React, { useState, useEffect } from "react";
import axios from "axios";
import CovidChartDetails from "./CovidChartDetails";
import numeral from "numeral";

function CovidData({ country }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCountryDetails = () => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        const errMsg = error.message;
        setError(errMsg);
      });
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [country]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <div className="card-container">
        <div className="card">
          <h2>Covid - 19 Cases</h2>
          <p className="bad">{numeral(data.cases).format("0,0")}</p>
        </div>
        <div className="card" style={{borderTop: '5px solid #59ce8f'}}>
          <h2>Total Recovered</h2>
          <p className="good">{numeral(data.recovered).format("0,0")}</p>
        </div>
        <div className="card">
          <h2>Total Deaths</h2>
          <p className="bad">{numeral(data.deaths).format("0,0")}</p>
        </div>
      </div>
      <CovidChartDetails country={country} />
    </div>
  );
}

export default CovidData;
