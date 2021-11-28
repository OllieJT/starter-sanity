import T from "@sanity/base/initial-value-template-builder";

export enum InitialValueTemplates {
	Article = "article-default",
	Person = "person-default",
	Collection = "collection-default",
}

// new Date().toISOString(),

export const initialValueTemplates = [
	{
		id: InitialValueTemplates.Article,
		title: "Article",
		schemaType: "article",
		value: {},
	},
	{
		id: InitialValueTemplates.Person,
		title: "Person",
		schemaType: "person",
		value: {},
	},
	{
		id: InitialValueTemplates.Collection,
		title: "Collection",
		schemaType: "collection",
		value: {},
	},
];

export default [
	...T.defaults(),
	...initialValueTemplates.map((template) => T.template(template)),
];
