import { Link, Outlet } from "react-router";
import Plus from "~/components/plus";

export default function Main() {
  const navItemImgs = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/400",
    "https://picsum.photos/300/300",
    "https://picsum.photos/400/300",
  ];
  return (
    <div className="flex flex-col bg-[#EFEFEF] p-[30px] min-h-screen overflow-hidden">
      <Outlet />
      <div>
        <nav className="flex flex-row-reverse items-center gap-[15px] fixed bottom-[30px] left-[30px] right-[30px] h-[81px] bg-[#FFFFFF50] rounded-full shadow-[0_4px_4px_0_#00000040]">
          <div className="w-[calc(81px-15px)]"></div>
          {navItemImgs.map((src, index) => (
            <Link key={index} to={"/"}>
              <img
                className="w-[55px] rounded-full aspect-square"
                src={src}
                alt={`nav-item-${index}`}
              />
            </Link>
          ))}
        </nav>
        <Plus className="fixed bottom-[30px] right-[30px] w-[81px] shadow-lg" />
      </div>
    </div>
  );
}
