import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";


const Root = () => {

    const {  loading } = useAuth();

    if(loading){
      return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>
  
  }
    return (
        <div>
          
           
           <div className="font-lato max-w-6xl mx-auto">
           <Navbar></Navbar>
           <Outlet></Outlet>
           </div>

            <div>
            <Footer></Footer>
          </div>
        </div>
    );
};

export default Root;