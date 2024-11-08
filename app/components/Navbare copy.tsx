import Link from "next/link";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/navbar";

export function Navbare(){
    return (
        <nav className="max-w-full h-20 grid grid-cols-10">
            <div className="col-span-2 flex ">
                    <Link href="/">
                    <h2 className="text-white text-2xl mix-blend-overlay">tobias horra. Designer. Künstler. Kunst & Multimedia Student.</h2>
                    </Link>
                </div>

                <div className="col-span-4 col-end-11 flex gap-4 justify-self-end">
                    <Link href="./about">
                    <h2 className="text-sky-200 text-2xl mix-blend-overlay">about.</h2>
                    </Link>
                    <Link href="./projects">
                    <h2 className="text-blue-500 text-2xl mix-blend-overlay">projects.</h2>
                    </Link>
                    <Link href="./contact">
                    <h2 className="text-blue-500 text-2xl mix-blend-overlay">contact.</h2>
                    </Link>
                </div>
        </nav>

    )
}