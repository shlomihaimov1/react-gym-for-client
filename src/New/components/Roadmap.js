import React from 'react'
import '../style/roadmap.scss'
import img from '../images/cov (1).png'
function Roadmap() {
  return (
    <div className='roadMap'>
        <div className='road__map___inner'>
{/* picture section */}
        <div className='road__picture'>
        <img src={img}/>
         </div>
         {/* text section */}
            <div className='road__text'>
            <h1>למה חשוב להתאמן ?</h1>
            <h5>עילות גופנית הינה גורם משפיע וחד משמעי על המצב הבריאותי, הגופני והמנטלי שלנו; להקנות ידע והבנה על חשיבות עילות גופנית הינה גורם משפיע וחד משמעי על המצב הבריאותי, הגופני והמנטלי שלנו; להקנות ידע והבנה על חשיבות </h5>
            </div>
        </div>
    </div>
  )
}

export default Roadmap