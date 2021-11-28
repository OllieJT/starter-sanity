import handleUrl from "../utility/handle-url";

function resolveProductionUrl(document: any) {
	return handleUrl.resolveUrl({ document });
}

export default resolveProductionUrl;
