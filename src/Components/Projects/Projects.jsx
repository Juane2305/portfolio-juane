import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GoLinkExternal } from "react-icons/go";
import { Card, CardContent } from "@/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"


import "preline/preline";

const Projects = () => {
    
  const { t, i18n } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])

  const projects = {
    elizca:[
      {
        id: 1,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715143536/elizca1_qaot1j.png"
      },
      {
        id: 2, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715143536/elizca2_okmqbx.png"
      },
      {
        id: 4, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715143536/elizca3_daazvh.png"
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715143536/elizca4_kjzig9.png"
      },
      {
        id: 6, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715143536/elizca5_jhtpxf.png"
      }
    ],
    calicata:[
      {
        id: 1,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715626074/calicata1_f7eaj4.png"
      },
      {
        id: 2, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715626074/calicata2_xlwkwh.png"
      },
      {
        id: 3, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715626074/calicata3_ulisyt.png"
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715626074/calicata5_g8gpwj.png"
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715626074/calicata4_diegh1.png"
      },
      {
        id: 6,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715626236/calicata6_qytck2.png"
      }
    ],
    peseguros:[
      {
        id: 1,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715627516/pe1_t9sawl.png"
      },
      {
        id: 2, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715627517/pe2_rxmhgo.png"
      },
      {
        id: 3, 
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715627515/pe3_dw2d0w.png"
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715627516/pe4_u6taqh.png"
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1715627516/pe5_iepsnu.png"
      }
    ]
  }

    

    return (
      <div className='bg-[#E8E8D8] hidden'>
        <h1 className='text-[4rem] pt-10 text-[#2B3033] font-bold text-center'>Some of my best projects</h1>
        <div className='w-full flex justify-center items-center bg-purple-400 mt-20 mb-5' data-aos="fade-up">
          <h2 id="projects" className="text-purple-950 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3" >
            ELIZCA
          </h2>
        </div>
        <div data-aos="fade" id="elizca" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          data-aos-duration="2500"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.elizca.map((elizca) => (
                <CarouselItem key={elizca.id} className="flex justify-center">
                <a href="https://www.elizca.com/" target='_blank'>
                  <Card className="w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-3 bg-gradient-to-tr from-[#0e0719] to-[#7f4ec7]  lg:h-[40rem] sm:h-[37rem] h-[30rem] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={elizca.image} alt="" className="shadow-sombra-imagenes w-full h-full"/>
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
        <div className='w-full flex justify-center items-center bg-yellow-100 mt-20 mb-5'  data-aos="fade-up">
          <h2 id="projects" className="text-yellow-600 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3">
            CALICATA
          </h2>
        </div>
        <div data-aos="fade" id="elizca" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          data-aos-duration="2500"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.calicata.map((elizca) => (
                <CarouselItem key={elizca.id} className="flex justify-center">
                <a href="https://calicatatoursandtravel.tur.ar/" target='_blank'>
                  <Card className="w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-3 bg-gradient-to-tr from-[#505528] to-[#e2e181]  lg:h-[40rem] sm:h-[37rem] h-[30rem] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={elizca.image} alt="" className="shadow-sombra-imagenes w-full h-full"/>
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

        <div className='w-full flex justify-center items-center bg-blue-300 mt-20 mb-5'  data-aos="fade-up">
          <h2 id="projects" className="text-blue-900 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3">
            PE SEGUROS
          </h2>
        </div>
        <div data-aos="fade" id="elizca" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          data-aos-duration="2500"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.peseguros.map((elizca) => (
                <CarouselItem key={elizca.id} className="flex justify-center">
                <a href='https://pizzolatoelizondoseguros.com/' target='_blank'>
                  <Card className="w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-3 bg-gradient-to-tr from-[#1e1e41] to-[#122a77]  lg:h-[40rem] sm:h-[37rem] h-[30rem] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={elizca.image} alt="" className="shadow-sombra-imagenes w-full h-full"/>
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

export default Projects;