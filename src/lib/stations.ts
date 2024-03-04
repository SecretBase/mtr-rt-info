export const ADM = 'ADM' as const;
export const AIR = 'AIR' as const;
export const AUS = 'AUS' as const;
export const AWE = 'AWE' as const;
export const CAB = 'CAB' as const;
export const CEN = 'CEN' as const;
export const CHH = 'CHH' as const;
export const CHW = 'CHW' as const;
export const CIO = 'CIO' as const;
export const CKT = 'CKT' as const;
export const CSW = 'CSW' as const;
export const DIH = 'DIH' as const;
export const ETS = 'ETS' as const;
export const EXC = 'EXC' as const;
export const FAN = 'FAN' as const;
export const FOH = 'FOH' as const;
export const FOT = 'FOT' as const;
export const HAH = 'HAH' as const;
export const HEO = 'HEO' as const;
export const HFC = 'HFC' as const;
export const HIK = 'HIK' as const;
export const HKU = 'HKU' as const;
export const HOK = 'HOK' as const;
export const HOM = 'HOM' as const;
export const HUH = 'HUH' as const;
export const JOR = 'JOR' as const;
export const KAT = 'KAT' as const;
export const KET = 'KET' as const;
export const KOB = 'KOB' as const;
export const KOT = 'KOT' as const;
export const KOW = 'KOW' as const;
export const KSR = 'KSR' as const;
export const KWF = 'KWF' as const;
export const KWH = 'KWH' as const;
export const KWT = 'KWT' as const;
export const LAK = 'LAK' as const;
export const LAT = 'LAT' as const;
export const LCK = 'LCK' as const;
export const LET = 'LET' as const;
export const LHP = 'LHP' as const;
export const LMC = 'LMC' as const;
export const LOF = 'LOF' as const;
export const LOP = 'LOP' as const;
export const LOW = 'LOW' as const;
export const MEF = 'MEF' as const;
export const MKK = 'MKK' as const;
export const MOK = 'MOK' as const;
export const MOS = 'MOS' as const;
export const NAC = 'NAC' as const;
export const NOP = 'NOP' as const;
export const NTK = 'NTK' as const;
export const OCP = 'OCP' as const;
export const OLY = 'OLY' as const;
export const POA = 'POA' as const;
export const PRE = 'PRE' as const;
export const QUB = 'QUB' as const;
export const RAC = 'RAC' as const;
export const SHM = 'SHM' as const;
export const SHS = 'SHS' as const;
export const SHT = 'SHT' as const;
export const SHW = 'SHW' as const;
export const SIH = 'SIH' as const;
export const SKM = 'SKM' as const;
export const SKW = 'SKW' as const;
export const SOH = 'SOH' as const;
export const SSP = 'SSP' as const;
export const STW = 'STW' as const;
export const SUN = 'SUN' as const;
export const SUW = 'SUW' as const;
export const SWH = 'SWH' as const;
export const SYP = 'SYP' as const;
export const TAK = 'TAK' as const;
export const TAP = 'TAP' as const;
export const TAW = 'TAW' as const;
export const TIH = 'TIH' as const;
export const TIK = 'TIK' as const;
export const TIS = 'TIS' as const;
export const TKO = 'TKO' as const;
export const TKW = 'TKW' as const;
export const TSH = 'TSH' as const;
export const TST = 'TST' as const;
export const TSW = 'TSW' as const;
export const TSY = 'TSY' as const;
export const TUC = 'TUC' as const;
export const TUM = 'TUM' as const;
export const TWH = 'TWH' as const;
export const TWO = 'TWO' as const;
export const TWW = 'TWW' as const;
export const UNI = 'UNI' as const;
export const WAC = 'WAC' as const;
export const WCH = 'WCH' as const;
export const WHA = 'WHA' as const;
export const WKS = 'WKS' as const;
export const WTS = 'WTS' as const;
export const YAT = 'YAT' as const;
export const YMT = 'YMT' as const;
export const YUL = 'YUL' as const;

