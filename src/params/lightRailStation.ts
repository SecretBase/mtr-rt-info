import { lightRailStationsConfig } from '$lib/lightRightStations';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return Object.keys(lightRailStationsConfig).some((id) => id === param);
}
