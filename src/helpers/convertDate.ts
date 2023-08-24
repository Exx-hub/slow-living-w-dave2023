export const convertDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toDateString().slice(4);
};
