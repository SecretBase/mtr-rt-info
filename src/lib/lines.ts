export const AEL = 'AEL' as const;
export const EAL = 'EAL' as const;
export const ISL = 'ISL' as const;
export const KTL = 'KTL' as const;
export const SIL = 'SIL' as const;
export const TCL = 'TCL' as const;
export const TKL = 'TKL' as const;
export const TML = 'TML' as const;
export const TWL = 'TWL' as const;

export type LINE =
	| typeof AEL
	| typeof EAL
	| typeof ISL
	| typeof KTL
	| typeof SIL
	| typeof TCL
	| typeof TKL
	| typeof TML
	| typeof TWL;

export const linesConfig = {
	[AEL]: {
		name: 'Airport Express',
		tcName: '機場快線',
		color: '#00888A'
	},
	[EAL]: {
		name: 'East Rail Line',
		tcName: '東鐵線',
		color: '#53B7E8'
	},
	[ISL]: {
		name: 'Island Line',
		tcName: '港島線',
		color: '#007DC5'
	},
	[KTL]: {
		name: 'Kwun Tong Line',
		tcName: '觀塘線',
		color: '#00AB4E'
	},
	[SIL]: {
		name: 'South Island Line',
		tcName: '南港島線',
		color: '#BAC429'
	},
	[TCL]: {
		name: 'Tung Chung Line',
		tcName: '東涌線',
		color: '#F7943E'
	},
	[TKL]: {
		name: 'Tseung Kwan O Line',
		tcName: '將軍澳線',
		color: '#7D499D'
	},
	[TML]: {
		name: 'Tuen Ma Line',
		tcName: '屯馬線',
		color: '#923011'
	},
	[TWL]: {
		name: 'Tsuen Wan Line',
		tcName: '荃灣線',
		color: '#ED1D24'
	}
} as const;
