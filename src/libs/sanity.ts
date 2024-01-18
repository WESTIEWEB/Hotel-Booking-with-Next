import { createClient } from "next-sanity";
import { SanityClient } from "sanity";

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_APP_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.STUDIO_ACCESS_TOKEN as string,
    apiVersion: "2021-10-21",
};

const sanityClient = createClient(config) as SanityClient;

export default sanityClient;