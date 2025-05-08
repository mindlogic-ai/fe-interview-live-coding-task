export const formatLastMessageDate = (time: string) => {
  const date = new Date(time);
  const now = new Date();

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((now.getTime() - date.getTime()) / oneDay);

  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    return `${hours}:${minutes}`;
  }

  if (diffDays === 1) {
    //TODO : 언어팩 적용 해야합니다
    return '어제';
  }

  const oneYearAgo = new Date(
    now.getFullYear() - 1,
    now.getMonth(),
    now.getDate(),
  );
  if (date < oneYearAgo) {
    return `${year}-${month}-${day}`;
  }

  return `${year}-${month}-${day}`;
};
