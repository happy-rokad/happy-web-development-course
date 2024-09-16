import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const Page = () => {
  return (
      <>
      
          <div className="side_navbar">
            <div class="sidebar">
                <Link to={'/page/appointment'}>Appointment</Link>
                <Link to={'/page/feature'}>Feature</Link>
                <Link to={'/page/team'}>Team</Link>
                <Link to={'/page/testimonial'}>Testimonial</Link>
            </div>

              <div class="content">
                <Outlet/> 
            </div>
          </div>  
          
          
      </>
  )
}

export default Page