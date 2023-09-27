import React, { useMemo } from 'react';
import { CHIP_LABELS } from 'helpers';
import { StatusType } from 'types';

import { type IChipProps } from './types';
import { ChipEl } from './styles';

const Chip: React.FC<IChipProps> = ({ label, variant }) => {
	const getChipType = (type: StatusType) =>
		CHIP_LABELS[type.toUpperCase() as Uppercase<StatusType>];

	const memoizedColorClass = useMemo(() => getChipType(variant), [variant]);

	return <ChipEl variant={memoizedColorClass}>{label === 'Completed' ? 'Paid' : label}</ChipEl>;
};

export default Chip;
