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

export const stationsConfig: Record<STATION, { name: string; tcName: string }> = {
	[ADM]: {
		name: 'Admiralty',
		tcName: '金鐘'
	},
	[AIR]: {
		name: 'Airport',
		tcName: '香港國際機場'
	},
	[AUS]: {
		name: 'Austin',
		tcName: '柯士甸'
	},
	[AWE]: {
		name: 'AsiaWorld Expo',
		tcName: '亞洲國際博覽館'
	},
	[CAB]: {
		name: 'Causeway Bay',
		tcName: '銅鑼灣'
	},
	[CEN]: {
		name: 'Central',
		tcName: '中環'
	},
	[CHH]: {
		name: 'Choi Hung',
		tcName: '彩虹'
	},
	[CHW]: {
		name: 'Chai Wan',
		tcName: '柴灣'
	},
	[CIO]: {
		name: 'City One',
		tcName: '第一城'
	},
	[CKT]: {
		name: 'Che Kung Temple',
		tcName: '車公廟'
	},
	[CSW]: {
		name: 'Cheung Sha Wan',
		tcName: '長沙灣'
	},
	[DIH]: {
		name: 'Diamond Hill',
		tcName: '鑽石山'
	},
	[ETS]: {
		name: 'East Tsim Sha Tsui',
		tcName: '尖東'
	},
	[EXC]: {
		name: 'Exhibition Centre',
		tcName: '會展'
	},
	[FAN]: {
		name: 'Fanling',
		tcName: '粉嶺'
	},
	[FOH]: {
		name: 'Fortress Hill',
		tcName: '砲台山'
	},
	[FOT]: {
		name: 'Fo Tan',
		tcName: '火炭'
	},
	[HAH]: {
		name: 'Hang Hau',
		tcName: '坑口'
	},
	[HEO]: {
		name: 'Heng On',
		tcName: '恒安'
	},
	[HFC]: {
		name: 'Heng Fa Chuen',
		tcName: '杏花村'
	},
	[HIK]: {
		name: 'Hin Keng',
		tcName: '顯徑'
	},
	[HKU]: {
		name: 'HKU',
		tcName: '香港大學'
	},
	[HOK]: {
		name: 'Hong Kong',
		tcName: '香港'
	},
	[HOM]: {
		name: 'Ho Man Tin',
		tcName: '何文田'
	},
	[HUH]: {
		name: 'Hung Hom',
		tcName: '紅磡'
	},
	[JOR]: {
		name: 'Jordan',
		tcName: '佐敦'
	},
	[KAT]: {
		name: 'Kai Tak',
		tcName: '啟德'
	},
	[KET]: {
		name: 'Kennedy Town',
		tcName: '堅尼地城'
	},
	[KOB]: {
		name: 'Kowloon Bay',
		tcName: '九龍灣'
	},
	[KOT]: {
		name: 'Kowloon Tong',
		tcName: '九龍塘'
	},
	[KOW]: {
		name: 'Kowloon',
		tcName: '九龍'
	},
	[KSR]: {
		name: 'Kam Sheung Road',
		tcName: '錦上路'
	},
	[KWF]: {
		name: 'Kwai Fong',
		tcName: '葵芳'
	},
	[KWH]: {
		name: 'Kwai Hing',
		tcName: '葵興'
	},
	[KWT]: {
		name: 'Kwun Tong',
		tcName: '觀塘'
	},
	[LAK]: {
		name: 'Lai King',
		tcName: '荔景'
	},
	[LAT]: {
		name: 'Lam Tin',
		tcName: '藍田'
	},
	[LCK]: {
		name: 'Lai Chi Kok',
		tcName: '荔枝角'
	},
	[LET]: {
		name: 'Lei Tung',
		tcName: '利東'
	},
	[LHP]: {
		name: 'LOHAS Park',
		tcName: '日出康城'
	},
	[LMC]: {
		name: 'Lok Ma Chau',
		tcName: '落馬洲'
	},
	[LOF]: {
		name: 'Lok Fu',
		tcName: '樂富'
	},
	[LOP]: {
		name: 'Long Ping',
		tcName: '朗屏'
	},
	[LOW]: {
		name: 'Lo Wu',
		tcName: '羅湖'
	},
	[MEF]: {
		name: 'Mei Foo',
		tcName: '美孚'
	},
	[MKK]: {
		name: 'Mong Kok East',
		tcName: '旺角東'
	},
	[MOK]: {
		name: 'Mong Kok',
		tcName: '旺角'
	},
	[MOS]: {
		name: 'Ma On Shan',
		tcName: '馬鞍山'
	},
	[NAC]: {
		name: 'Nam Cheong',
		tcName: '南昌'
	},
	[NOP]: {
		name: 'North Point',
		tcName: '北角'
	},
	[NTK]: {
		name: 'Ngau Tau Kok',
		tcName: '牛頭角'
	},
	[OCP]: {
		name: 'Ocean Park',
		tcName: '海洋公園'
	},
	[OLY]: {
		name: 'Olympic',
		tcName: '奧運'
	},
	[POA]: {
		name: 'Po Lam',
		tcName: '寶琳'
	},
	[PRE]: {
		name: 'Prince Edward',
		tcName: '太子'
	},
	[QUB]: {
		name: 'Quarry Bay',
		tcName: '鰂魚湧'
	},
	[RAC]: {
		name: 'Racecourse',
		tcName: '馬場'
	},
	[SHM]: {
		name: 'Shek Mun',
		tcName: '石門'
	},
	[SHS]: {
		name: 'Sheung Shui',
		tcName: '上水'
	},
	[SHT]: {
		name: 'Sha Tin',
		tcName: '沙田'
	},
	[SHW]: {
		name: 'Sheung Wan',
		tcName: '上環'
	},
	[SIH]: {
		name: 'Siu Hong',
		tcName: '兆康'
	},
	[SKM]: {
		name: 'Shek Kip Mei',
		tcName: '石硤尾'
	},
	[SKW]: {
		name: 'Shau Kei Wan',
		tcName: '筲箕灣'
	},
	[SOH]: {
		name: 'South Horizons',
		tcName: '海怡半島'
	},
	[SSP]: {
		name: 'Sham Shui Po',
		tcName: '深水埗'
	},
	[STW]: {
		name: 'Sha Tin Wai',
		tcName: '沙田圍'
	},
	[SUN]: {
		name: 'Sunny Bay',
		tcName: '欣澳'
	},
	[SUW]: {
		name: 'Sung Wong Toi',
		tcName: '宋皇臺'
	},
	[SWH]: {
		name: 'Sai Wan Ho',
		tcName: '西灣河'
	},
	[SYP]: {
		name: 'Sai Ying Pun',
		tcName: '西營盤'
	},
	[TAK]: {
		name: 'Tai Koo',
		tcName: '太古'
	},
	[TAP]: {
		name: 'Tai Po Market',
		tcName: '大埔墟'
	},
	[TAW]: {
		name: 'Tai Wai',
		tcName: '大圍'
	},
	[TIH]: {
		name: 'Tin Hau',
		tcName: '天后'
	},
	[TIK]: {
		name: 'Tiu Keng Leng',
		tcName: '調景嶺'
	},
	[TIS]: {
		name: 'Tin Shui Wai',
		tcName: '天水圍'
	},
	[TKO]: {
		name: 'Tseung Kwan O',
		tcName: '將軍澳'
	},
	[TKW]: {
		name: 'To Kwa Wan',
		tcName: '土瓜灣'
	},
	[TSH]: {
		name: 'Tai Shui Hang',
		tcName: '大水坑'
	},
	[TST]: {
		name: 'Tsim Sha Tsui',
		tcName: '尖沙咀'
	},
	[TSW]: {
		name: 'Tsuen Wan',
		tcName: '荃灣'
	},
	[TSY]: {
		name: 'Tsing Yi',
		tcName: '青衣'
	},
	[TUC]: {
		name: 'Tung Chung',
		tcName: '東涌'
	},
	[TUM]: {
		name: 'Tuen Mun',
		tcName: '屯門'
	},
	[TWH]: {
		name: 'Tai Wo Hau',
		tcName: '大窩口'
	},
	[TWO]: {
		name: 'Tai Wo',
		tcName: '太和'
	},
	[TWW]: {
		name: 'Tsuen Wan West',
		tcName: '荃灣西'
	},
	[UNI]: {
		name: 'University',
		tcName: '大學'
	},
	[WAC]: {
		name: 'Wan Chai',
		tcName: '灣仔'
	},
	[WCH]: {
		name: 'Wong Chuk Hang',
		tcName: '黃竹坑'
	},
	[WHA]: {
		name: 'Whampoa',
		tcName: '黃埔'
	},
	[WKS]: {
		name: 'Wu Kai Sha',
		tcName: '烏溪沙'
	},
	[WTS]: {
		name: 'Wong Tai Sin',
		tcName: '黃大仙'
	},
	[YAT]: {
		name: 'Yau Tong',
		tcName: '油塘'
	},
	[YMT]: {
		name: 'Yau Ma Tei',
		tcName: '油麻地'
	},
	[YUL]: {
		name: 'Yuen Long',
		tcName: '元朗'
	}
} as const;
