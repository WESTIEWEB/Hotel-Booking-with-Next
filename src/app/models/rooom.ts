export type RoomT = {
    _id: string;
    _updatedAt: string;
    _createdAt: string;
    name: string;
    description: string;
    pricePerNight: number;
    discount: number;
    slug: SlugT;
    images: ImageT[];
    isFeatured: boolean;
    isBooked: boolean;
    beds: number;
    coverImage: ImageT;
    guests: number;
    dimension : string;
    offeredAmenities: AmenityT[];
    specialNote: string;
    type: string;
}

type ImageT = {
    url: string;
    _key?: string;
}

type SlugT = {
    current: string;
    _type: string;
}

type AmenityT = {
    _key: string;
    amenity: string;
    icon: string;
}