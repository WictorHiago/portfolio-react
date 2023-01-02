import React from 'react';
import Styles from '../assets/css/Styles.css';
import {
   SiJavascript,
   SiTypescript,
   SiGithub,
   SiMongodb,
   SiHtml5,
   SiCss3,
   SiMysql,
   SiGit,
   SiExpress,
   SiNodedotjs,
   SiUbuntu,
} from 'react-icons/si';
const Skills = () => {
   return (
      <div className="cards-container" style={Styles}>
         <div className="card-box">
            <SiJavascript className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiTypescript className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiGithub className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiMongodb className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiHtml5 className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiCss3 className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiMysql className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiGit className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiExpress className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiNodedotjs className="skill-icons" style={Styles} />
         </div>
         <div className="card-box">
            <SiUbuntu className="skill-icons" style={Styles} />
         </div>
      </div>
   );
};

export default Skills;
