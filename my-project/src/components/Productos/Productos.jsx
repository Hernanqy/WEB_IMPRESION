

import { AiTwotoneTrophy } from "react-icons/ai";
import {motion} from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { HiGiftTop } from "react-icons/hi2";
import { AiOutlineRuby } from "react-icons/ai";
const ProductosData = [
  {
    id: 1,
    title: "Regalos origiales",
    desc: "Sorprende con creatividad, sorprende con Realiza-3D",
    icon: <HiGiftTop />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Objetos de diseño",
    desc: "Donde la funcionalidad se encuentra con el arte",
    icon: <AiOutlineRuby />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Promocion para empresas",
    desc: "Soluciones publicitarias en 3D para destacar tu empresa",
    icon: <AiTwotoneTrophy />
    ,
    delay: 0.3,
  },
];

const Productos = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl text-center font-bold">
              ¿Que Ofrecemos para Vos?
            </h1>
            <p className="text-gray-500">
            En Realiza-3D impulsamos ideas a través de la impresión 3D, ofreciendo soluciones innovadoras que se adaptan tanto a empresas que buscan destacar su marca, optimizar procesos o explorar prototipos y productos personalizados, como a quienes desean materializar objetos más sencillos o proyectos personales. Con atención a cada detalle y dedicación en cada proyecto, brindamos un servicio de calidad que apoya desde campañas de promoción hasta piezas técnicas. En Realiza-3D, creemos en la tecnología al servicio de la creatividad y la calidad para todos.
            </p>
          </div>
          {ProductosData.map((item) => {
            return (
              <motion.div
              variants={SlideLeft(item.delay)}
              initial= "hidden"
              whileInView="visible"
              key={item.id} className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-cyan-100 rounded-xl hover:shadow-[
            0_0_22px_0_rgba(0,0,0,0.15)]">
                <div className="text-4xl">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Productos;
