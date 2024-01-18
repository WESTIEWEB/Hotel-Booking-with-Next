import { defineField } from "sanity";

const user = {
    name: "user",
    title: "User",
    type: "document",
    fields: [
        defineField({
            name: "isAdministrator",
            title: "Is Administrator",
            type: "boolean",
            description: "Check if user is configured as admin?",
            initialValue: false,
            icon: "👑",
            validation: (Rule) => Rule.required(),
            // readOnly: true,
            // hidden: true,
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            icon: "👤",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "emailVerified",
            type: "datetime",
            hidden: true,
        }),
        defineField({
            name: "password",
            title: "Password",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "url",
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
        }),
    ]
}

export default user;