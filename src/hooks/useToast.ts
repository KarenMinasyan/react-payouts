import { useCallback } from 'react';
import { SnackbarKey, useSnackbar, VariantType } from 'notistack';

const opts = {
	autoHideDuration: 3000,
	preventDuplicate: true,
};

export const useToast = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const addToast = useCallback(
		(type: VariantType, msg: string) => {
			const key = enqueueSnackbar(msg, { ...opts, variant: type });
			return key;
		},
		[enqueueSnackbar]
	);

	const removeToast = useCallback(
		(key: SnackbarKey) => {
			closeSnackbar(key);
		},
		[closeSnackbar]
	);

	return { addToast, removeToast };
};
