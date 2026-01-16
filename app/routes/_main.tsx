import { Link, Outlet } from "react-router";
import { Home, Briefcase, Users, User, Mail } from "lucide-react";

export default function Main() {
  const leftItems = [
    { icon: Home, label: "Home", to: "/" },
    { icon: Briefcase, label: "Tasks", to: "/tasks" },
  ];

  const rightItems = [
    { icon: Users, label: "Groups", to: "/groups" },
    { icon: User, label: "Profile", to: "/profile" },
  ];

  return (
    <div className="flex flex-col bg-[#EFEFEF] min-h-screen overflow-hidden">
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 400 100"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10
           L100,10 
           C155,10 155,70 200,70 
           C245,70 245,10 300,10 
           L400,10 
           L400,100 
           L0,100 
           Z"
            fill="white"
            filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))"
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-[84px] flex items-center justify-between px-7 pb-2">
          <div className="flex items-center gap-7">
            {leftItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex flex-col items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-black" />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-7">
            {rightItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex flex-col items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-black" />
                </Link>
              );
            })}
          </div>

          <Link
            to="/inbox"
            className="absolute left-1/2 transform -translate-x-1/2 -top-5"
          >
            <div className="w-18 h-18 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
