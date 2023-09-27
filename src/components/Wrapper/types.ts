import React, { HTMLAttributes } from 'react';

export interface IWrapperProps extends HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	WrapEl?: React.ElementType;
}
