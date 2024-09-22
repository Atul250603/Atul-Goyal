import { useLocation, useNavigate } from "react-router-dom";

function Navbar(){
    const path=useLocation().pathname;
    const navigate=useNavigate()
    return(
        <div className="flex gap-1 xxs:gap-2 xs:gap-4 w-max shadow shadow-slate-400 p-1 xs:p-2 rounded-xl">
            <div className={`p-1 xxs:p-2 text-xs xs:text-base flex flex-col items-center xs-p-3 rounded-2xl cursor-pointer ${(path.trim().toLowerCase()==='/')?"bg-gradient-to-r from-custom-yellow to-custom-red text-white":"bg-slate-300 text-black"}`} onClick={()=>navigate('/')}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={(path.trim().toLowerCase()==='/')?"white":"black"} className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <div className="font-semibold">
                    Home
                </div>
            </div>
            <div className={`p-1 xxs:p-2 text-xs xs:text-base flex flex-col items-center xs-p-3 rounded-2xl cursor-pointer ${(path.trim().toLowerCase()==='/about')?"bg-gradient-to-r from-custom-yellow to-custom-red text-white":"bg-slate-300 text-black"}`} onClick={()=>navigate('/about')}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={(path.trim().toLowerCase()==='/about')?"white":"black"} className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div className="font-semibold">
                    About
                </div>
            </div>
        
            <div className={`p-1 xxs:p-2 text-xs xs:text-base flex flex-col items-center xs-p-3 rounded-2xl cursor-pointer ${(path.trim().toLowerCase()==='/resume')?"bg-gradient-to-r from-custom-yellow to-custom-red text-white":"bg-slate-300 text-black"}`} onClick={()=>navigate('/resume')}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={(path.trim().toLowerCase()==='/resume')?"white":"black"} className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                <div className="font-semibold">
                    Resume
                </div>
            </div>
            <div className={`p-1 xxs:p-2 text-xs xs:text-base flex flex-col items-center xs-p-3 rounded-2xl cursor-pointer ${(path.trim().toLowerCase()==='/work')?"bg-gradient-to-r from-custom-yellow to-custom-red text-white":"bg-slate-300 text-black"}`} onClick={()=>navigate('/work')}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={(path.trim().toLowerCase()==='/work')?"white":"black"} className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="font-semibold">
                    Work
                </div>
            </div>
            <div className={`p-1 xxs:p-2 text-xs xs:text-base flex flex-col items-center xs-p-3 rounded-2xl cursor-pointer ${(path.trim().toLowerCase()==='/contact')?"bg-gradient-to-r from-custom-yellow to-custom-red text-white":"bg-slate-300 text-black"}`} onClick={()=>navigate('/contact')}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={(path.trim().toLowerCase()==='/contact')?"white":"black"} className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div className="font-semibold">
                    Contact
                </div>
            </div>
        </div>
    )
}
export default Navbar;