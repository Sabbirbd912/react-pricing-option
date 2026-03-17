import React from "react";

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Analytics",
            path: "/dashboard/analytics"
        },
        {
            id: 3,
            name: "Projects",
            path: "/projects"
        },
        {
            id: 4,
            name: "Team",
            path: "/settings/team"
        },
        {
            id: 5,
            name: "Profile",
            path: "/user/profile"
        }
    ];
  return (
    <nav>
        <ul className="flex items-center justify-center gap-5">
            {
                navLinks.map(route=> <li className="text-2xl font-bold">
                    <a href={route.path}>{route.name}</a>
                </li>)
            }
        </ul>
    </nav>
  );
};

export default Navbar;
