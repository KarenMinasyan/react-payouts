export interface ISearchInputProps {
	initial?: string;
	debounce?: number;
	placeholder?: string;
	query?: string;
	onSearch: (_text: string) => void;
}
