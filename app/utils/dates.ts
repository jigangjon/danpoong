export const DAY_NAMES_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export type DayNameOfWeek = (typeof DAY_NAMES_OF_WEEK)[number];

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export type MonthName = (typeof MONTH_NAMES)[number];

export function getDayIndexFromName(dayName: DayNameOfWeek) {
  return DAY_NAMES_OF_WEEK.indexOf(dayName);
}

export function getDayNameFromIndex(index: number) {
  return DAY_NAMES_OF_WEEK[index];
}

export function getMonthNameFromIndex(index: number) {
  return MONTH_NAMES[index];
}

export function getMonthIndexFromName(monthName: MonthName) {
  return MONTH_NAMES.indexOf(monthName);
}

export function isSameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function getDaysOfWeek(startDay: number) {
  const dayIndexesOfWeek = Array.from(
    { length: 7 },
    (_, i) => (startDay + i) % 7,
  );
  return dayIndexesOfWeek;
}

export function getWeekFromDate(date: Date, startDay: number) {
  const currentDay = date.getDay();
  const days = [];
  const offset = (currentDay - startDay + 7) % 7;
  for (let i = 0; i < 7; i++) {
    const weekDate = new Date(date);
    weekDate.setDate(date.getDate() - offset + i);
    days.push(weekDate);
  }
  return days;
}

export function getDatesFromMonthOfDate(date: Date) {
  const dateIter = new Date(date.getFullYear(), date.getMonth(), 1);
  const dates = [];
  while (dateIter.getMonth() === date.getMonth()) {
    dates.push(new Date(dateIter));
    dateIter.setDate(dateIter.getDate() + 1);
  }
  return dates;
}

export function getDatesFromWeeksInMonthOfDate(date: Date, startDay: number) {
  const monthStartDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  ).getDay();
  const days = [];
  const startOffset = (monthStartDay - startDay + 7) % 7;
  for (let i = 0; i < startOffset; i++) {
    const prevDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      1 - startOffset + i,
    );
    days.push(prevDate);
  }

  const monthDates = getDatesFromMonthOfDate(date);
  days.push(...monthDates);

  const monthEndDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDay();
  const endOffset = (monthEndDay - startDay + 7) % 7;
  for (let i = endOffset + 1; i < 7; i++) {
    const nextDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0 - endOffset + i,
    );
    days.push(nextDate);
  }

  return days;
}
