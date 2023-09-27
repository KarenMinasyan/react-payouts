import { ReactElement } from 'react';
export type ISortDir = 'desc' | 'asc';

export type PayoutsType = {
	dateAndTime: Date;
	status: StatusType;
	value: string;
	username: string;
};

export type StatusType = 'Pending' | 'Completed';

export type RouteType = {
	path: string;
	id: string;
	element: ReactElement;
};

export type TFunc = () => void;
