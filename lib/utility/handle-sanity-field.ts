import { IconType } from "react-icons";
import { capitalizeFirstLetter } from "./regex";

export function asReference(ref: string) {
	return {
		_type: "reference",
		_ref: ref,
	};
}

interface InternalLinkProps {
	label: string;
	type: string;
	name: `linkTo${string}`;
	icon?: IconType;
}
export function asInternalLink({ label, type, name, icon }: InternalLinkProps) {
	return {
		title: `${label} Smart Link.`,
		type: "object",
		name,
		icon,
		fields: [
			{
				title: `Reference to ${capitalizeFirstLetter(type)}`,
				name: "reference",
				type: "reference",
				weak: true,
				to: [{ type }],
				validation: (Rule) => Rule.required(),
				codegen: { required: true },
			},
		],
	};
}
