import React from 'react'
import '../style/faq.scss'
import logo1 from '../logo/4.png'
import logo2 from '../logo/4.png'
import logo3 from '../logo/4.png'
import logo4 from '../logo/4.png'
import logo5 from '../logo/4.png'
function Faq() {
  return (
    <div className='faq'>
    {/* heading */}
    <h1>מה כדאי לבחור G-Fit ?</h1>
    {/* fad grid */}
        <div className='faq__inner'>
            <div className='faq__logo'><img src={logo1}/></div>
            <div className='faq__logo'><img src={logo2}/></div>
            <div className='faq__logo'><img src={logo3}/></div>
            <div className='faq__logo'><img src={logo4}/></div>
            <div className='faq__logo'><img src={logo5}/></div>
        </div>
    </div>
  )
}

export default Faq