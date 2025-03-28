import { Country } from "@/types/medal_types";

import "./medals_table.css";

type Props = { countries: Country[] };

function MedalsTable({ countries }: Props) {
	return (
		<table className="medals-table fill">
			<thead>
				<tr className="header-row">
					<th></th>
					<th></th>
					<th></th>
					<th className="gold">
						<div>
							<div />
							Gold
						</div>
					</th>
					<th className="silver">
						<div>
							<div />
							Silver
						</div>
					</th>
					<th className="bronze">
						<div>
							<div />
							Bronze
						</div>
					</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{countries.map((country, index) => (
					<tr key={country.code} className="body-row">
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
	);
}

export default MedalsTable;
