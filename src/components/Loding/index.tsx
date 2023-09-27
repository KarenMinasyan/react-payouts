import React, { useState } from 'react';
import { useWait } from 'hooks';

import { type ILoadingProps } from './types';
import { LoadingContainer, Spinner } from './styles';
import { ReactComponent as SpinnerIcon } from 'assets/icons/spinner.svg';

export const Loading: React.FC<ILoadingProps> = ({ blur = false, loading }) => {
	const [isLoading, setIsLoading] = useState<boolean>(loading);
	useWait(() => setIsLoading(!!loading), loading ? 0 : 200);

	if (!isLoading) return null;

	return (
		<LoadingContainer blur={!!blur} active={loading}>
			<Spinner>
				<SpinnerIcon />
			</Spinner>
		</LoadingContainer>
	);
};

export default Loading;
