import React from 'react';
import json from '../countries.json';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';
const CountriesList = () => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {json.map((eachCountry) => {
          return (
            <Link
              to={`/${eachCountry.cca3}`}
              key={eachCountry.cca3}
              className="list-group-item list-group-item-action"
            >
              <div>
                {eachCountry.flag} {eachCountry.name.common}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CountriesList;