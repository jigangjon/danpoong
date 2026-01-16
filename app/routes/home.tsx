import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import {
  getDayIndexFromName,
  getMonthNameFromIndex,
  getWeekFromDate,
} from "~/utils/dates";

export default function Home() {
  const [emblaGroupsRef] = useEmblaCarousel({
    dragFree: true,
  });
  const groupItems = [
    { imgUrl: "https://picsum.photos/200/300", link: "/groups/picsum1" },
    { imgUrl: "https://picsum.photos/200/400", link: "/groups/picsum2" },
    { imgUrl: "https://picsum.photos/300/300", link: "/groups/picsum3" },
    { imgUrl: "https://picsum.photos/400/300", link: "/groups/picsum4" },
  ];
  const STARTING_DAY = "Sunday";
  const now = new Date();
  const thisWeek = getWeekFromDate(now, getDayIndexFromName(STARTING_DAY));
  return (
    <div className="flex flex-col gap-6">
      <div ref={emblaGroupsRef}>
        <div className="flex gap-3">
          <Link className="shrink-0" to="/profile">
            <img
              className="w-[88px] rounded-full aspect-square shadow-md"
              src="/profile.svg"
              alt="profile-icon"
            />
          </Link>
          <Link className="shrink-0" to="/groups">
            <img
              className="w-[88px] rounded-full aspect-square shadow-md"
              src="/groups.svg"
              alt="group-icon"
            />
          </Link>
          {groupItems.map((item, index) => (
            <Link className="shrink-0" key={index} to={item.link}>
              <img
                className="w-[88px] rounded-full aspect-square shadow-md"
                src={item.imgUrl}
                alt={`nav-item-${index}`}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          to="/inbox"
          className="flex flex-col bg-white min-h-16 p-3 rounded-lg shadow-md"
        >
          <div className="flex flex-row text-primary text-base font-semibold">
            <img className="mr-2" src="/inbox.svg" alt="" />
            INBOX
          </div>
        </Link>
        <div className="flex flex-col bg-white min-h-108 rounded-lg shadow-md">
          <Link
            to="/calendar"
            className="flex flex-col bg-white rounded-lg shadow-[0_4px_4px_0_#00000040] gap-1 pt-1 pb-3"
          >
            <div className="flex flex-row justify-center text-3xl font-semibold text-[#5F5F5F]">
              {getMonthNameFromIndex(now.getMonth()).slice(0, 3).toUpperCase()}
            </div>
            <div className="flex flex-row h-8 gap-2 px-2">
              <div className="flex flex-col justify-center items-center h-full text-[11px] font-bold text-[#5F5F5F] leading-none gap-0.5">
                <div>WEEK</div>
                <div>1</div>
              </div>
              <div className="flex flex-row gap-2">
                {thisWeek.map((day) => (
                  <div
                    key={day.toISOString()}
                    className="flex justify-center items-center h-full aspect-square rounded-full bg-[#D9D9D9] text-white font-semibold"
                  >
                    {day.getDate()}
                  </div>
                ))}
              </div>
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
}
