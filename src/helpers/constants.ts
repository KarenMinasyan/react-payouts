import { StatusType } from 'types';

export const API_URLS = {
	PAYOUTS: 'payouts',
	SEARCH: 'search',
};

export const CHIP_LABELS: Record<Uppercase<StatusType>, StatusType> = {
	PENDING: 'Pending',
	COMPLETED: 'Completed',
};

export const ORDER_BY = {
	ASC: 'asc',
	DESC: 'desc',
} as const;
