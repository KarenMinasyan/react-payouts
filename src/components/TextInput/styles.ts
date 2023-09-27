import styled from 'styled-components';
import { COLORS } from 'styles';

const {
	ACCENT_WHITE,
	ACCENT_GRAY,
	ACCENT_BLACK: { BLACK_DARK },
} = COLORS;

export const Label = styled.label``;

export const Span = styled.span``;

export const Input = styled.input`
	width: 100%;
	height: 42px;
	padding: 5px 14px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.0015em;
	color: ${BLACK_DARK};
	border-width: 1px;
	border-style: solid;
	background: ${ACCENT_WHITE};
	outline: none;

	&::placeholder {
		color: ${ACCENT_GRAY};
	}

	&:hover {
		border-color: rgba(39, 40, 44, 0.7);
	}
`;
