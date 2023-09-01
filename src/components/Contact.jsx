import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // para el envio del formulario.

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "../hoc/SectionWrapper";

//template_qs77v4d

//service_dbpq0uv

//5SVJM9J2qxewCgnuk

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_dbpq0uv",
      "template_qs77v4d",
      {
        from_name: form.name,
        to_name: "Franco Miguez",
        form_email: "franco.ymir@gmail.com",
        message: form.message,
      },
      "5SVJM9J2qxewCgnuk"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias, te respondere cuanto antes");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Algo salio mal, prueba de nuevo");
        }
      );
  }
  

  return (
    <>
      <SectionHeading
          headText="Ahora un poco"
          title="Sobre Mi"
          text="Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos concretos de lo que he aprendido en mis estudios. Cada proyecto está brevemente descrito e incluye enlaces a repositorios de código y demostraciones en vivo. Esto refleja mi capacidad para resolver problemas complejos, trabajar con diversas tecnologías y gestionar proyectos de manera efectiva.
          "
      />
    <div className={`mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Ponete en</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>
      <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensaje</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='¡Escribe lo que quieras!'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper (Contact, "contact");