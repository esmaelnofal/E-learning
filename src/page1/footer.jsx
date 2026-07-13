import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='footer'>
         <div className='footerPart1' style={{backgroundColor: '#213145'}}>
            <h1>
                50k+
            </h1>
            <p style={{color: 'grey'}}>
                Active Students
            </p>
         </div>
           <div className="divider"></div>

         <div className='footerPart2' style={{backgroundColor: '#213145'}}>
              <h1 style={{color: 'white'}}>
                2k+
            </h1>
            <p style={{color: 'grey'}}>
                Expert Instructors
            </p>
         </div>
           <div className="divider"></div>

         <div className='footerPart3' style={{backgroundColor: '#213145'}}>
             <h1 style={{color: 'white'}}>
                1k+
            </h1>
            <p style={{color: 'grey'}}>
                Premium Courses
            </p>
         </div>
           <div className="divider"></div>

         <div className='footerPart4' style={{backgroundColor: '#213145'}}>
             <h1 style={{color: 'white'}}>
                98%
            </h1>
            <p style={{color: 'grey'}}>
                 Success Rate
            </p>
         </div>
    </div>
  )
}
