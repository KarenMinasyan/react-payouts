import React from 'react';

import { type ITextInputProps } from './types';
import { Input, Label, Span } from './styles';

const TextInput: React.FC<ITextInputProps> = ({ label, onChange = () => null, ...rest }) => (
	<Label>
		{!!label && <Span>{label}</Span>}
		<Input onChange={onChange} {...rest} />
	</Label>
);

export default TextInput;
