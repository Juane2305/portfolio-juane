import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {

    useEffect(()=>{
        Aos.init({duration: 1000});
      },[])

    return (
        <div className='flex justify-center' id='technologies'>
            <div className='pt-10 pb-24 bg-[#E8E8D8] w-full'>
                <h1 className='text-[2rem] lg:text-[4rem] py-10  text-[#2B3033] font-bold text-center' data-aos="fade-down" data-aos-duration="2000">My knowledge</h1>
                <div className='flex lg:flex-col justify-center items-center px-10'>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-x-16 gap-y-10 lg:gap-y-0 lg:pt-16' data-aos="fade-up" data-aos-duration="2000"> 
                        <a className='transform hover:scale-110 duration-700' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547348/JavaScript-logo_p4fhwa.png" alt="javascript" width="85" height="85"/> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547438/css-logo_pbvmya.png" alt="css3" width="60" height="60"/> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547556/React-Logo-PNG-Pic_hyhu7k.png" alt="react" width="85" height="85"/> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547673/Redux_p6ri92.png" alt="redux" width="85" height="85"/> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547731/590px-Node.js_logo.svg_v0lvmk.png" alt="nodejs" width="95" height="105"/> </a>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-x-16 gap-y-10 lg:gap-y-0 lg:pt-16' data-aos="fade-up" data-aos-duration="2000">    
                        <a className='transform hover:scale-110 duration-700' href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547774/tailwindcss_logo_icon_170649_lqx8hs.png" alt="tailwindcss" width="155" height="85"/> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://expressjs.com" target="_blank"><img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547300/expressjs_logo_nkfd3n.png" background-color="#ffffff" alt="express" width="125" /> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547840/postman-logo-0087CA0D15-seeklogo.com_nsinvw.png" alt="postman" width="75" height="75" /> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547873/Postgresql_elephant.svg_fok2bc.png" alt="postgresql" width="75" height="75"/> </a>
                        <a className='transform hover:scale-110 duration-700' href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708547923/git-icon_n7pu86.png" alt="git" width="75" height="75"/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;