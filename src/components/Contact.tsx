import SectionWrapper from "../hooks/SectionWrapper";
import { useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";

const Contact = () => {
  // const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // console.log(form);
    emailjs
      .send(
        "service_ayyypzc",
        "template_1k1pev4",
        {
          from_name: form.name,
          to_name: "Fernando",
          from_email: form.email,
          // to_email: form.email,
          message: form.message,
        },
        "KMmh0gPfGAgaUdNYO"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: '¡Mensaje enviado!. Gracias por escribirme, te contactare pronto.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      );
  }
  return (
    <div
    className="w-[100%]"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* <p className={styles.sectionSubText}>Ponerse en contacto</p> */}
        <h3 className={styles.heroHeadText}>Contacto.</h3>

        <form

          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              // placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Correo</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              // placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              // placeholder="What do you want to say?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");