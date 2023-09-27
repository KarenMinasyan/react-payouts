import styled from 'styled-components';
import { justifyCenter } from './mixins';
import { COLORS } from './colors';

const {
	ACCENT_PURPLE,
	ACCENT_BLACK: { BLACK_DARK, BLACK_LIGHT },
} = COLORS;

export const Main = styled.div`
	width: 100%;
	height: 100vh;
	${justifyCenter()},
`;

export const Container = styled.main`
	max-width: 1337px;
	margin: 64px auto;
`;

export const Heading = styled.h1`
	color: ${BLACK_DARK};
	font-size: 40px;
	font-weight: 600;
	line-height: 48px;
	word-wrap: break-word;
	margin-bottom: 60px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

export const Title = styled.h3`
	color: ${BLACK_LIGHT};
	font-size: 20px;
	font-weight: 600;
	line-height: 32px;
	word-wrap: break-word;
`;

export const Tag = styled.div`
	width: 16px;
	height: 32px;
	background: ${ACCENT_PURPLE};
	border-radius: 4px;
	margin-right: 16px;
`;

export const NotFoundData = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 32px;
	font-size: 40px;
`;
