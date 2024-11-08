import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";


// Home component now doesn't receive any props, it's just rendering static elements
export default async function Home() {
  const projects = await getProjects();

  const firstProject = projects[0];
  const secondProject = projects[1];
  const thirdProject = projects[2];
  const fourthProject = projects[3];

  return (
    <div className="backgroundgradient h-screen w-full flex overflow-hidden">
      <div className="stars1"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Wrap both the stars4 and card inside a group */}
      <div className="group absolute" style={{ top: "20%", left: "13%" }}>
        <Link href={`/projects/${firstProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>
        <div className="card z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <h3 className="text-xl text-white">[guerilla projction]</h3>
          <h2 className="text-4xl text-white">humaNature</h2>
          <div className="relative aspect-w-10 aspect-h-16">
            <Image
              src={firstProject.imgv1}
              alt="test"
              width={2000}
              height={1000}
              className="object-cover w-4/5 h-4/5 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="group absolute" style={{ top: "63%", left: "25%" }}>
        <Link href={`/projects/${secondProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>
        <div className="card z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <h3 className="text-xl text-white">[web developement]</h3>
          <h2 className="text-4xl text-white">kurzfilmwoche</h2>
          <div className="relative aspect-w-10 aspect-h-16">
            <Image
              src={secondProject.image}
              alt="test"
              width={2000}
              height={1000}
              className="object-cover w-4/5 h-4/5 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Third Project */}
      <div className="group absolute" style={{ top: "46%", left: "48%" }}>
        <Link href={`/projects/${thirdProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>
        <div className="card z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <h3 className="text-xl text-white">[projection mapping]</h3>
          <h2 className="text-4xl text-white w-max "> rod of asclepius </h2>
          <div className="relative aspect-w-10 aspect-h-16">
            <Image
              src={thirdProject.imgv1}
              alt="test"
              width={2000}
              height={1000}
              className="object-cover w-4/5 h-4/5 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Fourth Project */}
      <div className="group absolute" style={{ top: "33%", right: "24%" }}>
        <Link href={`/projects/${fourthProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>
        <div className="card z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <h3 className="text-xl text-white">[interactive art]</h3>
          <h2 className="text-4xl text-white w-max">active particles</h2>
          <div className="relative aspect-w-10 aspect-h-16">
            <Image
              src={fourthProject.image}
              alt="test"
              width={2000}
              height={1000}
              className="object-cover w-4/5 h-4/5 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
