import React from 'react'
import '../style/header.scss'
import headerImg from '../images/G-FitLogo.png'
function HeaderSection() {
  return (
    <div className='gym__header'>
      <div className=''>
      </div>
     {/* the text on the picture */}
    <div className='gym__header__text'>
      <img src={headerImg}/>
      <h1>תשיגו את המטרות שלכם עם מאמן כושר אישי !</h1>
      <h5>אצלנו תוכלו למצוא מגוון חבילות אימונים המתאימה לכם בדיוק !</h5>
      <button className='gym__header__button'> המטרות שלכם</button>
      </div>
    </div>
  )
}

export default HeaderSection