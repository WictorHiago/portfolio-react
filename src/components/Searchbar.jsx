import React from 'react';
import styleSearchbar from '../assets/css/Searchbar.css';
const Searchbar = () => {
   return (
      <>
         <div className="search-bar" style={styleSearchbar}>
            <input type="text" placeholder="Search" />
         </div>
      </>
   );
};

export default Searchbar;
