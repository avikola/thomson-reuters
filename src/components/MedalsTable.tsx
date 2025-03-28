import { Country } from "@/types/medal_types";

type Props = { countries: Country[] };

function MedalsTable({ countries }: Props) {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Rank</th>
						<th>Country</th>
						<th>Gold</th>
						<th>Silver</th>
						<th>Bronze</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((country, index) => (
						<tr key={country.code}>
							<td>{index + 1}</td>
							<td>Flag</td>
							<td>{country.code}</td>
							<td>{country.gold}</td>
							<td>{country.silver}</td>
							<td>{country.bronze}</td>
							<td>{country.gold + country.silver + country.bronze}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default MedalsTable;
