export type Country = {
	code: string;
	gold: number;
	silver: number;
	bronze: number;
	total: number;
};

export type SortType = "gold" | "silver" | "bronze" | "total";

export type CountryMedalsResponse = {
	data: {
		code: string;
		gold: number;
		silver: number;
		bronze: number;
	}[];
};
