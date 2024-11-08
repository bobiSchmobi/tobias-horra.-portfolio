import { createClient, groq } from "next-sanity";
import {Projecti} from "../types/Project"

export async function getProjects(): Promise<Projecti[]> {
    const client = createClient({
      projectId: "59g1mn44",
      dataset: "production",
      apiVersion: "2024-10-19",
      useCdn: false,
    });
    return client.fetch(
      groq`*[_type == 'project']{
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


export async function getProject(slug: string): Promise<Projecti> {
    const client = createClient({
      projectId: '59g1mn44',
      dataset: 'production',
      apiVersion: "2024-09-02",
      useCdn: false,
    });
  
    return client.fetch(
      `*[_type == 'project' && slug.current == $slug][0]{
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
      }`,
      { slug }
    );
  }
  