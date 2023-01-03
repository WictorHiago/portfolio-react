import React from 'react';
import photo from '../assets/img/imagem02012023.png';
import Button from '../components/Button';
/* CSS */
import Styles from '../assets/css/Styles.css';
import stylesButtons from '../assets/css/Buttons.css';
const About = () => {
   return (
      <div className="about-container" style={Styles}>
         <div className="texto-apresentacao">
            <h1>Developer Backend NodeJs</h1>
            <p className="">
               Lorem ipsum <span className="my-name">W Hiago Souza</span> is
               placeholder text commonly used in the graphic, print, and
               publishing industries for previewing layouts and visual mockups.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="button-box" style={stylesButtons}>
               <Button />
            </div>
         </div>
         <div className="imagem">
            <img src={photo} alt="" />
         </div>
      </div>
   );
};

export default About;
