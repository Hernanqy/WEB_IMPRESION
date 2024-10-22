import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Bgimg from "./assets/lowpoly.png"
import Productos from "./components/Productos/Productos";

const bgStyle= {
  backgroundImage: `url(${Bgimg})` ,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Productos/>
    </div>
  );
};

export default App;
