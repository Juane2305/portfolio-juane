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

const PEseguros = () => {

    useEffect(()=>{
        Aos.init(
          {duration: 2500}
        );

      },[])
        

    const peseguros = [
        {
          id: 1,
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606903/pe1_t9sawl_fdvdkw.jpg"
        },
        {
          id: 2, 
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606908/pe2_rxmhgo_ozgywj.jpg"
        },
        {
          id: 3, 
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606915/pe3_dw2d0w_aywedn.jpg"
        },
        {
          id: 4,
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606922/pe4_u6taqh_s6unnl.jpg"
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606928/pe5_iepsnu_rmr7st.jpg"
        }
      ]

    
    return (
      <div className='w-full'>
       <div className='w-full flex justify-center items-center bg-blue-300 mt-20 mb-5' data-aos="fade-up">
          <h2 id="project3" className="text-blue-900 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3">
            PE SEGUROS
          </h2>
        </div>
        <div id="peseguros" data-aos="flip-down" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {peseguros.map((peseguros) => (
                <CarouselItem key={peseguros.id} className="flex justify-center">
                <a href='https://pizzolatoelizondoseguros.com/' target='_blank'>
                  <Card className="xl:w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-1 xl:p-3 bg-gradient-to-tr from-[#1e1e41] to-[#122a77] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={peseguros.image} alt="" className="shadow-sombra-imagenes xl:w-full xl:h-full"/>
                      </CardContent>
                  </Card>
                </a>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="border-palette-500 text-blue-800 outline-none hover:opacity-80 hover:bg-blue-500 hover:text-white transform hover:scale-105 duration-500"/>
          <CarouselNext className="border-palette-500 text-blue-800 outline-none hover:opacity-80 hover:bg-blue-500 hover:text-white transform hover:scale-105 duration-500"/>
          </Carousel>
        </div>
      </div>
    );
};

export default PEseguros;