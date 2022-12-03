import React from 'react'
import '../style/ContactInfo.scss'
import dp from '../images/avatar2.png'
function ContactInfo() {
  return (
    <div className='contactInfo' id='link3'>
     <h1>Who We Are</h1>
     <div className='line'></div>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
Lorem Ipsum the industry's standard dummy text.</p>
 <div className='contact__info__back container'>
 <div className='contact__info__grid container'>
        <div className='contact__info__text'>
          <h1>A hospital is a health care institution providing patient treatment with specialized medical</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip. Commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip. Commodo consequat. Sed do eiusmod tempor incidid unt labore et dolore magna aliqua.
          </p>
{/* user picture */}
<div className='dp_img_text'>
<div><img src={dp}/></div>
<div><h1>David Ambrose</h1><p>Founder & Director</p></div>
</div>
        </div>
        <div className='contact__info__card'>
          {/* the card with info */}
          <h1>Weekly Timetable</h1>
          {/* first time table */}
          <div className='time__slot'>
            <p>Monday</p>
            <p>8:00am–7:00pm</p>
          </div>

          <div className='time__slot'>
            <p>Monday</p>
            <p>8:00am–7:00pm</p>
          </div>

          <div className='time__slot'>
            <p>Monday</p>
            <p>8:00am–7:00pm</p>
          </div>

          <div className='time__slot'>
            <p>Monday</p>
            <p>8:00am–7:00pm</p>
          </div>

          <div className='time__slot'>
            <p>Monday</p>
            <p>8:00am–7:00pm</p>
          </div>


          <div className='time__slot'>
            <p>Monday</p>
            <p>8:00am–7:00pm</p>
          </div>


          {/* bottom call now */}

          <div className='contact__card__phone'>
<div><img src={dp}/></div>
<div><p>Call Now</p><h1>(+01) - 234 567 890</h1></div>
</div>
          
        </div>
      </div>
 </div>
    </div>
  )
}

export default ContactInfo