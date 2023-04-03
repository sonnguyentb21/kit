/**
 * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash' | 'entries'} Option
 * @template {Option extends 'prerender' ? import('types').PrerenderOption : Option extends 'trailingSlash' ? import('types').TrailingSlash : Option extends 'entries' ? import('types').PrerenderEntryGenerator : boolean} Value
 *
 * @param {Array<import('types').SSRNode | undefined>} nodes
 * @param {Option} option
 *
 * @returns {Value | undefined}
 */
export function get_option(nodes, option) {
	return nodes.reduce((value, node) => {
		return /** @type {Value} TypeScript's too dumb to understand this */ (
			node?.universal?.[option] ?? node?.server?.[option] ?? value
		);
	}, /** @type {Value | undefined} */ (undefined));
}
