export function formatDate(dateString: Date) {
	const date = new Date(dateString);
	const formattedDate = date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	return formattedDate;
}
