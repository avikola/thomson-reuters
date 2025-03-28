export type Country = {
	code: string;
	gold: number;
	silver: number;
	bronze: number;
};

export type CountryMedalsResponse = {
	data: Country[];
};
