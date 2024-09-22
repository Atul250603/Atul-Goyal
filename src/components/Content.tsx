import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Content(){
    return(
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-end">
                <Navbar/>
            </div>
            <div className="p-3 w-full flex-grow mt-6 bg-white rounded-xl xs:p-6 overflow-y-auto">
                <Outlet/>
            </div>
        </div>
    )
}
export default Content;