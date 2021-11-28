import S from "@sanity/desk-tool/structure-builder";

export const structureListAll = S.listItem()
	.title("All Document Types")
	.child(
		S.list()
			.title("All Types")
			.items([
				// This returns an array of all the document types b
				// defined in schema.js. We filter out those that we have
				// defined the structure above
				...S.documentTypeListItems() /* .filter(hiddenDocTypes) */,
			]),
	);
