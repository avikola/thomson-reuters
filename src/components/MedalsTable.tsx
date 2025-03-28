import { Country, SortType } from "@/types/medal_types";

import "./medals_table.css";

type Props = { countries: Country[]; sort: SortType; onSort: (newSort: SortType) => void };

/**
 * Sortable Table of Medals
 */
function MedalsTable({ countries, sort, onSort }: Props) {
	const buttonMap: SortType[] = ["gold", "silver", "bronze", "total"];

	return (
		<table className="fill">
			<thead>
				<tr className="header-row">
					<th>#</th>
					<th></th>
					<th>Country</th>
					{buttonMap.map((buttonType, index) => (
						<th className={buttonType} key={buttonType}>
							<SortButton
								onClick={() => onSort(buttonType)}
								showSorter={sort === buttonType}
							>
								{index < 3 && <div />}
								{buttonType.toUpperCase()}
							</SortButton>
						</th>
					))}
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
						<td>{country.total}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default MedalsTable;

const SortButton = ({
	onClick,
	showSorter,
	children,
}: {
	onClick: () => void;
	showSorter: boolean;
	children: React.ReactNode;
}) => {
	return (
		<button className="sort-button" type="button" onClick={onClick}>
			{children}
			{showSorter && <span aria-hidden="true">▽</span>}
		</button>
	);
};
