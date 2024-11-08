import { Props } from "../lib/interface"; 
import { groq } from "next-sanity";
import { client } from "../lib/sanity-u";
import {PortableText} from "@portabletext/react";


async function getData() {
const query = `*[_type == 'project']{
        _id,
        title,
        content,
    }`;

const data = await client.fetch(query);
return data;
}

export default async function Projects(){
    const datas:Props[] = await getData();
    console.log(datas)
    return(
        <div className=" h-screen px-5 grid grid-cols-10 content-end">
        <div className="col-span-4">
            {datas.map((item)=>(
                <div key={item._id} className="text-sky-200 text-9xl">
                    {item.title} 
                    </div>
            ))}
        </div>
        <div className="col-span-4 col-start-2 block">
            {datas.map((item)=>(
                <div key={item._id} className="text-sky-200 text-xl ">
                    <PortableText value={item.content} />
                    </div>
            ))}
        </div>
        
        </div>
    )
    
}