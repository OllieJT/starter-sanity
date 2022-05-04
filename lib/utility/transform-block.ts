// Strips blocks to raw text
export function transformBlocks(blocks: any[] | undefined, fallback = "...") {
	if (!blocks) {
		return fallback;
	}
	const block = (blocks || []).find((block) => block._type === "block");
	const content = block.children
		.filter((child) => child._type === "span")
		.map((span) => span.text)
		.join("");

	return content ?? fallback;
}