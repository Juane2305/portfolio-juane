import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Card, CardContent } from "@/Components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/Components/ui/carousel"
  import "preline/preline";

const Elizca = () => {

    useEffect(()=>{
        Aos.init(
          {duration: 2500}
        );

      },[])
        

      const elizca=[
        {
          id: 1,
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606470/elizca1_qaot1j_orov5f.jpg"
        },
        {
          id: 2, 
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606598/elizca2_okmqbx_ccnzqn.jpg"
        },
        {
          id: 4, 
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606496/elizca3_daazvh_v4hkur.jpg"
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606637/elizca4_kjzig9_wjwpoo.jpg"
        },
        {
          id: 6, 
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606670/elizca5_jhtpxf_ppyrss.jpg"
        }
      ]
      

    
    return (
      <div className='w-full'>
       <div className='w-full flex justify-center items-center bg-purple-400 mt-20 mb-5' data-aos="fade-up">
          <h2 id="projects" className="text-purple-950 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3" >
            ELIZCA
          </h2>
        </div>
        <div  id="elizca" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {elizca.map((elizca) => (
                <CarouselItem key={elizca.id} className="flex justify-center">
                <a href="https://www.elizca.com/" target='_blank'>
                  <Card className=" xl:w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-1 xl:p-3 bg-gradient-to-tr from-[#0e0719] to-[#7f4ec7] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={elizca.image} alt="" className="shadow-sombra-imagenes xl:w-full xl:h-full"/>
                      </CardContent>
                  </Card>
              </a>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="border-palette-500 text-purple-800 outline-none hover:opacity-80 hover:bg-purple-500 hover:text-white transform hover:scale-105 duration-500"/>
          <CarouselNext className="border-palette-500 text-purple-800 outline-none hover:opacity-80 hover:bg-purple-500 hover:text-white transform hover:scale-105 duration-500"/>
          </Carousel>
        </div>
      </div>
    );
};

export default Elizca;