import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  { id: 1, label: "Template Application", icon: HomeIcon, link: "/" },
  { id: 2, label: "Billing Milestones", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Support Forum", icon: UsersIcon, link: "/users" },
  { id: 4, label: "**User Admin Features*", icon: VideosIcon, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-sky flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-hoverColor absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-hoverColor rounded w-full overflow-hidden whitespace-nowrap",
      {
        [""]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-xl font-large text-primary", {
                hidden: toggleCollapse,
              })}
            >
              PSPD Form 1
            </span>
          </div>
          {/* {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )} */}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    {/* <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div> */}
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-primary"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-primary")}>
            Logout
          </span>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
