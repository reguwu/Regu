export const formatDateString = (dateString: string) => {
  const [month, day, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);

  // Format the date to 'Mar 2022'
  const formattedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short'}).format(date);

  return formattedDate;
}