export type STATION =
	| typeof ADM
	| typeof AIR
	| typeof AUS
	| typeof AWE
	| typeof CAB
	| typeof CEN
	| typeof CHH
	| typeof CHW
	| typeof CIO
	| typeof CKT
	| typeof CSW
	| typeof DIH
	| typeof ETS
	| typeof EXC
	| typeof FAN
	| typeof FOH
	| typeof FOT
	| typeof HAH
	| typeof HEO
	| typeof HFC
	| typeof HIK
	| typeof HKU
	| typeof HOK
	| typeof HOM
	| typeof HUH
	| typeof JOR
	| typeof KAT
	| typeof KET
	| typeof KOB
	| typeof KOT
	| typeof KOW
	| typeof KSR
	| typeof KWF
	| typeof KWH
	| typeof KWT
	| typeof LAK
	| typeof LAT
	| typeof LCK
	| typeof LET
	| typeof LHP
	| typeof LMC
	| typeof LOF
	| typeof LOP
	| typeof LOW
	| typeof MEF
	| typeof MKK
	| typeof MOK
	| typeof MOS
	| typeof NAC
	| typeof NOP
	| typeof NTK
	| typeof OCP
	| typeof OLY
	| typeof POA
	| typeof PRE
	| typeof QUB
	| typeof RAC
	| typeof SHM
	| typeof SHS
	| typeof SHT
	| typeof SHW
	| typeof SIH
	| typeof SKM
	| typeof SKW
	| typeof SOH
	| typeof SSP
	| typeof STW
	| typeof SUN
	| typeof SUW
	| typeof SWH
	| typeof SYP
	| typeof TAK
	| typeof TAP
	| typeof TAW
	| typeof TIH
	| typeof TIK
	| typeof TIS
	| typeof TKO
	| typeof TKW
	| typeof TSH
	| typeof TST
	| typeof TSW
	| typeof TSY
	| typeof TUC
	| typeof TUM
	| typeof TWH
	| typeof TWO
	| typeof TWW
	| typeof UNI
	| typeof WAC
	| typeof WCH
	| typeof WHA
	| typeof WKS
	| typeof WTS
	| typeof YAT
	| typeof YMT
	| typeof YUL;

