import Atropos from 'atropos/react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Main = () => {
    return (
      <div>
        <div className="h-screen hidden md:flex bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1708548315/Abstract_Paper_1_qfzipb.svg')] bg-center bg-cover bg-fixed justify-center items-center">
          <Atropos className="my-atropos w-[65rem] shadow-2xl">
            <div className="flex justify-center items-center bg-[#E8E8D8]  rounded-2xl ">
              <img
                src="https://res.cloudinary.com/dfschbyq2/image/upload/v1707361261/juane-_kbdkmx.png"
                alt=""
                className="w-[30rem]"
              />
              <div className="flex flex-col justify-center items-center text-[3rem] font-bold">
                <h1 id='title' className='text-[#2B3033]'>Hi, I'm Juane Elizondo</h1>
                <h2 className="text-[#4D3E6B]">Fullstack Developer</h2>
                <div className='flex space-x-5 pt-5'>
                  <a href="https://www.linkedin.com/in/juan-emilio-elizondo/" target='_blank'><FaLinkedin className='transform hover:scale-110 duration-700'/></a>
                  <a href="https://github.com/Juane2305" target='_blank'><FaGithub className='transform hover:scale-110 duration-700'/></a>
                </div>
              </div>
            </div>
          </Atropos>
        </div>
      </div>
    );
};

export default Main;