import { services } from "../constants";
import {Tilt} from "react-tilt"; 
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hooks/SectionWrapper"

type service = 
{
    index: number,
    title:string,
    icon:string
}
const ServiceCard = ( {index,title,icon}: service) => (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        data-options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Perfil</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px]"
      >
      <p className="text-justify">
        Tengo conocimientos en desarrollo de aplicaciones web usando metodologías de desarrollo ágiles como
        SCRUM. También cuento con conocimientos en lenguajes de programación, experiencia en la creación de
        Bases de datos y en la administración de servidores con Cpanel, AWS y Google Clud Platform.
      </p>
      <p className="text-justify">
      Estoy en busca de seguir aprendiendo nuevas técnicas y tecnologías que me permitan brindar una mejor
        solución a mis clientes o empresas que requieran mis servicios
      </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title}  index={index} {...service} />
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(About,'about');