import { Country, SortType } from "@/types/medal_types";

/**
 * Sorts by Medal Count
 *
 * Rules:
 * Sorting by count unless:
 * - Gold ties --> sort by silver
 * - Silver / Bronze / Total ties --> sort by gold
 *
 * @param countries - Array of countries
 * @param sortBy - gold / silver / bronze / total
 * @returns
 */
export const sortCountries = (countries: Country[], sortBy: SortType): Country[] => {
	const sortedCountries = countries.sort((a, b) => {
		let sortDifference = b[sortBy] - a[sortBy];

		if (sortDifference !== 0) return sortDifference;

		// If primary sort is tied:
		switch (sortBy) {
			case "gold":
				sortDifference = b.silver - a.silver;
				break;
			case "silver":
				sortDifference = b.gold - a.gold;
				break;
			case "bronze":
				sortDifference = b.gold - a.gold;
				break;
			case "total":
				sortDifference = b.gold - a.gold;
				break;
			default:
				sortDifference = 0;
		}

		return sortDifference;
	});

	return sortedCountries;
};
