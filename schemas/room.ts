import { defineField } from "sanity";

const roomTypes = [
    { title: "Basic", value: "basic" },
    { title: "Luxury", value: "luxury" },
    { title: "Suite", value: "suite" },
]
const room = {
    name: "room",
    title: "Room",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required().max(50).error("Please enter a name less than 50 characters."),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required().min(100).error("Please enter a description more than 100 characters."),
        }),
        defineField({
            name: "pricePerNight",
            title: "Price Per Night",
            type: "number",
            validation: (Rule) => Rule.required().min(10000).error("Please enter a price more than 10000."),
        }),
        defineField({
            name: "discount",
            title: "Discount",
            initialValue: 0,
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "beds",
            title: "Beds",
            type: "number",
        }),
        defineField({
            name: "guests",
            title: "Guests",
            type: "number",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 100,
            },
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                { 
                    type: "object" ,
                    fields: [
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            options: {
                                hotspot: true,
                            },
                        }),
                        defineField({
                            name: "alt",
                            title: "Alt",
                            type: "string",
                        }),
                        defineField({
                            name: "file",
                            title: "File",
                            type: "file",
                        }),
                    ]
                },
            ],
            validation: (Rule) => Rule.required().min(3).error("Please enter at least 3 images."),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "object",
            fields: [
                defineField({
                    name: "url",
                    title: "URL",
                    type: "url",
                    options: {
                        hotspot: true,
                    },
                }),
                defineField({
                    name: "alt",
                    title: "Alt",
                    type: "string",
                }),
                defineField({
                    name: "file",
                    title: "File",
                    type: "file",
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "isBooked",
            title: "Is Booked",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "customerReviews",
            title: "Customer Reviews",
            type: "array",
            of: [{ type: "customerReview" }],
        }),
        defineField({
            name: "type",
            title: "Room Type",
            type: "string",
            options: {
                list: roomTypes,
            },
            initialValue: "basic",
        }),
        defineField({
            name: 'specialNote',
            title: 'Special Note',
            type: 'text',
            validation: Rule => Rule.required(),
            initialValue:
              'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
          }),
        defineField({
        name: 'dimension',
        title: 'Dimension',
        type: 'string',
        }),
        defineField({
            name: 'isFeatured',
            title: 'Is Featured',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: "offeredAmenities",
            title: "Offered Amenities",
            type: "array",
            of: [
                { type: "object",
                    fields: [
                        defineField({
                            name: "amenity",
                            title: "Amenity",
                            type: "string",
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "string",
                        }),
                    ]
                },
            ],
        }),
    ],
}

export default room;