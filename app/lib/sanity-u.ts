import { createClient } from "next-sanity";


export const client = createClient({
    projectId: '59g1mn44',
    dataset: 'production',
    apiVersion: "2024-10-10",
    useCdn: false,
});
