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
		color: '#00888A'
	},
	[EAL]: {
		name: 'East Rail Line',
		color: '#53B7E8'
	},
	[ISL]: {
		name: 'Island Line',
		color: '#007DC5'
	},
	[KTL]: {
		name: 'Kwun Tong Line',
		color: '#00AB4E'
	},
	[SIL]: {
		name: 'South Island Line',
		color: '#BAC429'
	},
	[TCL]: {
		name: 'Tung Chung Line',
		color: '#F7943E'
	},
	[TKL]: {
		name: 'Tseung Kwan O Line',
		color: '#7D499D'
	},
	[TML]: {
		name: 'Tuen Ma Line',
		color: '#923011'
	},
	[TWL]: {
		name: 'Tsuen Wan Line',
		color: '#ED1D24'
	}
} as const;
