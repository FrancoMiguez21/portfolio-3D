import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { github } from "../assets";

import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import SectionHeading from "./SectionHeading";
import { projects } from "../constants";

const ProjectCard = ({index, name, description, tags, image, source_code_link, live_site_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
       <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          <div className='absolute inset-0 flex flex-col justify-center p-3 gradient-overlay opacity-0 hover:opacity-100 transition-opacity cursor-pointer bg-gradient-to-t from-[#06062B]/70 to-[#6345FB]/70 rounded-2xl backdrop-blur-sm'
            onClick={() => window.open(live_site_link, "_blank")}>

            <button
              className='text-white px-4 py-2 rounded-lg font-semibold  transition-colors absolute top-[43%] right-[33%] '>
              Ver Demo
            </button>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
     <SectionHeading
          headText="Mis trabajos"
          title="Proyectos"
          text="Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos concretos de lo que he aprendido en mis estudios. Cada proyecto está brevemente descrito e incluye enlaces a repositorios de código y demostraciones en vivo. Esto refleja mi capacidad para resolver problemas complejos, trabajar con diversas tecnologías y gestionar proyectos de manera efectiva.
          "
      />
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (Works, "work")