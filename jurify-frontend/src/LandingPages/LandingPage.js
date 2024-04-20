import React from 'react'
import './LandingPage.css'
import gsap, { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react';
// import { Timeline } from 'gsap/gsap-core';
import  { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingNav from '../Components/LandingNav';
import video1 from '../videos/v1.mp4'


gsap.registerPlugin(ScrollTrigger);
function LandingPage1() {
   

    useEffect(()=>{
        function loaderAnimation() {
            var loader = document.querySelector("#loader")
            setTimeout(function () {
                loader.style.top = "-100%"
            }, 4200)
        }
        loaderAnimation();
    },[])
    
    
    
  
    useGSAP(()=>{
        const tl=gsap.timeline();
        tl.from('.lnav,.lnavPart1,.lnavPart2,.lelem',{
            y:-100,
            opacity:0,
            duration:1,
            stagger:0.5,
            delay:5
        })
        tl.from('.firstPageText',{
            y:50,
            opacity:0,
            stagger:0.5
        })
        // tl.from('.videomain',
        // {
        //     opacity:0,
        //     y:50,
        //     scrollTrigger:'.videomain'
   

        // })
        
       
    })
    
  return (
    <div className='hii' >
         <div id="loader">
        <h1>ENVIRONMENTS</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
    </div>
        <LandingNav />
        <div id="fixed-image">

    </div>
       
        <div className="main" >
            <div className="firstPage" >
                <div className='firstPageText' ><i>Seamless Scheduling </i></div>
                <div className='firstPageText flex align-items-center justify-center'>
                     <video  autoPlay loop muted src='https://cdn.cuberto.com/cb/projects/cisco/cover.mp4'></video>
                      <div className='text pt-[5vw]'><i>for Legal Excellence</i> </div></div>
                <div className='firstPageText' ><i>digitally crafted for you</i></div>
            </div>
            <div className="secondPage rounded-xl  w-[100vw] h-[100vh]">
            <video  className='videomain' autoPlay muted loop src={video1} />
            </div>
             <div className='page3 w-[100vw] h-[100vh] bg-yellow-300'>
             <div id="page2">
            <div id="moving-text">
                <marquee behavior=""  scrollamount="30" direction=""> <div className="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div>
                <div className="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div>
                <div className="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div> </marquee>
{/*                
                <div className="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div>
                <div className="con">
                    <h1>EXPERIENCES</h1>
                    <div id="gola"></div>
                    <h1>CONTENT</h1>
                    <div id="gola"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="gola"></div>
                </div> */}
            </div>
            <div id="page2-bottom">
                <h1>We are a group of design- driven, goal-focused creators,  producers, and designers who
                    believe that the details  make all the difference.</h1>
                <div id="bottom-part2">
                    {/* <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" */}
                        {/* alt=""> */}
                    <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas
                        into reality. We’re here to partner with you through every step of the process and know that
                        relationships are the most important things we build.</p>
                </div>
            </div>
            <div id="gooey">

            </div>
            </div>
            <div id="page3">
            <div id="elem-container">
                <div id="elem1" className="elem"
                    data-image="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2> INSTAGRAM</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8">
                    <div className="overlay"></div>
                    <h2>TWITTER</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>GITHUB</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>YOUTUBE</h2>
                </div>
                
            </div>
        </div>

             </div>
        </div>
    </div>
  )
}

export default LandingPage1
