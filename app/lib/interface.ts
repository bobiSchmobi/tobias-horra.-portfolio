
import { PortableTextBlock } from "next-sanity";
export interface Props{
    _id: string;
    title: string;
    content: PortableTextBlock;
};

export interface Project{
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
}