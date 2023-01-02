import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default Header;
