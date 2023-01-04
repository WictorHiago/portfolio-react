import React from 'react';
import { Link } from 'react-router-dom';

// import Contact from '../pages/Contact';

const Button = () => {
   return (
      <Link to="/contact">
         <button className="btn">Contato</button>
      </Link>
   );
};

export default Button;
