import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "room" && isFeatured == true][0] {
    _id,
    _updatedAt,
    name,
    description,
    pricePerNight,
    discount,
    slug,
    images,
    isFeatured,
}`;