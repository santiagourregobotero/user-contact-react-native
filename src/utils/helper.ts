const formatDate = (dateString: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateParts = dateString.split('-');
  const year = dateParts[0];
  const monthIndex = parseInt(dateParts[1]) - 1; // Month indexes start from 0
  const day = dateParts[2];

  const month = months[monthIndex];

  return `${month} ${parseInt(day)}, ${year}`;
};

export default {
  formatDate,
};