export const stationsConfig: Record<STATION, { name: string }> = {
	[ADM]: {
		name: 'Admiralty'
	},
	[AIR]: {
		name: 'Airport'
	},
	[AUS]: {
		name: 'Austin'
	},
	[AWE]: {
		name: 'AsiaWorld Expo'
	},
	[CAB]: {
		name: 'Causeway Bay'
	},
	[CEN]: {
		name: 'Central'
	},
	[CHH]: {
		name: 'Choi Hung'
	},
	[CHW]: {
		name: 'Chai Wan'
	},
	[CIO]: {
		name: 'City One'
	},
	[CKT]: {
		name: 'Che Kung Temple'
	},
	[CSW]: {
		name: 'Cheung Sha Wan'
	},
	[DIH]: {
		name: 'Diamond Hill'
	},
	[ETS]: {
		name: 'East Tsim Sha Tsui'
	},
	[EXC]: {
		name: 'Exhibition Centre'
	},
	[FAN]: {
		name: 'Fanling'
	},
	[FOH]: {
		name: 'Fortress Hill'
	},
	[FOT]: {
		name: 'Fo Tan'
	},
	[HAH]: {
		name: 'Hang Hau'
	},
	[HEO]: {
		name: 'Heng On'
	},
	[HFC]: {
		name: 'Heng Fa Chuen'
	},
	[HIK]: {
		name: 'Hin Keng'
	},
	[HKU]: {
		name: 'HKU'
	},
	[HOK]: {
		name: 'Hong Kong'
	},
	[HOM]: {
		name: 'Ho Man Tin'
	},
	[HUH]: {
		name: 'Hung Hom'
	},
	[JOR]: {
		name: 'Jordan'
	},
	[KAT]: {
		name: 'Kai Tak'
	},
	[KET]: {
		name: 'Kennedy Town'
	},
	[KOB]: {
		name: 'Kowloon Bay'
	},
	[KOT]: {
		name: 'Kowloon Tong'
	},
	[KOW]: {
		name: 'Kowloon'
	},
	[KSR]: {
		name: 'Kam Sheung Road'
	},
	[KWF]: {
		name: 'Kwai Fong'
	},
	[KWH]: {
		name: 'Kwai Hing'
	},
	[KWT]: {
		name: 'Kwun Tong'
	},
	[LAK]: {
		name: 'Lai King'
	},
	[LAT]: {
		name: 'Lam Tin'
	},
	[LCK]: {
		name: 'Lai Chi Kok'
	},
	[LET]: {
		name: 'Lei Tung'
	},
	[LHP]: {
		name: 'LOHAS Park'
	},
	[LMC]: {
		name: 'Lok Ma Chau'
	},
	[LOF]: {
		name: 'Lok Fu'
	},
	[LOP]: {
		name: 'Long Ping'
	},
	[LOW]: {
		name: 'Lo Wu'
	},
	[MEF]: {
		name: 'Mei Foo'
	},
	[MKK]: {
		name: 'Mong Kok East'
	},
	[MOK]: {
		name: 'Mong Kok'
	},
	[MOS]: {
		name: 'Ma On Shan'
	},
	[NAC]: {
		name: 'Nam Cheong'
	},
	[NOP]: {
		name: 'North Point'
	},
	[NTK]: {
		name: 'Ngau Tau Kok'
	},
	[OCP]: {
		name: 'Ocean Park'
	},
	[OLY]: {
		name: 'Olympic'
	},
	[POA]: {
		name: 'Po Lam'
	},
	[PRE]: {
		name: 'Prince Edward'
	},
	[QUB]: {
		name: 'Quarry Bay'
	},
	[RAC]: {
		name: 'Racecourse'
	},
	[SHM]: {
		name: 'Shek Mun'
	},
	[SHS]: {
		name: 'Sheung Shui'
	},
	[SHT]: {
		name: 'Sha Tin'
	},
	[SHW]: {
		name: 'Sheung Wan'
	},
	[SIH]: {
		name: 'Siu Hong'
	},
	[SKM]: {
		name: 'Shek Kip Mei'
	},
	[SKW]: {
		name: 'Shau Kei Wan'
	},
	[SOH]: {
		name: 'South Horizons'
	},
	[SSP]: {
		name: 'Sham Shui Po'
	},
	[STW]: {
		name: 'Sha Tin Wai'
	},
	[SUN]: {
		name: 'Sunny Bay'
	},
	[SUW]: {
		name: 'Sung Wong Toi'
	},
	[SWH]: {
		name: 'Sai Wan Ho'
	},
	[SYP]: {
		name: 'Sai Ying Pun'
	},
	[TAK]: {
		name: 'Tai Koo'
	},
	[TAP]: {
		name: 'Tai Po Market'
	},
	[TAW]: {
		name: 'Tai Wai'
	},
	[TIH]: {
		name: 'Tin Hau'
	},
	[TIK]: {
		name: 'Tiu Keng Leng'
	},
	[TIS]: {
		name: 'Tin Shui Wai'
	},
	[TKO]: {
		name: 'Tseung Kwan O'
	},
	[TKW]: {
		name: 'To Kwa Wan'
	},
	[TSH]: {
		name: 'Tai Shui Hang'
	},
	[TST]: {
		name: 'Tsim Sha Tsui'
	},
	[TSW]: {
		name: 'Tsuen Wan'
	},
	[TSY]: {
		name: 'Tsing Yi'
	},
	[TUC]: {
		name: 'Tung Chung'
	},
	[TUM]: {
		name: 'Tuen Mun'
	},
	[TWH]: {
		name: 'Tai Wo Hau'
	},
	[TWO]: {
		name: 'Tai Wo'
	},
	[TWW]: {
		name: 'Tsuen Wan West'
	},
	[UNI]: {
		name: 'University'
	},
	[WAC]: {
		name: 'Wan Chai'
	},
	[WCH]: {
		name: 'Wong Chuk Hang'
	},
	[WHA]: {
		name: 'Whampoa'
	},
	[WKS]: {
		name: 'Wu Kai Sha'
	},
	[WTS]: {
		name: 'Wong Tai Sin'
	},
	[YAT]: {
		name: 'Yau Tong'
	},
	[YMT]: {
		name: 'Yau Ma Tei'
	},
	[YUL]: {
		name: 'Yuen Long'
	}
} as const;
