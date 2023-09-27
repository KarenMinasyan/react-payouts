import React from 'react';

import { type IWrapperProps } from './types';

const Wrapper: React.FC<IWrapperProps> = ({ WrapEl, children, ...rest }) => {
	const Wrap = WrapEl ? WrapEl : React.Fragment;
	return <Wrap {...rest}>{children}</Wrap>;
};

export default Wrapper;
