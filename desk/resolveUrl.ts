const secret = "olliejt"; // DO NOT CHANGE, this must match the frontent secret.

export default function resolveProductionUrl(document) {
	const domain =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://<TODO>";

	const slug = document?.slug?.current;
	const type = document?._type;

	const path = `/api/preview?secret=${secret}&slug=${slug}&type=${type}`;

	return `${domain}${path.replace("//", "/")}`;
}
