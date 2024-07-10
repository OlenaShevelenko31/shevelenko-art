import React from 'react'
import photo2 from '../assets/photo2.jpg'

function home() {
  return (
    <>    
    <div>
    </div>
    <div className='home_box'>
      <div>
      <img src={photo2} alt="photo2" className='home_photo'  />

      </div>
      <div>
         <h1 className='home_name'>Olena Shevenko</h1>
      </div>

    </div>

    </>

  )
}

export default home