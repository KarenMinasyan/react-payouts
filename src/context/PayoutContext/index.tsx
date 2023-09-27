import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getPayouts, search } from 'services';
import { PayoutsType } from 'types';
import { useToast } from 'hooks';

export interface IPayoutContext {
	payouts: PayoutsType[];
	loadingPayouts: boolean;
	onSearch: (_query: string) => void;
}

export const initialState = {
	payouts: [],
	loadingPayouts: false,
	onSearch: (_query: string) => null,
};

export const PayoutContext = createContext<IPayoutContext>(initialState);

export const PayoutContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [payouts, setPayouts] = useState<PayoutsType[]>([]);
	const [loadingPayouts, setLoadingPayouts] = useState<boolean>(false);
	const { addToast } = useToast();

	const fetchPayouts = useCallback(() => {
		setLoadingPayouts(true);
		return getPayouts()
			.then(({ data: { data } }) => setPayouts(data))
			.catch(err => addToast('error', err.message))
			.finally(() => setLoadingPayouts(false));
	}, []);

	const onSearch = useCallback((query: string) => {
		if (Boolean(query)) {
			setLoadingPayouts(true);
			return search({ params: { query } })
				.then(({ data }) => setPayouts(data))
				.catch(err => addToast('error', err.message))
				.finally(() => setLoadingPayouts(false));
		}
		fetchPayouts();
	}, []);

	useEffect(() => {
		fetchPayouts();
	}, []);

	const values = {
		payouts,
		loadingPayouts,
		onSearch,
	};

	return <PayoutContext.Provider value={values}>{children}</PayoutContext.Provider>;
};

export const usePayout = () => useContext(PayoutContext);
