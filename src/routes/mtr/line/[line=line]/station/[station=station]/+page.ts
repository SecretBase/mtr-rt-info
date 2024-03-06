import { getMTRSchedule } from '$lib/getMTRSchedule';
import type { LINE } from '$lib/lines';
import type { STATION } from '$lib/stations';

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: ['getMTRSchedule', params.line, params.station],
		gcTime: 0,
		staleTime: 0,
		queryFn: () =>
			getMTRSchedule({
				line: params.line as LINE,
				station: params.station as STATION
			})
	});
}
