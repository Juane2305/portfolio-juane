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

const Calicata = () => {

    useEffect(()=>{
        Aos.init(
          {duration: 2500}
        );

      },[])
        

      const calicata=[
          {
            id: 1,
            image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606705/calicata1_f7eaj4_hv5bol.jpg"
          },
          {
            id: 2, 
            image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606777/calicata2_xlwkwh_gnobbc.jpg"
          },
          {
            id: 3, 
            image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606792/calicata3_ulisyt_jg0cze.jpg"
          },
          {
            id: 4,
            image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606812/calicata5_g8gpwj_m7qsaz.jpg"
          },
          {
            id: 5,
            image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1716606804/calicata4_diegh1_woc57u.jpg"
          }
        ]
      

    
    return (
      <div className='w-full'>
       <div className='w-full flex justify-center items-center bg-yellow-100 mt-20 mb-5'  data-aos="fade-up">
          <h2 id="projects" className="text-yellow-600 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3">
            CALICATA
          </h2>
        </div>
        <div  id="calicata" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {calicata.map((calicata) => (
                <CarouselItem key={calicata.id} className="flex justify-center">
                <a href="https://calicatatoursandtravel.tur.ar/" target='_blank'>
                  <Card className="xl:w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-1 xl:p-3 bg-gradient-to-tr from-[#505528] to-[#e2e181] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={calicata.image} alt="" className="shadow-sombra-imagenes xl:w-full xl:h-full"/>
                      </CardContent>
                  </Card>
                </a>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="border-palette-500 text-yellow-800 outline-none hover:opacity-80 hover:bg-yellow-500 hover:text-white transform hover:scale-105 duration-500"/>
          <CarouselNext className="border-palette-500 text-yellow-800 outline-none hover:opacity-80 hover:bg-yellow-500 hover:text-white transform hover:scale-105 duration-500"/>
          </Carousel>
        </div>
      </div>
    );
};

export default Calicata;