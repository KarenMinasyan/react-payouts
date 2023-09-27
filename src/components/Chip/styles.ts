import styled from 'styled-components';
import { CHIP_LABELS } from 'helpers';
import { COLORS } from 'styles';

const {
	ACCENT_GREEN,
	ACCENT_BLACK: { BLACK_DARK },
} = COLORS;

const { PENDING, COMPLETED } = CHIP_LABELS;

export const ChipEl = styled.span<{ variant: string }>`
	padding: 2px 8px;
	border-radius: 6px;
	overflow: hidden;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: inline-flex;
	color: ${BLACK_DARK};
	font-size: 14px;
	font-weight: 600;
	line-height: 24px;
	word-wrap: break-word;
	background: ${props => {
		switch (props.variant) {
			case PENDING:
				return 'rgba(111.14, 118.45, 125.75, 0.40)';
			case COMPLETED:
				return ACCENT_GREEN;
		}
	}};
`;
