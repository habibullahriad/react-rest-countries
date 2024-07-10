import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, population, name, flags } = props.country;
  console.log(props.country);
  return (
    <div className="country">
      <h2>Country Name:{name.common}</h2>
      <img src={flags.png} alt="" />
      <h3>Population:{population}</h3>
      <p>
        <small>Region:{region}</small>
      </p>

      <p>Area:{area}</p>
    </div>
  );
};

export default Country;
