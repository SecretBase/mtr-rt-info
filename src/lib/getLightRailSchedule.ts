import { lightRailStationsConfig } from './lightRightStations';

type LightRailResponse = {
	status: 0 | 1;
	system_time: string;
	platform_list: {
		route_list: {
			train_length: number;
			arrival_departure: 'D' | 'A';
			dest_en: string;
			dest_ch: string;
			time_en: string;
			time_ch: string;
			route_no: string;
			stop: 0;
		}[];
		platform_id: number;
	}[];
};

export const getLightRailSchedule = ({
	station
}: {
	station: keyof typeof lightRailStationsConfig;
}) => {
	const url = new URL('https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php');

	url.searchParams.append('station_id', station);

	return fetch(url).then((res) => res.json() as Promise<LightRailResponse>);
};
