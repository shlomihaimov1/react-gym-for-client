import React from 'react'
import '../style/department.scss'
import { RiLightbulbFlashLine } from 'react-icons/ri';
function Department() {
  return (
    <div className='dep__container' id='link2'>
        <h1>Our department</h1>
     <div className='line'></div>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
Lorem Ipsum the industry's standard dummy text.</p>
    <div className='deps scrollmenu container'>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>


   </div>
  </div>
  )
}

export default Department