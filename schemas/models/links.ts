import { HiExternalLink, HiTag } from "react-icons/hi";
import { asInternalLink } from "../../lib/utility/handle-sanity-field";

const linkInternal = {
	title: "URL",
	name: "link",
	description: "Link to a page on another website",
	type: "object",
	icon: HiExternalLink,
	fields: [
		{
			title: "URL",
			name: "url",
			type: "url",
			validation: (Rule) => Rule.required(),
			codegen: { required: true },
		},
	],
};

const linkToArticle = asInternalLink({
	label: "Article",
	type: "article",
	name: "linkToArticle",
	icon: HiTag,
});
const linkToCollection = asInternalLink({
	label: "Collection",
	type: "collection",
	name: "linkToCollection",
	icon: HiTag,
});
const linkToPerson = asInternalLink({
	label: "Person",
	type: "person",
	name: "linkToPerson",
	icon: HiTag,
});

const links = [linkInternal, linkToArticle, linkToCollection, linkToPerson];

export const linkFields = links.map(({ name, title, icon }) => ({
	title: `${title} Link`,
	type: name,
	icon,
}));

export default links;
