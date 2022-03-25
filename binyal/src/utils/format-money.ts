export const formatMoney = (num?: number): string => {
  if (!num) return '-';
  return new Intl.NumberFormat('en-US').format(num);
};
