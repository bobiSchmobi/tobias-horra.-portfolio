import Link from "next/link";


export function NavPro(){
    return (
        <nav className="max-w-full sticky top-0 px-5 py-5  grid grid-cols-10 -mb-24 z-50">
            <div className="col-span-10 text-center ">
                    <Link href="/">
                    <h2 className=" text-base mix-blend-overlay text-white md: text-xl  ">tobias horra. Designer. Künstler. <br></br>Kunst & Multimedia Student.</h2>
                    </Link>
                </div>
        </nav>

    )
}