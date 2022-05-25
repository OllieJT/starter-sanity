import defaultResolve from "part:@sanity/base/document-actions";
import { ScheduleAction } from "@sanity/scheduled-publishing";

export default function resolveDocumentActions(props) {
	const defaultActions = defaultResolve(props);

	if (props.type === "movie") {
		// Add our schedule action AFTER the first action (publish, by default)
		// to ensure it sits at the top of our document context menu.
		return [
			...defaultActions.slice(0, 1),
			ScheduleAction,
			...defaultActions.slice(1),
		];
	}

	return defaultActions;
}
