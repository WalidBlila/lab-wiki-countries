import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
      <div>
    <ul>
  <li><Link to='/France' style={{ textDecoration: 'none' }}>France</Link></li>
  <li><Link to='/Espagne' style={{ textDecoration: 'none' }}>Espagne</Link></li>
  <li><Link to='/Turquie' style={{ textDecoration: 'none' }}>Turquie</Link></li>
</ul>
</div>
    
  )
}

export default CountriesList;