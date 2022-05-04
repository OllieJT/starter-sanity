const removeRegex = (regex: RegExp) => (value: string) => value.replace(regex, "");

export const trailingSlash = /\/$/;
export const removeTrailingSlash = removeRegex(trailingSlash);

export const urlProtocol = /^(?:https?:\/\/)?/;
export const removeUrlProtocol = removeRegex(urlProtocol);

export const firstLetter = /^[a-z]/;
export function capitalizeFirstLetter(value: string) {
	return value.replace(firstLetter, (match) => match.toUpperCase());
}
