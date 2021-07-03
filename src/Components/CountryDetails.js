import React from 'react';
import { Link } from 'react-router-dom';
import json from '../countries.json';
const CountryDetails = (props) => {
    console.log("hello",props); // <= check `props` value
    return (
      <div>
      </div>
    );
}    
export default CountryDetails;
// const CountryDetails = (props) => {
//   console.log(props)
//   const getCountry = (cca3) => {
//     const theCountry = oneCountry => {
//       return oneCountry.cca3 === cca3;
//     }
//     return json.find(theCountry)
//   };
//   const { params } = props.match;
//   const foundCountry = getCountry(params.cca3, 10);
//   return (
//     <div>
//       <h2>{ foundCountry.name.common } <span style={{fontSize:"14px"}}>{ foundCountry.flag }</span></h2>
//       <Link to='/CountriesList'>Back</Link>
//     </div>
//   )
// }
// export default CountryDetails;