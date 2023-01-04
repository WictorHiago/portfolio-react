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
            <p>
               Olá eu sou <span className="my-name">Wictor Hiago</span>,
               Desenvolvedor backend Nodejs. Comecei a dar os primeiros passos
               na programação em 2021, desenvolvendo páginas Web com Html e Css,
               logo me encontrei profissionalmente. Assim que larguei meu último
               trabalho, foquei 100% do tempo livre em estudar. Matriculando-se
               em um curso de Desenvolvimendo Web FullStack NodeJs, onde, me
               abriu a mente e portas na carreira de Desenvolvedor. Hoje atuo
               como Dev Backend Junior, e constantemente estou procurando
               aprender novas tecnologias, tais como as mais usadas
               profissionalmente. Sou extremamente dedicado, gosto de trabalhar
               principalmente em equipe. Mas o que mais me motiva todos os dias
               é, uma boa música e uma xícara com café. Legal né. Então, vamos
               bater um papo?
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
