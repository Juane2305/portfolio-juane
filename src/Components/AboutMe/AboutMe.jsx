import React from 'react';
import { Separator } from "@/Components/ui/separator"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Atropos from 'atropos/react';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {

    useEffect(()=>{
        Aos.init({duration: 1000});
      },[])

      const { t, i18n } = useTranslation()

    const cert = <span>{t("certDeveloper")}</span>
    const henry = <span>{t("henry")}</span>

    const certifications = [
        {
            id: 1,
            name: 'Certified Tech Developer',
            year: 2022,
            school: 'Digital House',
            pdf:'/DigitalHouse.pdf',
            description: cert
        },
        {
            id: 2,
            name: 'Professional Developer',
            year: 2023,
            school: 'Henry Bootcamp',
            pdf:'/HENRY.pdf',
            description: henry
        }
    ]


    return (
        <div className='bg-[#E8E8D8] bg-cover pb-32'>
            <h1 className='text-[2rem] lg:text-[3rem] pt-10 text-[#2B3033] font-bold text-center' data-aos="fade-right" data-aos-duration="2000">{t("whoAmI")}</h1>
            <div className='flex justify-center lg:justify-evenly items-center pt-5 pb-10'>
                <div className=' px-5 lg:w-[50%] flex items-center text-lg md:text-[25px] font-semibold text-[#2B3033]' data-aos="fade-right" data-aos-duration="2000">
                    <p className='cursor-default'>{t("whoAmIInfo")} <a href='https://www.elizca.com' target='_blank' className='text-[#7B4896] hover:underline'>ELIZCA!</a></p>
                </div>
                <div  data-aos="fade-left" data-aos-duration="2000">
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1707365993/Group_12_1_t7rrh5.svg" alt="" className='hidden lg:block w-[22rem]'/>
                </div>
            </div>
            <div className='flex justify-center py-10 '>
                <Separator className="w-[70%] bg-gray-800 animate-pulse"/>
            </div>
            

            {/* VERSION MOBILE */}
            <section id='certificationsDesktop' className='flex lg:hidden justify-evenly w-full gap-28 text-[#2B3033] pt-20 flex-wrap'>
                {certifications.map((item)=>(
                    <div className='w-[18rem]  sm:w-[25rem] bg-[#E8E8D8] rounded-xl shadow-2xl' key={item.id}>
                        <div className='border-[#702d97] border-2 rounded-t-2xl text-[#2B3033] font-light flex justify-between items-center'>
                            <div className='bg-[#7B4896] text-[#F7F7E6] rounded-t-xl h-[3rem] flex items-center px-10 '>
                                {item.school}
                            </div>
                            <div className='pr-5 font-bold'>
                                {item.year}
                            </div>
                        </div>
                        
                        <div className='px-2 py-5 bg-gray-300'>
                            <div className=' pt-3 pb-3 text-[20px]  text-[#2B3033] font-bold'>
                                {item.name}
                            </div>
                            <div className='pt-7 pb-4 font-semibold text-[#2B3033] text-[17px]'>
                                {item.description}
                            </div>
                            <a href={item.pdf} download>
                                <p className='bg-[#7e5c91] rounded-xl text-center py-2 my-3 text-white hover:bg-[#b467dd] '>{t("download")}</p>
                            </a>
                        </div>
                    </div>
                ))}
                <div className='w-[18rem]  sm:w-[25rem] bg-[#E8E8D8] rounded-xl shadow-2xl'>
                    <div className='border-[#702d97] border-2 rounded-t-2xl text-[#2B3033] font-light flex justify-between items-center'>
                        <div className='bg-[#7B4896] text-[#F7F7E6] rounded-t-xl h-[3rem] flex items-center px-10 '>
                            <p>EF SET</p>
                        </div>
                        <div className='pr-5 font-bold'>
                            <p>2023</p>
                        </div>
                    </div>
                        
                    <div className='px-2 py-5 bg-gray-300'>
                        <div className=' pt-3 pb-3 text-[20px]  text-[#2B3033] font-bold'>
                            <p>{t("english")}</p>
                        </div>
                        <div className='pt-7 pb-4 font-semibold text-[#2B3033] text-[17px]'>
                            <a href="EFSETCertificate.pdf" download>
                                <p className='bg-[#7e5c91] rounded-xl text-center py-2 text-white hover:bg-[#b467dd]'>{t("download")}</p>
                            </a>
                        </div>
                    </div>  
                </div>
            </section>
            
            {/* VERSION DESKTOP */}
            <section id='certificationsDesktop' className='hidden  lg:flex justify-evenly w-full  text-[#2B3033] pt-20 flex-wrap '>
                {certifications.map((item)=>(
                    <Atropos className='my-atropos  rounded-xl h-full' shadow={false} highlight={false} key={item.id} > 
                    <div className='w-[30rem] bg-[#E8E8D8] rounded-xl h-full' key={item.id}>
                        <div className='border-[#702d97] border-2 rounded-t-2xl text-[#2B3033] font-light flex justify-between items-center '>
                            <div className='bg-[#7B4896] text-[#F7F7E6] rounded-t-xl h-[3rem] flex items-center px-10'>
                                {item.school}
                            </div>
                            <div className='pr-5 font-bold '>
                                {item.year}
                            </div>
                        </div>
                        
                        <div className='h-[22rem] flex flex-col justify-between bg-gray-300 rounded-b-xl '>
                                <section >
                                    <div className=' pt-3 pb-3 text-[20px]  text-[#2B3033] font-bold px-3'>
                                        {item.name}
                                    </div>
                                    <div className='pt-7 pb-4 font-semibold text-[#2B3033] text-[17px] px-3'>
                                        {item.description}
                                    </div>
                                </section>
                                <a href={item.pdf} download className='px-10'>
                                    <p className='bg-[#7B4896] text-center py-2 my-3 text-[#F7F7E6] hover:bg-[#b467dd] rounded-bl-xl rounded-tr-xl'>{t("download")}</p>
                                </a>
                        </div>
                        
                    </div>
                    </Atropos>
                ))}
            </section>
            <div className=' justify-center hidden lg:flex'>
                <Atropos className='my-atropos  rounded-2xl' shadow={false} highlight={false}>
                    <div className='w-[18rem]  sm:w-[25rem] bg-[#E8E8D8] rounded-xl  mt-24'>
                        <div className='border-[#702d97] border-2 rounded-t-2xl text-[#2B3033] font-light flex justify-between items-center'>
                            <div className='bg-[#7B4896] text-[#F7F7E6] rounded-t-xl h-[3rem] flex items-center px-10 '>
                                <p>EF SET</p>
                            </div>
                            <div className='pr-5 font-bold'>
                                <p>2023</p>
                            </div>
                        </div>
                            
                        <div className=' py-5 bg-gray-300 rounded-b-2xl'>
                            <div className=' pt-3 pb-3 text-[20px]  text-[#2B3033] font-bold px-3'>
                                <p>{t("english")}</p>
                            </div>
                            <div className='pt-7 pb-4 font-semibold text-[#2B3033] text-[17px] px-10'>
                                <a href="EFSETCertificate.pdf" download className=''>
                                    <p className='bg-[#7B4896] rounded-bl-xl rounded-tr-xl text-center py-2 text-white hover:bg-[#b467dd] '>{t("download")}</p>
                                </a>
                            </div>
                        </div>  
                    </div>
                </Atropos>
            </div>
        </div>
    );
};

export default AboutMe;