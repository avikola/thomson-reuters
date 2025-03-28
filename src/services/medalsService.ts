import { CountryMedalsResponse } from "@/types/medal_types";

/**
 *
 * @returns Promise with countries' medal data response
 * @throws {Error} "API Error" when API fails
 */
export const getCountryMedalData = async (): Promise<CountryMedalsResponse> => {
	try {
		const response = await fetch("/config/medals.json");

		// Simulate API Error
		if (!response.ok) {
			const errorMsg = new Error("Failed to fetch medal data.");
			errorMsg.name = "API Error";

			throw errorMsg;
		}

		return { data: await response.json() };
	} catch (e) {
		if (e instanceof Error && e.name === "API Error") throw e;

		throw new Error("Error fetching medal data. Please try again later.");
	}
};
