import React, { useCallback, useEffect } from 'react';
import { useNavigate, createSearchParams, useSearchParams } from 'react-router-dom';
import { TextInput } from 'components';
import { useSearch } from 'hooks';

import { type ISearchInputProps } from './types';
import { IconWrapper, SearchWrapper } from './styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as ClearIcon } from 'assets/icons/close.svg';

const SearchInput: React.FC<ISearchInputProps> = ({
	initial,
	debounce = 500,
	placeholder,
	query = 'query',
	onSearch,
}) => {
	const { text, onChangeText } = useSearch(debounce, initial, onSearch);
	const [searchQuery, setSearchQuery] = useSearchParams();
	const searchParam = searchQuery.get(query);

	const navigate = useNavigate();

	const handleClear = useCallback(() => {
		onChangeText('');
		setSearchQuery('');
	}, []);

	useEffect(() => {
		if (searchParam) {
			onChangeText(searchParam);
		}
	}, []);

	const handleChange = (e: any) => {
		onChangeText(e.target.value);
		navigate({
			pathname: '',
			search: Boolean(e.target.value) ? `${createSearchParams({ [query]: e.target.value })}` : '',
		});
	};

	return (
		<SearchWrapper>
			<IconWrapper>
				{!text && <SearchIcon />}
				{!!text && <ClearIcon onClick={handleClear} />}
			</IconWrapper>
			<TextInput type='text' placeholder={placeholder} value={text ?? ''} onChange={handleChange} />
		</SearchWrapper>
	);
};

export default SearchInput;
