import { HiTag } from "react-icons/hi";
import { capitalizeFirstLetter } from "../../../lib/utility/regex";

interface Props {
	label: string;
	type: string;
	name: `linkTo${string}`;
}

function internalLink({ label, type, name }: Props) {
	return {
		title: `${label} Smart Link.`,
		name,
		type: "object",
		icon: HiTag,
		fields: [
			{
				title: `Reference to ${capitalizeFirstLetter(type)}`,
				name: "reference",
				type: "reference",
				weak: true,
				to: [{ type }],
				validation: (Rule) => Rule.required(),
				codegen: { required: true },
			},
		],
	};
}

export const linkToArticle = internalLink({
	label: "Article",
	type: "article",
	name: "linkToArticle",
});
export const linkToCollection = internalLink({
	label: "Collection",
	type: "collection",
	name: "linkToCollection",
});
export const linkToPerson = internalLink({
	label: "Person",
	type: "person",
	name: "linkToPerson",
});

/*
	export const linkTo = {
		article: linkToArticle,
		collection: linkToCollection,
		person: linkToPerson,
	};
 */
