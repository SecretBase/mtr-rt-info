import { differenceInMinutes } from 'date-fns';

export function getDifferentInMinutesByTimeStamp(time: number | string) {
	return Math.max(0, differenceInMinutes(time, new Date()));
}

export function isArrivalTimeLessThenOneMinutes(etaDate: Date) {
	const ONE_MINUTE = 1;
	return getDifferentInMinutesByTimeStamp(etaDate.getTime()) <= ONE_MINUTE;
}
