import React from "react";
import { Link } from 'react-router-dom';
import AboutMe from "../assets/about.jpg";

const About = () =>{
    return(
        <div className='main-container'>
            <div className="about-con">
                <div className="about-img">
                    <img src={AboutMe} alt="" />
                </div>

                <div className="about-txt">
                    <h1 className="name">Jessica Santos</h1>
                    <h2>A dedicated Graphic Designer</h2>
                    <div className="horizontal-line"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi exercitationem fuga expedita, ratione quis laboriosam reiciendis amet magnam facilis et voluptatum alias fugit officiis nobis voluptatibus. Amet hic eius corrupti!
                    </p>
                    <div className="about-btn">
                        <button><Link to={"/"}>Go back to home</Link></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;