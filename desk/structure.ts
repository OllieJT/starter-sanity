import S from "@sanity/desk-tool/structure-builder";
import { InitialValueTemplates } from "./initial-value-templates";
import { structureListAllTypes } from "../lib/structure/structure-list-all";
import { structureListType } from "../lib/structure/structure-list-type";
import { HiEmojiHappy } from "react-icons/hi";
import { isDevMode } from "../lib/constants";

const structure = () =>
	S.list()
		.title("Content Management")
		.items([
			S.documentListItem()
				.title("Singleton Article")
				.id("singleton-article")
				.schemaType("article"),

			S.divider(),

			structureListType({
				title: "All Articles",
				type: "article",
				icon: HiEmojiHappy,
				initialValues: [
					S.initialValueTemplateItem(InitialValueTemplates.Article),
				],
			}),

			structureListType({
				title: "All People",
				type: "person",
				icon: HiEmojiHappy,
				initialValues: [
					S.initialValueTemplateItem(InitialValueTemplates.Person),
				],
			}),

			structureListType({
				title: "All Collections",
				type: "collection",
				icon: HiEmojiHappy,
				initialValues: [
					S.initialValueTemplateItem(InitialValueTemplates.Collection),
				],
			}),

			isDevMode ? structureListAllTypes.listItem : S.divider(),
		]);

const listAll = () => structureListAllTypes.list;

export default isDevMode ? listAll : structure;
