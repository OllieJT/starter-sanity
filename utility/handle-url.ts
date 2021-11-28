//TODO: Replace olliejt.com
const isDev = process.env.NODE_ENV === "development";
export const domain = isDev ? "http://localhost:3000" : "https://olliejt.com";

import { SanityDocument } from "sanity-codegen";
interface Document extends SanityDocument {
	_type: string;
	slug?: {
		_type: "slug";
		current: string;
	};
}

interface ResolvePath {
	type: string;
	slug?: string;
}

interface ResolveUrl {
	document: Document;
	relative?: boolean;
}

interface FormatPretty {
	url: string;
}

function resolvePath({ type, slug = "" }: ResolvePath) {
	if (!type) {
		console.warn(`Could not find page type for ${type} / ${slug}`);
		return "/404";
	}

	switch (type) {
		case "article":
			return `/articles/${slug}`;
		case "collection":
			return `/collection/${slug}`;
		case "topic":
			return `/topic/${slug}`;
		case "author":
			return `/author/${slug}`;
		case "homepage":
		default:
			return `/${slug}`;
	}
}

function resolveUrl({ document, relative = false }: ResolveUrl) {
	if (!document) {
		console.warn(`No document provided to url resolver!`);
		return "/404";
	}

	const type = document?._type;
	const slug = document?.slug?.current;

	if (!type) {
		console.warn(`Could not find page type for ${document}`);
		return "/404";
	}

	const path = resolvePath({ type, slug });

	if (relative) return path;
	else return domain + path;
}

const formatPretty = ({ url }: FormatPretty): string =>
	url.replace("https://", "").replace("http://", "").replace("www.", "");

export default { resolvePath, resolveUrl, formatPretty };
