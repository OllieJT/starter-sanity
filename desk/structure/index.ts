import S from "@sanity/desk-tool/structure-builder";
import { InitialValueTemplates } from "../initial-value-templates";
import { structureListAll } from "./helper/structure-list-all";
import { structureListType } from "./helper/structure-list-type";
import { structureListIcon } from "./helper/structure-list-icon";

export default () =>
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
				icon: structureListIcon("A"),
				initialValues: [
					S.initialValueTemplateItem(InitialValueTemplates.Article),
				],
			}),

			structureListType({
				title: "All People",
				type: "person",
				icon: structureListIcon("P"),
				initialValues: [
					S.initialValueTemplateItem(InitialValueTemplates.Person),
				],
			}),

			structureListType({
				title: "All Collections",
				type: "collection",
				icon: structureListIcon("C"),
				initialValues: [
					S.initialValueTemplateItem(InitialValueTemplates.Collection),
				],
			}),

			process.env.NODE_ENV === "development" ? structureListAll : S.divider(),
		]);
