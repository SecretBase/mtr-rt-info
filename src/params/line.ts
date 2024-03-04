import { linesConfig } from '$lib/lines';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(line) {
	return Object.keys(linesConfig).includes(line);
}
