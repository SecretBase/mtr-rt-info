import type { LINE } from './lines';
import type { STATION } from './stations';

export const getMTRSchedule = ({
	line,
	station,
	lang = 'TC'
}: {
	line: LINE;
	station: STATION;
	lang?: 'EN' | 'TC';
}) => {
	const url = new URL('https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php');

	url.searchParams.append('line', line);
	url.searchParams.append('sta', station);
	url.searchParams.append('lang', lang);

	return fetch(url).then(
		(res) =>
			res.json() as Promise<{
				Isdelay: 'Y' | 'N';
				curr_time: string;
				sys_time: string;
				url: string;
				data: Record<
					`${LINE}-${STATION}`,
					{
						curr_time: string;
						sys_time: string;
						UP?: {
							seq: number;
							dest: STATION;
							plat: string;
							time: string;
						}[];
						DOWN?: {
							seq: number;
							dest: STATION;
							plat: string;
							time: string;
						}[];
					}
				>;
			}>
	);
};
