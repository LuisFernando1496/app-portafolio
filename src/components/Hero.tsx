// import { motion } from "framer-motion";
import { styles } from "../styles";
import { banner } from "../assets";

const Hero = () => {
    return (

        <section className={`relative w-full h-screen mx-auto`}>
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#479aed]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        <span className="text-[#479aed]">Fernando Orantes</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Desarrollador web <br className="sm:block hidden" />
                        Full stack
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto">
                <div className="flex felx-col items-start sm:ml-40 mt-60  xl:mt-40">
                    {/* sm mt-60 */}
                    <img className="self-end sm:h-[20%] sm:w-screen md:w-[20%] md:h-[70%] lg:w-[50%] lg:h-[50%] xl:w-[80%] xl:h-[80%] " src={banner} alt="banner" />
                </div>
            </div>

        </section>
    );
}

export default Hero;
