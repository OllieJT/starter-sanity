import { HiUser } from "react-icons/hi";
import { transformBlocks } from "../../utility/transform-block";
import { withSlug } from "../common/slug";

export default {
	title: "Person",
	name: "person",
	type: "document",
	icon: HiUser,
	fieldsets: [{ name: "name", title: "Name", options: { columns: 2, collapsible: false } }],
	fields: [
		{
			title: "First Name",
			name: "nameFirst",
			type: "string",
			fieldset: "name",

			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Last Name",
			name: "nameLast",
			type: "string",
			fieldset: "name",
		},
		{
			title: "Alias",
			name: "alias",
			description: "Another name this person is known as.",
			type: "string",
			fieldset: "name",
		},
		{
			title: "Known By",
			name: "knownBy",
			description: "Another name this person is known as.",
			type: "string",
			fieldset: "name",
			options: {
				list: [
					{
						title: "Full Name",
						value: "full",
					},
					{
						title: "First Name",
						value: "first",
					},
					{
						title: "Alias",
						value: "alias",
					},
				],
			},
		},
		withSlug("nameFirst"),
		{
			title: "Avatar",
			name: "avatar",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
		{
			title: "Bio",
			name: "bio",
			type: "richtext",
		},
	],
	preview: {
		select: {
			nameFirst: "nameFirst",
			nameLast: "nameLast",
			subtitle: "alias",
			media: "avatar",
			bio: "bio",
		},
		prepare({ nameFirst, nameLast, subtitle, media, bio }) {
			const title = [nameFirst, nameLast].join(" ");
			return { title, subtitle, media, description: transformBlocks(bio) };
		},
	},
};
