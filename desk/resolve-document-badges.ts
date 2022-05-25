import defaultResolve from "part:@sanity/base/document-actions";
import { ScheduledBadge } from "@sanity/scheduled-publishing";

export default function resolveDocumentBadges(props) {
	const defaultBadges = defaultResolve(props);

	if (props.type === "movie") {
		// Add our scheduled badge after any defaults
		return [...defaultBadges, ScheduledBadge];
	}

	return defaultBadges;
}
