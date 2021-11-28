import S from "@sanity/desk-tool/structure-builder";
import { structureListIcon } from "./structure-list-icon";

interface DynamicDocument {
	title: string;
	type: string;
	icon: () => JSX.Element;
	initialValues: any[];
}
export const structureListType = ({
	title,
	type,
	icon = structureListIcon("🚧"),
	initialValues,
}: DynamicDocument) =>
	S.listItem().title(title).icon(icon).child(
		S.documentTypeList(type).title(title).initialValueTemplates(initialValues),
		//.child((documentId) => views(documentId)),
	);
