/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	return {
		q: url.searchParams.get('q')
	};
}
