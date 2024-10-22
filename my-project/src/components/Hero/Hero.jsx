import {FaPlay} from "react-icons/fa"
import heroimg from "./../../assets/heroimg.png"
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/*brand info*/}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
              variants={SlideRight(0.6)}
              initial= "hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
                El mundo 3d a tu <span className="text-sky-800">Alcance</span>{" "}
              </motion.h1>
              <motion.p
              variants={SlideRight(1.2)}
              initial= "hidden"
              animate="visible" className="text-gray-800 xl:max-w-[600px] font-bold">
                Transformamos ideas en realidades tangibles a través de la impresión 3D, realidad virtual y experiencias inmersivas en el fascinante mundo tridimensional.
              </motion.p>
              {/*buton section*/}
              <motion.div 
              variants={SlideRight(1.5)}
              initial= "hidden"
              animate="visible"
              className="flex justify-center items-center gap-8 md:justify-start">
                <button className="bg-cyan-500 flex items-center gap-2 !mt-4">
                    {" "}
                    Pedidos</button>
                <button className="btn flex justify-center gap-2 items-center mt-4">
                    
                    <FaPlay/>
                    Ver Novedades</button>
              </motion.div>
            </div>
          </div>
          {/*hero image*/}
          <div>
            <motion.img 
            variants={SlideLeft(1.6)}
            initial= "hidden"
            animate="visible"
            
            src={heroimg} alt=""  className="w-[350px] md:w-[550px] xl:w-[580px] drop-shadow"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
