export const getInitials = (name: string, separate: string) => {
  return name
    .split(separate)
    .map((word) => word[0])
    .join('');
};
