import React from 'react';
import { Separator } from "@/Components/ui/separator"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Atropos from 'atropos/react';

const AboutMe = () => {

    useEffect(()=>{
        Aos.init({duration: 1000});
      },[])

    const certifications = [
        {
            id: 1,
            name: 'Certified Tech Developer',
            year: 2022,
            school: 'Digital House',
            description: 'Graduated from the Certified Tech Developer program, a cutting-edge initiative created in collaboration by Globant and Mercado Libre, offered in partnership with Digital House. This comprehensive program spanned over 1500 hours of theoretical and practical instruction, providing a solid foundation in technology, development, and teamwork.'
        },
        {
            id: 2,
            name: 'Professional Developer',
            year: 2023,
            school: 'Henry Bootcamp',
            description: 'Graduated as a Full Stack Web Developer from "Henry" bootcamp, having successfully completed the program within a period of 4 months, including collaborative projects in teams of up to 8 people.'
        }
    ]


    return (
        <div className='bg-[#E8E8D8] bg-cover pb-32'>
            <h1 className='text-[4rem] pt-10 text-[#2B3033] font-bold text-center' data-aos="fade-right" data-aos-duration="2000">Who am I?</h1>
            <div className='flex justify-center lg:justify-evenly items-center pt-5 pb-10'>
                <div className=' px-5 lg:w-[50%] flex items-center text-[20px] md:text-[25px] font-semibold text-[#2B3033]'>
                    <p className='cursor-default'>Hey there! I'm Juan Emilio Elizondo, a full-stack developer based in Argentina, specializing in JavaScript (React and Node.js), PostgreSQL, HTML, CSS, and Tailwind CSS. Alongside a partner, I co-founded ELIZCA, where we craft diverse websites tailored to various needs. Let's collaborate and bring your web projects to life with <a href='https://www.elizca.com' target='_blank' className='text-[#7B4896] hover:underline'>ELIZCA!</a></p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1707365993/Group_12_1_t7rrh5.svg" alt="" className='hidden lg:block w-[22rem]'/>
                </div>
            </div>
            <div className='flex justify-center py-10 '>
                <Separator className="w-[70%] bg-black"/>
            </div>
            <section id='certifications' className=' flex justify-evenly w-full  text-[#2B3033] pt-20'>
                {certifications.map((item)=>(
                    <Atropos className='my-atropos shadow-sm rounded-xl' shadow={false} highlight={false} key={item.id}>
                    <div className='w-[30rem] h-[20rem] bg-[#E8E8D8] rounded-xl' key={item.id}>
                        <div className='border-[#2B3033] border-2 text-[#2B3033] font-light flex justify-between items-center'>
                            <div className='bg-[#7B4896] text-[#F7F7E6] h-[3rem] flex items-center px-10'>
                                {item.school}
                            </div>
                            <div className='pr-5 font-bold'>
                                {item.year}
                            </div>
                        </div>
                        
                        <div className=''>
                            <div className=' pt-3 pb-3 text-[20px]  text-[#2B3033] font-bold'>
                                {item.name}
                            </div>
                            <div className='pt-7 pb-4 font-semibold text-[#2B3033] text-[17px]'>
                                {item.description}
                            </div>
                        </div>
                        
                    </div>
                    </Atropos>
                ))}
            </section>
        </div>
    );
};

export default AboutMe;