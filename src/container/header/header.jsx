import React from 'react';
import './header.css';
import People from "../../assets/people.png";
import AI from "../../assets/ai.png";
const header = () => {
  return (
    <div className="gpt3__header section__padding" id="home" >
  <div className="gpt3__header-content">
    <h1 className="gradient__text">
      Let's Build Something Amazing with GPT-3 OpenAI
    </h1>  
    <p>Yet bed any for travelling assistance undulgence unpleasing not thought all exercise blessin.
      Indulgence way everything hoy alteration boisterous the attachment. Pary we year to order allow asked of.</p>  
    <div className='gpt3_header-content__input'>
      <input type="email" placeholder='Your Email Address'/>
      <button type="button">Get Started</button>
    </div>
    <div className='gpt3__header-content__people'>
<img src={People} alt="people"/>
<p>1600 people requested access a visit in last 24 hours</p>
    </div>
  </div>
  <div className='gpt3__header-image'>
      <img src={AI} alt="ai"/>
    </div>
    </div>
  )
}

export default header
