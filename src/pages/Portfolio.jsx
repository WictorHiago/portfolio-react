import React from 'react';
import stylePortfolio from '../assets/css/Porfolio.css';
const Porfolio = () => {
   return (
      <div className="portfolio-container" style={stylePortfolio}>
         <h2>Em construçao</h2>
         <br />
         <a
            href="https://github.com/WictorHiago/crud-api-sequelize/blob/main/README.md"
            target={'blank'}
         >
            Repositório github
         </a>
      </div>
   );
};

export default Porfolio;
