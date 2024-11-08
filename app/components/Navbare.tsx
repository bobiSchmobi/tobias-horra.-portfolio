import Link from "next/link";


export function Navbare(){
    return (
        <nav className="max-w-full sticky top-0 px-5 py-4  grid grid-cols-10 ">
            <div className="col-span-8 flex md: col-span-4">
                    <Link href="/">
                    <h2 className=" text-base mix-blend-overlay text-white md: text-3xl  ">tobias horra. Designer. Künstler. <br></br>Kunst & Multimedia Student.</h2>
                    </Link>
                </div>

                <div className=" flex justify-self-end col-span-2 col-end-11  gap-4 ">
                    <Link href="./about">
                    <h2 className="text-sky-200 text-base mix-blend-overlay md: text-3xl">about.</h2>
                    </Link>
                    <Link href="./projects">
                    <h2 className="text-blue-500 text-base mix-blend-overlay md: text-3xl">projects.</h2>
                    </Link>
                    <Link href="./contact">
                    <h2 className="text-blue-500 text-base mix-blend-overlay md: text-3xl">contact.</h2>
                    </Link>
                </div>
        </nav>

    )
}