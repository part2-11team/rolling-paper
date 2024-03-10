export const getQueryURL = (limit, offset) => {
  if (!limit && !offset) {
    return '';
  }
  if (limit && offset) {
    return `?limit=${limit}&offset=${offset}`;
  }
  if (limit) {
    return `?limit=${limit}`;
  }
  if (offset) {
    return `?offset=${offset}`;
  }
};
