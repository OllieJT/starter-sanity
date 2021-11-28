//TODO: Replace olliejt.com
const isDev = process.env.NODE_ENV === "development";
export const domain = isDev ? "http://localhost:3000" : "https://olliejt.com";

function resolvePath(type: string, slug: string) {
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

function resolveUrl(document: any, relative = false) {
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

	const path = resolvePath(type, slug);

	if (relative) return path;
	else return domain + path;
}

const formatPretty = (url: string): string =>
	url.replace("https://", "").replace("http://", "").replace("www.", "");

export default { resolvePath, resolveUrl, formatPretty };
