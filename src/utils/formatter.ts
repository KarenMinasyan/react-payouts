export const formatter = (date: Date, opt?: Object) => {
	return new Date(date).toLocaleDateString('en-GB', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		...opt,
	});
};
