export const getFormattedDate = (date) => {
  const createDate = new Date(date);
  const formattedDate = createDate
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '')
    .slice(0, -1);

  return formattedDate;
};
