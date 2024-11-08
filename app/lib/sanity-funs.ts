
import { createClient, groq } from "next-sanity";
import { Props, Project } from "./interface"; 


export const client = createClient({
    projectId: '59g1mn44',
    dataset: 'production',
    apiVersion: "2024-10-10",
    useCdn: false,
});

export async function getProjects() {

    return createClient(client).fetch(
        groq`*[_type == 'project']{
            _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    );
}

export async function getProject(slug: string): Promise<Project[]> {

    return createClient(client).fetch(
        groq`*[_type == 'project' && slug.current ==$slug[0]]{
            _id,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            
        }`,
        {slug}
    );
}
