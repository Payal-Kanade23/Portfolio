import Button from "./ui/button";
import { FiMenu } from "react-icons/fi";
           
import logo from "./assets/p_logo.png" 
import Sidebar from "./Sitebar";

function Navbar(){
    return (
        <div className="flex justify-between bg-black items-center mx-15"> 
           <div><img src={logo} className=" w-[100px] h-[80px]"/></div>
           
        <div><Sidebar/></div>
        </div>
        
    )
}
export default Navbar;