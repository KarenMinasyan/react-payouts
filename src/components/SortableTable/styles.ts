import styled from 'styled-components';
import { COLORS } from 'styles';
import { ReactComponent as Arrow } from 'assets/icons/arrow-down.svg';

const {
	ACCENT_GRAY,
	ACCENT_WHITE,
	ACCENT_BLACK: { BLACK_LIGHT },
} = COLORS;

export const Table = styled.table`
	width: 100%;
	height: 100%;
	border-collapse: collapse;
`;
export const Thead = styled.thead`
	width: 100%;
	height: 44px;
`;

export const Tr = styled.tr`
	width: 100%;
	height: 48px;
`;

export const Tbody = styled.tbody`
	${Tr} {
		&:nth-child(odd) {
			background: ${ACCENT_WHITE};
		}
	}
`;

export const Td = styled.td`
	color: ${ACCENT_GRAY};
	font-size: 12px;
	font-weight: 500;
	line-height: 12px;
	word-wrap: break-word;
	padding: 16px 24px;
`;

export const ArrowDown = styled(Arrow)`
	fill: ${BLACK_LIGHT};
	margin-left: 8px;
	height: 13px;
	margin-top: 7px;
`;

export const ArrowUp = styled(Arrow)`
	fill: ${BLACK_LIGHT};
	margin-left: 8px;
	height: 13px;
	margin-bottom: 5px;
	transform: rotate(180deg);
`;

export const ArrowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 25px;

	${ArrowDown}, ${ArrowUp} {
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export const TableHeader = styled.div`
	display: flex;
	align-items: center;
`;
