import { removeTrailingSlash } from "./regex";

interface ResolvePath {
	type: string;
	slug?: string;
}

export function resolveUrlPath({ type, slug = "" }: ResolvePath) {
	if (!type) {
		console.warn(`Could not find page type for ${type} / ${slug}`);
		return "/404";
	}

	switch (type) {
		case "article":
			return removeTrailingSlash(`/articles/${slug}`);
		case "topic":
			return removeTrailingSlash(`/topic/${slug}`);
		case "author":
			return removeTrailingSlash(`/author/${slug}`);
		case "page":
		default:
			return removeTrailingSlash(`/${slug}`);
	}
}
