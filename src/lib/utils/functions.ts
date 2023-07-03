export const monthDiff = (date1: Date, date2: Date) => {
  let months;

  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();

  return months <= 0 ? 0 : months;
};

export const yearDiff = (date: string) => {
  const ageDifMs = Date.now().valueOf() - new Date(date).valueOf();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
