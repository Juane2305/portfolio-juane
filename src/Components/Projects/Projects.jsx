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
    Aos.init({duration: 2500});
  },[])

  const projects = {
    elizca:[
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
    ],
    calicata:[
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
    ],
    peseguros:[
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
  }

    

    return (
      <div className='bg-[#E8E8D8]'>
        <h1 className='text-[2rem] lg:text-[3rem] pt-10 text-[#2B3033] font-bold text-center' data-aos="fade-right">{t("projects")}</h1>
        <div className='w-full flex justify-center items-center bg-purple-400 mt-20 mb-5' data-aos="fade-up">
          <h2 id="projects" className="text-purple-950 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3" >
            ELIZCA
          </h2>
        </div>
        <div data-aos="fade" id="elizca" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.elizca.map((elizca) => (
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
        <div className='w-full flex justify-center items-center bg-yellow-100 mt-20 mb-5'  data-aos="fade-up">
          <h2 id="projects" className="text-yellow-600 font-black text-[30px] sm:text-[40px] text-center cursor-default z-20 py-3">
            CALICATA
          </h2>
        </div>
        <div data-aos="fade" id="elizca" className="px-16 lg:px-36 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="flip-down"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.calicata.map((elizca) => (
                <CarouselItem key={elizca.id} className="flex justify-center">
                <a href="https://calicatatoursandtravel.tur.ar/" target='_blank'>
                  <Card className="xl:w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-1 xl:p-3 bg-gradient-to-tr from-[#505528] to-[#e2e181] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={elizca.image} alt="" className="shadow-sombra-imagenes xl:w-full xl:h-full"/>
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
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.peseguros.map((elizca) => (
                <CarouselItem key={elizca.id} className="flex justify-center">
                <a href='https://pizzolatoelizondoseguros.com/' target='_blank'>
                  <Card className="xl:w-[60rem] border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-1 xl:p-3 bg-gradient-to-tr from-[#1e1e41] to-[#122a77] gap-5 lg:gap-0 shadow-sombra-imagenes w-full">
                        <img src={elizca.image} alt="" className="shadow-sombra-imagenes xl:w-full xl:h-full"/>
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