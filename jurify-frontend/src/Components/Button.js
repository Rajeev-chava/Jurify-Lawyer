import React from 'react'
import './ButtonCss.css'
function Button(props) {
  const login=()=>{ 
    if(props.value=='lawyer')
    window.location.href = '/LawyerSignUp';
    if(props.value=='login')
    window.location.href = '/signup';
  }
  return (
    <div>
      <button className="cssbuttons-io w-[6vw] h-[3vw] flex justify-center items-center" onClick={login}>
  <span > login</span>
     </button>

    </div>
  )
}

export default Button
