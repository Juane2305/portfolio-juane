import React, { Suspense, lazy, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import "preline/preline";

// Importa los componentes de proyecto de forma diferida usando React.lazy
const ProjectsElizca = lazy(() => import('./Elizca/Elizca'));
const ProjectsCalicata = lazy(() => import('./Calicata/Calicata'));
const ProjectsPeseguros = lazy(() => import('./PE/PEseguros'));

const Projects = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Inicializa Aos solo cuando el componente se monta
    Aos.init({ duration: 2500 });
    Aos.refresh(); // Actualiza AOS después de la inicialización
  }, []);

  return (
    <div className='bg-[#E8E8D8]'>
      <h1 className='text-[2rem] lg:text-[3rem] pt-10 text-[#2B3033] font-bold text-center' data-aos="fade-right">{t("projects")}</h1>
      
      {/* Utiliza Suspense para manejar la carga diferida de los proyectos */}
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsElizca />
        <ProjectsCalicata />
        <ProjectsPeseguros />
      </Suspense>
    </div>
  );
};

export default Projects;