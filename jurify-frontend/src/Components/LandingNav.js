import React from 'react'
import logo from '../images/logofinal.png'
function LandingNav() {
  return (
    <div>
      <div className='lnav ' >
            <div className="navPart1" >
            <div className="logo w-[10vw]   bg-cover">  <img src={logo} width={"700px"} alt="" /></div>
              
            </div>
            <div className="lnavPart2" >
                <div className="lelem"><a href="#page3">contact </a> </div>
            
                <div className="lelem"><a href="#page2">vision</a></div>
                <div className="lelem"><a href="/middle">Log in</a></div>
            </div>
        </div>
    </div>
  )
}

export default LandingNav
