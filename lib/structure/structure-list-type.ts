import S from "@sanity/desk-tool/structure-builder";
import { HiDocument } from "react-icons/hi";
import { IconType } from "react-icons";

interface DynamicDocument {
	title: string;
	type: string;
	icon: IconType | undefined;
	initialValues: any[];
}
export const structureListType = ({
	title,
	type,
	icon = HiDocument,
	initialValues,
}: DynamicDocument) =>
	S.listItem().title(title).icon(icon).child(
		S.documentTypeList(type).title(title).initialValueTemplates(initialValues),
		//.child((documentId) => views(documentId)),
	);
