import S from "@sanity/base/structure-builder";
import { initialValueTemplates } from "./initial-value-templates";

export default [
	...initialValueTemplates.map((template) =>
		S.initialValueTemplateItem(template.id).id(template.id).title(template.title),
	),

	//...S.defaultInitialValueTemplateItems()
];
