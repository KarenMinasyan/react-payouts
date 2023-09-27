import { useState, useMemo, useCallback } from 'react';
import { Wrapper } from 'components';
import { ISortDir } from 'types';

import { type ISortableTableProps } from './types';
import {
	ArrowDown,
	ArrowUp,
	ArrowWrapper,
	Table,
	TableHeader,
	Tbody,
	Td,
	Thead,
	Tr,
} from './styles';
import { ORDER_BY } from 'helpers';

const { ASC, DESC } = ORDER_BY;

export const SortableTable = <T extends object>({
	data,
	headers,
	WrapEl,
	children,
}: ISortableTableProps<T>) => {
	const [sortOptions, setSortOptions] = useState<
		Record<keyof typeof headers, ISortDir | undefined>
	>({} as Record<keyof typeof headers, ISortDir | undefined>);

	const sortedData = useMemo(() => {
		let _data = [...data];
		Object.keys(headers).forEach(k => {
			const column = k as keyof typeof headers;
			if (sortOptions[column]) {
				_data = _data.sort((a, b) => {
					const dir = sortOptions[column] === ASC ? 1 : -1;
					return a[column] > b[column] ? dir : -dir;
				});
			}
		});

		return _data;
	}, [data, headers, sortOptions]);

	const onSort = useCallback(
		(column: keyof typeof headers) => {
			const prevData = sortOptions
				? { ...sortOptions }
				: ({} as Record<keyof typeof headers, ISortDir | undefined>);
			let dir = prevData[column];
			if (!dir) {
				dir = ASC;
			} else if (dir === ASC) {
				dir = DESC;
			} else {
				dir = undefined;
			}
			setSortOptions({ ...prevData, [column]: dir });
		},
		[sortOptions]
	);

	return (
		<Wrapper WrapEl={WrapEl}>
			<Table>
				<Thead>
					<Tr>
						{Object.keys(headers).map((column, idx) => (
							<Td key={idx} onClick={() => onSort(column as keyof typeof headers)}>
								<TableHeader>
									{headers[column as keyof typeof headers]}
									{sortOptions[column as keyof typeof headers] ? (
										sortOptions[column as keyof typeof headers] === ASC ? (
											<ArrowDown />
										) : (
											<ArrowUp />
										)
									) : (
										<ArrowWrapper>
											<ArrowUp />
											<ArrowDown />
										</ArrowWrapper>
									)}
								</TableHeader>
							</Td>
						))}
					</Tr>
				</Thead>
				<Tbody>{children(sortedData)}</Tbody>
			</Table>
		</Wrapper>
	);
};

export default SortableTable;
