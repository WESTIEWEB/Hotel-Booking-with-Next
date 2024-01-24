import { RoomT } from "@/app/models/rooom";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";

const getFeaturedRooms = async () => {
    const res = await sanityClient.fetch<RoomT>(
        queries.getFeaturedRoomQuery, 
        // { next: { revalidate: 60 * 10 }},
        {},
        { cache: "no-cache"}
    );

    return res;
}

export {
    getFeaturedRooms,
}