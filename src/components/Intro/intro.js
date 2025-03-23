import React from 'react';
import './intro.css';
import bg from '../../assets/image1.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
               <span className="hello">Hello,</span>
               <span className="introText">I am <span className="introName">Yashmitha A</span><br />ML developer</span>
               <p className="introPara">Aspirirg AIML engineer open to contribute for the innovative projects.</p>
               <Link><button className="btn"><img src ={btnImg} alt="Hire" className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;