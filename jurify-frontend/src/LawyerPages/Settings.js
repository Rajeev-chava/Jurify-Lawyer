import React from 'react'

import AppointmentDuration from '../Components/appointmentDuration'
import SettingsCenter from '../Components/settingsCenter'
function Settings(props) {
  return (
    <div className='   flex justify-end  '>
       
            <SettingsCenter sidebar={props.sidebar}/>  
            <div >
            <AppointmentDuration/>
            </div>
         
          

      
    </div>
  )
}

export default Settings
