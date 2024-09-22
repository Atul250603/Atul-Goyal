import Heading from "./Heading";
import SubHeading from "./SubHeading";

function About(){
    return(
        <div className="w-full">
            <div>
                <Heading title="ABOUT ME"/>
            </div>
            <div className="mt-5">
                <div>
                    I'm a full-stack developer with expertise in building dynamic, responsive web applications using the <span className="font-bold">MERN stack.</span> My skill set includes a strong understanding of <span className="font-bold">backend development</span>, <span className="font-bold">database management</span>, and <span className="font-bold">frontend design</span>, coupled with experience in cloud deployment using AWS. With a keen eye for detail and a passion for problem-solving, I’m constantly learning and adapting to new technologies like <span className="font-bold">TypeScript</span>, <span className="font-bold">Docker</span>, and <span className="font-bold">Tailwind CSS</span>.
                </div>
            </div>
            <div className="mt-5">
                <SubHeading title="What I do!"/>
            </div>
            <div className="w-full flex justify-center flex-wrap gap-4 mt-5">
                <div className="w-full bg-custom-blue p-4 rounded-xl sm:w-[45%]">
                    <div className="font-bold text-2xl mb-2">Front End Development</div>
                    <div>
                        I utilise technologies like <span className="font-bold">Next.js</span>, <span className="font-bold">React.js</span>, <span className="font-bold">Javascript</span>, <span className="font-bold">CSS</span>, and <span className="font-bold">HTML</span> to build responsive, user-friendly web applications.
                    </div>
                </div>
                <div className="w-full bg-orange-200 p-4 rounded-xl sm:w-[45%]">
                    <div className="font-bold text-2xl mb-2">Back End Development</div>
                    <div>
                        I use technologies like <span className="font-bold">Node.js</span>, <span className="font-bold">Express.js</span>, <span className="font-bold">Hono</span>, and Database technologies like <span className="font-bold">MongoDB</span>, <span className="font-bold">MySQL</span>, and <span className="font-bold">PostgreSQL</span> to build scalable, efficient backend systems.
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default About;