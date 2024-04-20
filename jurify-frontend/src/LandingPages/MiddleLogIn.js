import React, { useState } from 'react'
import LandingNav from '../Components/LandingNav'
import Lawyer from '../images/lawyer.png'
import Client from '../images/client.png'
import Button from '../Components/Button'

function MiddleLogIn() {
  const[client,setClient]=useState(false);
  const[lawyer,setLawyer]=useState(false);
    function LawyerLogIn(){
      if(lawyer==true)
      window.location.href = '/LawyerSignUp';
    }
    function ClientLogIn(){
      if(client==true)
      window.location.href = '/signup';
    }
  return (
    <div >
        <LandingNav />
        <div className='flex w-full h-screen'>

      <div className="LawyerHalf w-1/2 h-screen bg-[#EFEAE3] rounded-lg flex flex-col justify-center items-center "> 
         <h2 className='text-center  uppercase font-[gilroy] font-semibold '>for <span className='text-[green]'>Lawyers</span></h2>
         <div className='flex '>
            <p className='w-1/2 text-2xl pt-5 pl-5 font-[gilroy]'>We are the premier appointment management solution tailored for legal professionals, streamlining scheduling and client management.</p>
         <img src={Lawyer} alt="" className='w-[20vw]'/> 

         </div>
         

            {/* <button className='bg-[#068932] w-[7vw]  h-[3vw] rounded-lg transition-all ease-linear font-[gilroy]  font-bold text-white hover:scale-[1.1]' onClick={()=>LawyerLogIn()}>log in</button> */}
          <Button value='lawyer' />



         
      </div>
      <div className=" client  rounded-lg flex bg-[#EFEAE3] flex-col justify-center items-center w-1/2 h-screen"> 
         <h2 className='text-center  uppercase font-[gilroy] font-semibold'>for <span className='text-[green]'>Clients</span></h2>
         <div className='flex '>
            <p className='w-1/2 text-2xl pt-5 pl-5 font-[gilroy]'>
We offer a cutting-edge appointment booking platform designed for clients seeking legal services, providing seamless scheduling and easy access to professional legal assistance.</p>
         <img src={Client} alt="" className='w-[20vw] ' />

         </div>
         <div>
         <Button value="login"/>
            {/* <button className='bg-[#068932] w-[7vw]  h-[3vw] rounded-lg transition-all ease-linear font-[gilroy]  font-bold text-white hover:scale-[1.1]' onClick={()=>ClientLogIn()}>log in</button> */}
         </div>
         
      </div>
      </div>
    </div>
  )
}

export default MiddleLogIn
