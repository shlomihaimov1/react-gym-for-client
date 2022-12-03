import React from 'react'
import '../style/header.scss'
import { AiFillTwitterSquare } from 'react-icons/ai';

import { HashLink as Link } from "react-router-hash-link";
//import background
import background from '../images/sean-pollock-PhYq704ffdA-unsplash.jpg'
//import clip background
import ClipBackground from '../images/hero-shape.png'
//import doctor picture
import docPic from '../images/doc.png'

function HeaderSection() {
  return (
    //here is the main container with background picture
      <div class="doctor__header" id="link1">
  <div class="doc__clip__background"><img src={ClipBackground}/></div>
  <div class="doc__pic"><img src={docPic}/></div>
  <div className='doc__text__button'>
  <h1>Take best quality<br></br>treatment for <span>Crutches</span>.</h1>
  <p>The art of medicine consists in amusing the patient while nature cures the disease.<br></br>Treatment without prevention is simply unsustainable.</p>
  <button className='doc__button'></button>
  <div className="doc__social">
   <li><AiFillTwitterSquare className='icon' size={30}/></li>
   <li><AiFillTwitterSquare className='icon' size={30}/></li>
   <li><AiFillTwitterSquare className='icon' size={30}/></li>
   <li><AiFillTwitterSquare className='icon' size={30}/></li>
</div>  
  </div>
</div>
  )
}

export default HeaderSection