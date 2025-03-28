"use client";

import { useEffect, useState } from "react";

import { Country } from "@/types/medal_types";

import { getCountryMedalData } from "@/services/medalsService";

import "./page.css";

import MedalsTable from "@/components/MedalsTable";

/**
 * Medal Count Mini App
 *
 */
export default function Home() {
	// Countries State
	const [countries, setCountries] = useState<Country[]>([]);

	// Loading State
	const [loading, setLoading] = useState<boolean>(true);

	// Error State
	const [error, setError] = useState<string | null>(null);

	// Get medal data from (simulated) API, after the first render
	useEffect(() => {
		const getCountryMedals = async () => {
			try {
				const { data } = await getCountryMedalData();

				setCountries(data);
			} catch (e) {
				if (e instanceof Error) setError(e.message);
				else setError("An error occurred");
			} finally {
				setLoading(false);
			}
		};

		getCountryMedals();
	}, []);

	// Handle loading display
	if (loading)
		return (
			<div className="container">
				<main className="fill center loading">
					<span>Loading...</span>
				</main>
			</div>
		);

	// Handle error display
	if (error)
		return (
			<div className="container">
				<main className="fill center error">{error}</main>
			</div>
		);

	return (
		<div className="container">
			<main className="fill">
				<MedalsTable countries={countries} />
			</main>
		</div>
	);
}
