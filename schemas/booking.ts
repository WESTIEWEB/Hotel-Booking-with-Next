import { defineField } from "sanity";

const bookingStatuses = [
    { title: "Pending", value: "pending" },
    { title: "Confirmed", value: "confirmed" },
    { title: "Cancelled", value: "cancelled" },
]

const booking  = {
    name: "booking",
    title: "Booking",
    type: "document",
    fields: [
        defineField({
            name: "room",
            title: "Room",
            type: "reference",
            to: [{ type: "room" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "checkIn",
            title: "Check In",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "checkOut",
            title: "Check Out",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'numberOfDays',
            title: 'Number of Days',
            type: 'number',
            initialValue: 1,
            validation: (Rule) => Rule.required().min(1).max(2),
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: bookingStatuses,
            },
            initialValue: "pending",
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "number",
            validation: (Rule) => Rule.min(0),
            initialValue: 0,
        }),
        defineField({
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "adults",
            title: "Adults",
            type: "number",
            initialValue: 1,
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "children",
            title: "Children",
            type: "number",
            initialValue: 0,
            validation: (Rule) => Rule.required().min(0),
        }),
    ]
}

export default booking;