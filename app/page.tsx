import Link from "next/link";
import Image from "next/image";
import { createClient } from "next-sanity";
import { PortableTextBlock } from "next-sanity";

export interface Props {
  _id: string;
  title: string;
  content: PortableTextBlock;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  image: string;
  year: string;
  month: string;
  info1: string;
  info2: string;
  info3: string;
  bg: string;
  url: string;
  content: PortableTextBlock;
  imgh1: string;
  imgv1: string;
  imgv2: string;
  imgh2: string;
  imgv3: string;
  imgh3: string;
  imgh4: string;
}

export async function getProjects() {
  const client = createClient({
    projectId: "59g1mn44",
    dataset: "production",
    apiVersion: "2024-10-19",
    useCdn: false,
  });
  return client.fetch(
    `*[_type == 'project' ]{
      _id,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      year,
      month,
      info1,
      info2,
      info3,
      bg,
      url,
      content,
      "imgh1": imgh1.asset->url,
      "imgv1": imgv1.asset->url,
      "imgv2": imgv2.asset->url,
      "imgh2": imgh2.asset->url,
      "imgv3": imgv3.asset->url,
      "imgh3": imgh3.asset->url,
      "imgh4": imgh4.asset->url,
    }`
  );
}

export default async function Home() {
  const projects = await getProjects();

  // Assuming you want to display the first project
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
      <div className="group absolute" style={{ top: '20%', left: '13%' }}>
        {/* Use dynamic slug in the href */}
        <Link href={`/projects/${firstProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>

        {/* Add the card with visibility controlled by group hover */}
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


      {/* Wrap both the stars4 and card inside a group */}
      <div className="group absolute" style={{ top: '63%', left: '25%' }}>
        {/* Use dynamic slug in the href */}
        <Link href={`/projects/${secondProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>

        {/* Add the card with visibility controlled by group hover */}
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



      {/* Wrap both the stars4 and card inside a group */}
      <div className="group absolute" style={{ top: '46%', left: '48%' }}>
        {/* Use dynamic slug in the href */}
        <Link href={`/projects/${thirdProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>

        {/* Add the card with visibility controlled by group hover */}
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

    

      {/* Wrap both the stars4 and card inside a group */}
      <div className="group absolute" style={{ top: '33%', right: '24%' }}>
        {/* Use dynamic slug in the href */}
        <Link href={`/projects/${fourthProject.slug}`}>
          <div className="stars4 z-20"></div>
        </Link>

        {/* Add the card with visibility controlled by group hover */}
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
