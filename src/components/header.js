import { Link } from "react-router-dom";
export default function Header() {
  const logo = "FitLife";
  const menuitems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Classes", link: "/class" },
    { id: 3, title: "Videos", link: "/videos" },
    { id: 4, title: "Shop", link: "/shop" },
    { id: 5, title: "Login", link: "/login" },
  ];
  return (
    <div className="flex border-2 shadow-lg w-full fixed top-0 left-0 bg-white">
      <div className="text-2xl p-2">{logo}</div>
      <div className="flex justify-end">
        {menuitems &&
          menuitems.map((item) => {
            return (
              <div className="p-3" key={item}>
                <Link to={`${item.link}`}>{item.title}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
