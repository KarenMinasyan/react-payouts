import React from 'react';

export interface ISortableTableProps<T> {
	/**
	 * Table data
	 */
	data: T[];

	/**
	 * Table headers that has format of <column, label>
	 * `column` should be key of `T`, `label` is a string showing user.
	 * @example: `column` can be `firstName` and `label` can be `First name`
	 */
	headers: Record<Partial<keyof T>, string>;

	/**
	 * Wrapper element: div or span, etc
	 */
	WrapEl?: React.ElementType;

	/**
	 * children will render handled(sorted) data
	 * @param _data T[] sorted ata
	 * @returns React.ReactNode
	 */
	children: (_data: T[]) => React.ReactNode;
}
