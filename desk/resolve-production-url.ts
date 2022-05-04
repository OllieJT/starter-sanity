import { resolveUrl } from "../lib/utility/resolve-url";

function resolveProductionUrl(document: any) {
	return resolveUrl({ document });
}

export default resolveProductionUrl;
