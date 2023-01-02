import React from 'react';
import Styles from '../assets/css/Styles.css';
import Button from '../components/Button';
const Porfolio = () => {
  return (
    <>
      <div className="cards-container-port" style={Styles}>
        <div className="card-box-port"></div>
        <div className="card-box-port"></div>
        <div className="card-box-port"></div>
        <div className="card-box-port"></div>
        <div className="card-box-port"></div>
        <div className="card-box-port"></div>
      </div>
      <div>
        <Button />
      </div>
    </>
  );
};

export default Porfolio;
