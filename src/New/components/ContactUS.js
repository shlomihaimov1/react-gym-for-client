import React from 'react'
import '../style/ContactUS.scss'
function ContactUS() {
  return (
    <div className='contact__page'>
       <h1>Make an appointment</h1>
       <div className='line'></div>
    <p>   Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
Lorem Ipsum the industry's standard dummy.</p>

<div className="container">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
        <button className='doc__button'></button>
        </form>
      </div>


    </div>
  )
}

export default ContactUS