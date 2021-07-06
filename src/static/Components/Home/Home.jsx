import img from "../../../images/dev .png";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="app">
        <img className="logo" src={img} alt="logo"/>
       <div className="app-overlay">
          
        </div>
        <Navbar />
    </div>
   
  );
}

export default Home;
