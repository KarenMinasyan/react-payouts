import styled from 'styled-components';
import { justifyCenter, spinning } from 'styles';

export const LoadingContainer = styled.div<{ blur?: boolean; active: boolean }>`
	width: 100%;
	height: 100%;
	min-height: 100px;
	top: 0;
	left: 0;
	${justifyCenter()};
	position: absolute;
	z-index: 2;
	transition:
		opacity 0.2s ease-in-out,
		visibility 0.2s ease-in-out;
	backdrop-filter: ${props => (props.blur ? 'blur(4px)' : 'blur(0)')};
	opacity: ${props => (props.active ? 1 : 0)};
	visibility: ${props => (props.active ? 'visible' : 'hidden')};
`;

export const Spinner = styled.span`
	display: flex;
	font-size: 32px;
	animation: ${spinning} 0.9s infinite linear;
`;
