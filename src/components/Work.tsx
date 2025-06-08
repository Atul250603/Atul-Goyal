import Heading from "./Heading";
import ProjectCard from "./ProjectCard.tsx";
import { projectType } from "./types.ts";
function Work(){
    const projects:projectType[]=[
    {
      id: 1,
      name: "Quizzify",
     description: "Enter any topic and get instant, personalized quizzes to enhance your learning. Receive detailed analytics and curated resources to fill knowledge gaps.",
     skills: ["Nextjs", "Hono", "Cloudflare Worker", "Cloudflare KV", "Postgres", "Gemini", "Tailwind CSS"],
     liveLink: "https://quizzify.site",
     githubLink: "https://github.com/atul250603/quizzify"
    }, 
    {
        id:2,
        name:"Toastrr",
        description:"It's a cool & lightweight toast notification library for React.js and Next.js",
        skills:["React","Javascript","CSS", "npm", "Singleton Pattern"],
        liveLink:"https://toastrr.vercel.app",
        githubLink:"https://github.com/atul250603/toastrr"
    },
    {
        id:3,
        name:"TalentX",
        description:"This platform solves the problems of recruiters and students. Students can find people to collaborate on their projects, people can organize hackathons, and recruiters can post job openings, conduct assignments, and take interviews.",
        skills:["React","Node","Express","Socket.IO","WebRTC","Firebase","Tailwind CSS","MongoDB"],
        liveLink:"https://talenthunt-seven.vercel.app/",
        githubLink:"https://github.com/atul250603/talenthunt"
    },{
        id:4,
        name:"Paybuddy",
        description:"This is a platform where you can keep track of all your transactions like how much money you owe someone and vice-versa.",
        skills:["React","Node","Express","MongoDB","Bootstrap"],
        liveLink:"https://paybuiddy-backend-q2a6.vercel.app/",
        githubLink:"https://github.com/atul250603/paybuddy_fe"
    },{
        id:5,
        name:"Opino",
        description:"A user-friendly platform enabling quiz creation and participation.Implemented features for creating new quizzes, updating new quizzes, attempting an existing quiz, and generating results.",
        skills:["React","Node","Express","MongoDB","Tailwind CSS"],
        liveLink:"https://opino-fe.vercel.app/",
        githubLink:"https://github.com/Atul250603/opino_fe"
    },{
        id:6,
        name:"Tasklist",
        description:"This a platform where you can list down all your tasks, check the status of them, change their status to completed, and delete them as well.",
        skills:["React","Node","Express","MongoDB","Bootstrap","Auth0"],
        liveLink:"https://tasklist-rho-five.vercel.app/",
        githubLink:"https://github.com/Atul250603/tasklist"
    }]
    return(
        <div className="w-full">
            <div>
                <Heading title="PORTFOLIO"/>
            </div>
            <div className="w-full mt-5 ">
                {projects.map((project:projectType)=><div className="w-full mb-4"><ProjectCard project={project}/></div>)}
            </div>
        </div>
    )
}

export default Work;