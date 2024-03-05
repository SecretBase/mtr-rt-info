import { stationsConfig } from '$lib/stations';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(station) {
	return Object.keys(stationsConfig).includes(station);
}
