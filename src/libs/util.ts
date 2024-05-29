export const joinCompanyDate = (date: string) =>
  new Date(Number(date)).toLocaleDateString();

export const convertDate = (millisecond: number) => {
  const date = new Date(millisecond);
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
