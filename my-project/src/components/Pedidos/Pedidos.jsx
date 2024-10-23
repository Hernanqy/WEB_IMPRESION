import wh from "./../../assets/wh.png"

const Pedidos = () => {
  return (
    <div>
    <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7  flex justify-center items-center flex-col ">
      <a href="http://wa.me/542284554038"><img src={wh} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-32 w-32  object-cover object-center group-hover:opacity-75"/>
    </a>
    <h1 className="  text-cyan-600">Hace click <span className="text-blue-600">2284-554038</span></h1>
    
    </div>
    <div><h2 className=" justify-center text-2xl flex items-center gap-2 font-bold uppercase">¡¡¡ Esperamos tu consulta !!!</h2></div>
    
  </div>
  )
}

export default Pedidos