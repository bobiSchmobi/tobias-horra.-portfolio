import { PortableTextBlock } from "next-sanity";

export type Projecti = {
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
    content: PortableTextBlock[];
    imgh1: string;
    imgv1: string;
    imgv2: string;
    imgh2: string;
    imgv3: string;
    imgh3: string;
    imgh4: string;
};