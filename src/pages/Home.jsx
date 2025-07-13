
export default function Home() {
    return (
        <div className=" h-screen flex flex-col items-center justify-center snap-start">
            <div className=" flex flex-col items-center justify-center text-softWhite font-montserrat cursor-default">
                <h2 className=" font-medium text-3xl p-4">Hello, I'm</h2>
                <h1 className=" font-satisfy text-6xl p-4"><span className=" text-neonPink">Shamant</span> Myageri</h1>
                <h2 className=" font-semibold text-3xl p-4">A Full-Stack Web Developer</h2>
            </div>
            <div className=" flex pt-8 gap-3.5 text-slate-800">
                <button className=" 
                font-poppins bg-softWhite rounded-3xl w-40 h-10 text-slate-800 cursor-pointer
                hover:bg-electricBlue active:scale-95 active:opacity-80 
                transition duration-200 ease-in-out  ">
                    Download CV
                </button>
                <button className=" 
                font-poppins bg-softWhite rounded-3xl w-40 h-10 text-slate-800 cursor-pointer
                hover:bg-neonYellow active:scale-95 active:opacity-80 
                transition duration-200 ease-in-out  ">
                    Hire Me
                </button>
            </div>
        </div>
    )
}
