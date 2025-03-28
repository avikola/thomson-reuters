"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Country, SortType } from "@/types/medal_types";

import { getCountryMedalData } from "@/services/medalsService";

import { sortCountries } from "@/utils/sortCountries";

import "./page.css";

import MedalsTable from "@/components/MedalsTable";

/**
 * Medal Count Mini App
 *
 * - Sortable headers
 * - URL based sorting
 * - Handles loading + error state
 */
export default function Home() {
	// Countries State
	const [countries, setCountries] = useState<Country[]>([]);

	// Loading State
	const [loading, setLoading] = useState<boolean>(true);

	// Error State
	const [error, setError] = useState<string | null>(null);

	// URL sort handling
	const searchParams = useSearchParams();
	const router = useRouter();
	const sort = (searchParams.get("sort") as SortType) || "gold";

	// Get medal data from (simulated) API, after the first render
	useEffect(() => {
		const getCountryMedals = async () => {
			try {
				const { data } = await getCountryMedalData();

				const reformattedData: Country[] = data.map((country) => ({
					...country,
					total: country.gold + country.silver + country.bronze,
				}));

				setCountries(reformattedData);
			} catch (e) {
				if (e instanceof Error) setError(e.message);
				else setError("An error occurred");
			} finally {
				setLoading(false);
			}
		};

		getCountryMedals();
	}, []);

	// Update URL query param to new sort
	const onSort = (newSort: SortType) => {
		const params = new URLSearchParams(searchParams);

		params.set("sort", newSort);
		router.push(`/?${params.toString()}`);
	};

	const sortedCountries = useMemo(() => sortCountries(countries, sort), [countries, sort]);

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
				<MedalsTable countries={sortedCountries} sort={sort} onSort={onSort} />
			</main>
		</div>
	);
}
