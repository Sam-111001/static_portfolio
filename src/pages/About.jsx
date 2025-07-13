import Skills from "../components/Skills";

export default function About() {
    return (
        <div id="about" className=" text-softWhite flex flex-col items-center ">
            <div className=" min-h-screen w-full max-w-6xl flex justify-between mx-auto items-center px-4 snap-start cursor-default">
                <div className=" font-montserrat">
                    <h1 className=" text-neonPink font-poppins font-light text-[1.375rem] my-2">
                        more about me
                    </h1>
                    <p className=" font-semibold text-5xl my-2 leading-tight">
                        Full-Stack Developer with <br /> a Knack for Everything <br /> Else!
                    </p>
                    <p className=" w-[550px] text-[16px] my-3 leading-snug">
                        I'm Shamant, a Full-Stack developer passionate about building scalable web applications and solving complex problems. With experience in various projects like a blog site, real estate app, and eCommerce platform, I specialize in MERN stack, API development, and database management {"(SQL & NoSQL)"}.<br /><br />Currently, I’m diving into React Native for mobile development. I thrive on learning new technologies and collaborating on impactful projects. Let’s connect and build something amazing!<br /><br />Because the best way to learn is by building — and that’s exactly what I do.
                    </p>
                    <button className=" 
                    font-poppins bg-softWhite rounded-3xl w-40 h-10 text-slate-800 mt-6 mb-2 cursor-pointer
                    hover:bg-electricBlue active:scale-95 active:opacity-80 
                    transition duration-200 ease-in-out">
                        Download CV
                    </button>
                </div>
                <div className=" flex items-center justify-center text-slate-800 bg-softWhite aspect-square w-[345px] rounded-full">
                    image
                </div>
            </div>
            <div className=" min-h-screen w-full max-w-6xl px-4 flex flex-col  justify-center snap-start">
                <h2 className=" text-neonPink font-poppins font-light text-[1.375rem] my-20">what I work with?</h2>
                <Skills />
                <button className=" 
                font-poppins bg-softWhite rounded-3xl w-40 h-10 text-slate-800 my-20 cursor-pointer
                hover:bg-neonYellow active:scale-95 active:opacity-80 
                transition duration-200 ease-in-out  ">
                    Hire Me
                </button>
            </div>
            <div className=" min-h-screen snap-start flex flex-col justify-center w-full max-w-6xl">
                <h2 className=" text-neonPink font-poppins font-light text-[1.375rem]">the journey so far:</h2>
                <p>I have always been passionate about technology and problem-solving, which led me to pursue a degree in Computer      Science Engineering. During my college years, I worked on various projects, strengthening my skills in full-stack development. /To gain real-world experience, I joined XYZ as a Backend Developer Intern, where I worked on RESTful APIs, optimized database queries, and contributed to backend architecture. This experience solidified my interest in backend development./Beyond my internship, I started working on personal projects using the MERN stack, exploring frontend technologies, and diving into React Native for mobile development. I love taking on new challenges and constantly improving my technical skills./My journey is just beginning, and I’m excited to keep learning, building, and growing in the tech industry!</p>
            </div>
        </div>
    )
}
