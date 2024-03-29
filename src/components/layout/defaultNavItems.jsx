import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const defaultNavItems = [
  {
    label: "Tasks",
    href: "/Tasks",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Team",
    href: "/Tasks",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];
