import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=" bg-darkBlueGrey snap-start">
            <div className=" flex max-w-6xl justify-between items-center mx-auto p-4">
                <Link to="/">
                    <h1 className=" text-softWhite text-3xl font-satisfy">shamantMyageri</h1>
                </Link>
                <ul className=" flex text-softWhite gap-6.5 font-poppins font-light">
                    <Link to="/">
                        <li className="  hover:text-neonPink active:text-brightPurple">home</li>
                    </Link>
                    <a href="/about">
                        <li className=" hover:text-brightPurple active:text-neonYellow">about</li>
                    </a>
                    <Link to="/projects">
                        <li className=" hover:text-neonYellow active:text-electricBlue">projects</li>
                    </Link>
                    <Link to="/contact">
                        <li className=" hover:text-electricBlue active:text-neonPink">contact</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
