function SidePanel() {
    return (
        <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col justify-center overflow-y-auto">
            <div className="text-5xl text-center font-bold">Atul Goyal</div>
            <div className="text-2xl my-4 text-center text-slate-500">Full Stack Developer</div>
            <div className="flex gap-4 justify-center">
                <div className="bg-custom-blue p-3 rounded-xl cursor-pointer"><div className="w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg></div></div>
                <div className="bg-custom-blue p-3 rounded-xl cursor-pointer"><div className="w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></div></div>
                <div className="bg-custom-blue p-3 rounded-xl cursor-pointer"><div className="w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#000000" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></div></div>
            </div>
            <div className="flex flex-col justify-center bg-custom-blue p-8 mt-10 rounded-xl">
                <div className="flex items-center gap-4 p-4 border-b-2 border-b-slate-300">
                    <div><div className="w-[20px] h-[20px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#customGradient)" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></div></div>
                    <div>
                        <div className="text-slate-500 font-semibold">Phone</div>
                        <div className="text-lg font-semibold">+91 7840038058</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border-b-2 border-b-slate-300">
                    <div><div className="w-[20px] h-[20px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#customGradient)" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></div></div>
                    <div>
                        <div className="text-slate-500 font-semibold">Email</div>
                        <div className="text-lg font-semibold">atul250603@gmail.com</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 border-b-2 border-b-slate-300">
                    <div><div className="w-[20px] h-[20px] "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs><path fill="url(#customGradient)" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></div></div>
                    <div>
                        <div className="text-slate-500 font-semibold">Location</div>
                        <div className="text-lg font-semibold">New Delhi, India</div>
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <div className="w-max cursor-pointer p-3 rounded-full text-white font-medium text-lg flex items-center gap-4 bg-gradient-to-r from-custom-yellow to-custom-red">
                        <div className="w-[20px] h-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </div>
                        <div>Download Resume</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SidePanel;