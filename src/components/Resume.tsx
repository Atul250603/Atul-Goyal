import Heading from "./Heading";
import SubHeading from "./SubHeading";

function Resume(){
    const skills=["React","Next.js","Vue.js","Node.js","Express.js","Javascript","Typescript","MongoDB","NoSQL","SQL","Prisma ORM","Cloudflare Worker","Socket.IO","Tailwind CSS","Hono","C++","HTML","CSS","Nuxt","WebRTC"]
    return(
        <div className="w-full">
            <div>
                <Heading title="RESUME"/>
            </div>
            <div className="mt-5">
                <div>
                    <div><SubHeading title="Skills"/></div>
                </div>
                <div className="flex gap-2 flex-wrap mt-4">
                    {skills.map((skill,index)=><div key={index} className="bg-slate-300 border border-slate-900 px-2 py-1 font-medium text-slate-900 rounded-full">{skill}</div>)}
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="url(#customGradient)" className="size-6">
                            <defs>
                                <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                    <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <div><SubHeading title="Education"/></div>
                </div>
                <div className="mt-4">
                    <div className="w-full lg:w-1/2 bg-orange-200 p-4 rounded-xl">
                        <div className="text-slate-600 font-semibold">2020 - 2024</div>
                        <div className='font-semibold my-2 text-lg'>BTech, Computer Science and Engineering</div>
                        <div className='font-semibold text-slate-600 my-2 text-lg'>Jaypee Institute of Information Technology, Noida</div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex items-center gap-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="url(#customGradient)" className="size-6">
                            <defs>
                                <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                    <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div><SubHeading title="Experience"/></div>
                </div>
                <div className="mt-4 flex h-full gap-2 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2  bg-orange-200 p-4 rounded-xl">
                        <div className="text-slate-600 font-semibold">2023 - 2023</div>
                        <div className='font-semibold my-2 text-lg'>Full Stack Developer</div>
                        <div className='font-semibold text-slate-600 my-2 text-lg'>Happilyever.co</div>
                    </div>
                    <div className="w-full lg:w-1/2  bg-orange-200 p-4 rounded-xl">
                        <div className="text-slate-600 font-semibold">2024 - Present</div>
                        <div className='font-semibold my-2 text-lg'>Software Development Engineer</div>
                        <div className='font-semibold text-slate-600 my-2 text-lg '>
                           <a href="https://www.bullwhip.io/" target="_blank" className="underline">Bullwhip.io</a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Resume;