import S from "@sanity/desk-tool/structure-builder";
import { HiCog } from "react-icons/hi";

const showAll = S.listItem()
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

/*
	S.listItem()
		.title(title)
		.icon(icon)
		.schemaType(schemaType)
		.child(S.documentTypeList(schemaType).title(`All ${title}`));
*/

export default () =>
	S.list()
		.title("Content Management")
		.items([
			S.documentListItem()
				.title("Site Settings")
				.id("settings")
				.schemaType("settings")
				.icon(HiCog)
				.child(
					(id) =>
						S.document()
							.title("Site Settings")
							.schemaType("settings")
							.documentId(id),
					//.views([S.view.form()]),
				),
			process.env.NODE_ENV === "development" ? showAll : S.divider(),
		]);
