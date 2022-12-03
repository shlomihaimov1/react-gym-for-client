import React from 'react'
import '../style/cards.scss'
import { RiLightbulbFlashLine } from 'react-icons/ri';
function Cards() {
  return (
   <div className='card__container' id='link2'>
     <div className='cards container'>
    <div className='card'><div className='icon__circle'><RiLightbulbFlashLine className='card__icon' size={50}/></div>
    <h2>Qualified Doctors</h2>
    <p>Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.</p>
    </div>

    <div className='card'><div className='icon__circle'><RiLightbulbFlashLine className='card__icon' size={50}/></div>
    <h2>Qualified Doctors</h2>
    <p>Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.</p>
    </div>


    <div className='card'><div className='icon__circle'><RiLightbulbFlashLine className='card__icon' size={50}/></div>
    <h2>Qualified Doctors</h2>
    <p>Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.</p>
    </div>
    </div>
   </div>
  )
}

export default Cards