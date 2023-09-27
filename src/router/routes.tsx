import { lazy, Suspense } from 'react';
import { RouteType } from 'types';

export const Payouts = lazy(() => import('pages/Payouts'));

export const ROUTES: RouteType[] = [
	{
		id: 'payouts',
		path: '',
		element: (
			<Suspense fallback={<div />}>
				<Payouts />
			</Suspense>
		),
	},
];
