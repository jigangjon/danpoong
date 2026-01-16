import { useState } from "react";
import Plus from "~/components/plus";
import { cn } from "~/lib/utils";
import {
  getDatesFromWeeksInMonthOfDate,
  getDayIndexFromName,
  getDayNameFromIndex,
  getDaysOfWeek,
  getMonthNameFromIndex,
  isSameDate,
} from "~/utils/dates";

export default function Calendar() {
  const STARTING_DAY = "Sunday";
  const formattedDays = getDaysOfWeek(getDayIndexFromName(STARTING_DAY)).map(
    (day) => getDayNameFromIndex(day).slice(0, 3).toUpperCase(),
  );
  const todos: TodoProps[] = [
    {
      title: "Do Math Homework",
      date: "2025-06-15",
      time: "16:45",
      class: {
        name: "University",
        color: "#809CFF",
        iconUrl: "/class-icons/university.svg",
      },
      completed: false,
    },
    {
      title: "Tack out dogs",
      date: "2025-06-15",
      time: "18:20",
      class: {
        name: "Home",
        color: "#FF8080",
        iconUrl: "/class-icons/home.svg",
      },
      completed: false,
    },
    {
      title: "Business meeting with CEO",
      date: "2025-06-15",
      time: "08:15",
      class: {
        name: "Work",
        color: "#FFCC80",
        iconUrl: "/class-icons/work.svg",
      },
      completed: false,
    },
  ];

  const now = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(now);
  const [monthReferenceDate, setMonthReferenceDate] = useState<Date>(now);
  const [datesInSelectedMonth, setDatesInSelectedMonth] = useState<Date[]>(
    getDatesFromWeeksInMonthOfDate(now, getDayIndexFromName(STARTING_DAY)),
  );

  return (
    <div className="w-full flex flex-col flex-1 relative">
      <div className="flex flex-col items-stretch absolute top-0 left-0 right-0 rounded-lg bg-primary shadow-[0px_4px_4px_0px_#00000040] text-white py-1.5 gap-1">
        <div className="flex justify-center items-center text-[#FFFFFFC0] text-sm font-semibold leading-none">
          {monthReferenceDate.getFullYear()}
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          <button
            onClick={() => {
              const previousMonthReferenceDate = new Date(
                monthReferenceDate.getFullYear(),
                monthReferenceDate.getMonth() - 1,
                1,
              );
              setMonthReferenceDate(previousMonthReferenceDate);
              setDatesInSelectedMonth(
                getDatesFromWeeksInMonthOfDate(
                  previousMonthReferenceDate,
                  getDayIndexFromName(STARTING_DAY),
                ),
              );
            }}
          >
            <img src="/previous.svg" alt="" />
          </button>
          <div className="text-[32px] leading-none font-semibold">
            {getMonthNameFromIndex(monthReferenceDate.getMonth())
              .slice(0, 3)
              .toUpperCase()}
          </div>
          <button
            onClick={() => {
              const previousMonthReferenceDate = new Date(
                monthReferenceDate.getFullYear(),
                monthReferenceDate.getMonth() + 1,
                1,
              );
              setMonthReferenceDate(previousMonthReferenceDate);
              setDatesInSelectedMonth(
                getDatesFromWeeksInMonthOfDate(
                  previousMonthReferenceDate,
                  getDayIndexFromName(STARTING_DAY),
                ),
              );
            }}
          >
            <img src="/next.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-stretch flex-1 pt-18 border-3 border-primary rounded-lg gap-4">
        <div className="flex flex-col items-stretch px-1">
          <div className="grid grid-flow-row grid-cols-7 justify-items-center rounded-lg bg-white pt-5 px-6 pb-5 gap-y-5">
            {formattedDays.map((day) => (
              <div
                key={day}
                className="flex justify-center items-center text-xs font-medium"
              >
                {day}
              </div>
            ))}
            {datesInSelectedMonth.map((date) => (
              <button
                key={date.toISOString()}
                className="flex justify-center"
                onClick={() => setSelectedDate(date)}
              >
                <div
                  className={cn(
                    "flex justify-center items-center text-lg font-medium aspect-square h-7.5 rounded-full",
                    date.getMonth() !== monthReferenceDate.getMonth() &&
                      "text-[#3C3C4399]",
                    isSameDate(date, now) && "border-2 border-primary",
                    isSameDate(date, selectedDate) && "",
                  )}
                >
                  {date.getDate()}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Plus className="w-11" />
        </div>
      </div>
    </div>
  );
}

function Todo({ todo }: { todo: TodoProps }) {
  return (
    <div className="flex flex-row bg-[#FFFFFFDE] rounded-sm relative">
      <div className="flex items-center justify-center pl-2.5 pr-3">
        <div className="rounded-full aspect-square w-4 border-2 border-primary"></div>
      </div>
      <div className="flex flex-col py-3 gap-1">
        <div className="text-primary text-base font-normal">{todo.title}</div>
        <div className="text-[#3C3C4399] text-sm font-normal">
          Today {todo.time ? `At ${todo.time}` : ""}
        </div>
      </div>
      <div
        className="flex flex-row items-center absolute bottom-1 right-1 rounded-sm px-2.5 py-2 gap-1.5"
        style={{ backgroundColor: todo.class.color }}
      >
        <div>
          <img src={todo.class.iconUrl} alt={todo.class.name} />
        </div>
        <div className="text-[#FFFFFFDE] text-xs font-normal leading-none">
          {todo.class.name}
        </div>
      </div>
    </div>
  );
}

interface TodoProps {
  title: string;
  date?: string;
  time?: string;
  class: {
    name: string;
    color: string;
    iconUrl: string;
  };
  completed: boolean;
}
