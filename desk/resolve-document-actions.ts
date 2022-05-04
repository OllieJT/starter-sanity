import defaultResolve from "part:@sanity/base/document-actions";

export default function resolveDocumentActions(props) {
	return defaultResolve(props).map((Action) => {
		switch (Action) {
			case "thing":
				return Action;
			default:
				return Action;
		}
	});
}
