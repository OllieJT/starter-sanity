import { SanityDocument } from "sanity-codegen";
import { siteUrl } from "../constants";
import { removeTrailingSlash, removeUrlProtocol } from "./regex";
import { resolveUrlPath } from "./resolve-url-path";
interface Document extends SanityDocument {
	_type: string;
	slug?: {
		_type: "slug";
		current: string;
	};
}

interface ResolveUrl {
	document: Document;
	absolute?: boolean;
}

interface FormatPretty {
	url: string;
}

export function resolveUrl({ document, absolute = false }: ResolveUrl) {
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

	const path = resolveUrlPath({ type, slug });

	if (absolute) return removeTrailingSlash(siteUrl + path);
	else return removeTrailingSlash(path);
}

export function formatPretty({ url }: FormatPretty): string {
	if (!url) return "";
	else return removeUrlProtocol(removeTrailingSlash(url)).replace(/^www\./, "");
}
