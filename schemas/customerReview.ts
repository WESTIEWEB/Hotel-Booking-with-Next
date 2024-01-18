import { defineField } from "sanity";

const customerReview = {
    name: "customerReview",
    title: "Customer Review",
    type: "document",
    fields: [
        defineField({
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user" }],
            validation: (Rule) => Rule.required(),
            hidden: true,
        }),
        defineField({
            name: "room",
            title: "Room",
            type: "reference",
            to: [{ type: "room" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "review",
            title: "Review",
            type: "text",
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
    ],
}

export default customerReview;