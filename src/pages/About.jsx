
export default function About() {
    return (
        <div className=" text-softWhite flex flex-col justify-center items-center">
            <div className="h-screen w-full max-w-6xl flex justify-between mx-auto items-center px-4">
                <div className=" font-montserrat">
                    <h1 className=" font-poppins font-light text-[22px] py-2">more about me</h1>
                    <p className=" font-semibold text-5xl py-2 leading-tight">Full-Stack Developer with <br /> a Knack for Everything <br /> Else!</p>
                    <p className=" w-[550px] text-[16px] py-2 leading-snug">I'm Shamant, a Full-Stack developer passionate about building scalable web applications and solving complex problems. With experience in various projects like a blog site, real estate app, and eCommerce platform, I specialize in MERN stack, API development, and database management {"(SQL & NoSQL)"}.<br /><br />Currently, I’m diving into React Native for mobile development. I thrive on learning new technologies and collaborating on impactful projects. Let’s connect and build something amazing!<br /><br />Because the best way to learn is by building — and that’s exactly what I do.</p>
                    <button className=" 
                    font-poppins bg-softWhite rounded-3xl w-40 h-10 text-slate-800 mt-7 mb-2
                    hover:bg-electricBlue active:scale-95 active:opacity-80 
                    transition duration-200 ease-in-out  ">
                        Download CV
                    </button>
                </div>
                <div className=" flex items-center justify-center text-slate-800 bg-softWhite aspect-square w-[345px] rounded-full">
                    image
                </div>
            </div>
            <div className=" h-screen">
                what i work with
            </div>
        </div>
    )
}
