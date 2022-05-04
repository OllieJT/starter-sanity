import S from "@sanity/desk-tool/structure-builder";

const list = S.list()
	.title("All Types")
	.items([
		// This returns an array of all the document types b
		// defined in schema.js. We filter out those that we have
		// defined the structure above
		...S.documentTypeListItems() /* .filter(hiddenDocTypes) */,
	]);

const listItem = S.listItem().title("All Document Types").child(list);

export const structureListAllTypes = {
	list,
	listItem,
};
