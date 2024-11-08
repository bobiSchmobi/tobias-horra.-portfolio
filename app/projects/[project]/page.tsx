import { PortableText } from "@portabletext/react";
import Image from "next/image";
import SmoothScroll from "@/components/ImgScroll";
import Home from "@/app/page";
import React from 'react';
import { getProject } from "@/sanity/sanity-utils";

type Props ={
    params:{project:string}
};

export default async function Project({params}:Props){
    const slug = params.project;
    const project = await getProject(slug);
    console.log(project.bg)
    return (
        <>
        <SmoothScroll />

<div className="bg-[#3C3C3B] overflow-hidden grid-item">
    <div className=" h-screen px-5 py-5 grid grid-cols-10 content-end gap-6 overflow-hidden " >
        
        {/* Title */}
        <div className="col-span-4">
    
            <div key={project._id} className="text-gray-50 text-9xl">{project.title}</div>

        </div>

        {/* year, month, infos */}
        <div className="col-span-1 col-start-3 block content-end">
            <div key={project._id} className="text-gray-50 text-xl ">
                    {project.year}
            </div>
        </div>

        <div className="col-span-1 col-start-6 block content-end">
            <div key={project._id} className="flex justify-end text-gray-50 text-xl  ">
                    {project.month}
            </div>
        </div>
        
        <div className="col-span-2 col-end-11 block">
            <div key={project._id} className="flex text-gray-50 text-xl justify-end text-right">
                {project.info1}<br></br>
                {project.info2}<br></br>
                {project.info3}
            </div>
        </div>

    </div>


    {/* image1 */}
        <div className=" px-5 w-screen min-w-min relative h-full" >

    

        <video autoPlay muted loop height="auto" width="100%" >
          <source src={project.bg} type="video/mp4"/>
          Your browser does not support the video tag...
        </video>
          

        </div>
        
    
    <div className=" min-h-min px-5 py-5 grid grid-cols-10 content-center gap-6" >
    {/* Look + Book */}

    

            <div className="col-span-9 col-start-2">
    
                    <div key={project._id} className="text-gray-50 text-9xl">look</div>
            </div>

            <div className="col-span-9 col-end-11">
                    
                    <div key={project._id} className="text-gray-50 text-9xl justify-end text-right">book</div>
    </div>

    
    {/* image horizontal 1*/}

    <div className="col-span-8 col-start-1 relative aspect-[16/10] grid-item -mt-6" >

        <Image src={project.imgh1} alt="test"  width={2000} height={1000} 
            className="object-cover h-full w-full rounded-md"/>
            
            
    </div>
    </div>    
    <div className=" min-h-min px-5 py-5 grid grid-cols-10 content-center gap-6 space-y-36" >
    {/* textblock */}
        {/* image vertical 2*/}

    <div className="col-span-5 col-start-2 relative pt-36" >
    <div key={project._id}   className="  block text-gray-50 text-xl pb-36 pr-36">
                <PortableText value={project.content} />

    </div>
    <div className=" relative aspect-w-10 aspect-h-16" >
<Image src={project.imgv2} alt="test"  width={2000} height={1000} 
    className="object-cover w-full h-full rounded-md"/>
    </div>
</div>

  
        {/* image vertical 1*/}
        
        <div className="col-span-3 col-end-11 relative aspect-[10/16]" >

            <Image src={project.imgv1} alt="test"  width={2000} height={1000} 
                className="object-cover w-full h-full rounded-md"/>
        </div>


    {/* image horizontal 2*/}

        <div className="col-span-10 relative aspect-w-16 aspect-h-9" >

            <Image src={project.imgh2} alt="test"  width={1861} height={1163} 
                 className="object-cover w-full h-full rounded-md"/>
        </div>
  
      {/* image vertical 2*/}

        <div className="col-span-4 col-end-11 relative aspect-w-10 aspect-h-16" >

            <Image src={project.imgv3} alt="test"  width={2000} height={1000} 
            className="object-cover w-full h-full rounded-md"/>
        </div>
     {/* image horizontal 3*/}

     <div className="col-span-5 relative aspect-w-16 aspect-h-9 " >

            <Image src={project.imgh3} alt="test"  width={1861} height={1163} 
                className="object-cover w-full -mt-80 rounded-md"/>
    </div>       
    

    
    </div>

    <div className=" min-h-min px-5 py-5 grid grid-cols-10 content-center gap-6 -mt-44" >

        <div className="col-span-6 col-start-2 relative aspect-w-16 aspect-h-9 " >

            <Image src={project.imgh4} alt="test"  width={1861} height={1163} 
                className="object-cover w-full rounded-md"/>
            </div>     
        

            {/* view all Projects */}

    

            <div className="col-start-2 ">
    
                    <div key={project._id} className="text-gray-50 text-8xl text-left"><h3>view</h3></div>
            </div>
            <div className="col-end-8 ">
    
            <div key={project._id} className=""><h3 className="text-end text-gray-50 text-8xl">all</h3></div>
            </div>

            <div className="col-span-10 col-end-11 ">
                    
                    <div key={project._id} className="text-gray-50 text-8xl justify-end text-right -mt-9">projects</div>
            </div>
        {/* image horizontal 2*/}


    </div>
        <div className="relative"><Home /></div>
       
    
    
</div>
</>

    );
    
};