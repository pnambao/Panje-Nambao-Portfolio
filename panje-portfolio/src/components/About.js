import React from 'react';
import './About.css';
import aboutImg from '../assets/panje2.jpg';

function About() {
    return (
        <div className="about component__space ">
           <div className="container">
               <div className="row">
                   <div className="col__2">
                       <img src={aboutImg} alt="" className="about__image"/>
                   </div>
                   <div className="col__2">
                    <h1 className="about__heading">
                        About Me
                    </h1>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default About
