import { NavItemProps } from "../../types";

function NavItem({ children }: NavItemProps) {
  return (
    <li className="flex justify-between items-center py-1 pr-3 pl-1 text-gray-700 hover:bg-[--hover-side-bar] rounded cursor-pointer">
      {children}
    </li>
  )
}

function ProjectItem({ children }: NavItemProps) {
  return (
    <li className="flex justify-between items-center py-2 px-2 text-gray-700 hover:bg-gray-200 rounded cursor-pointer">
      {children}
    </li>

  )
}

export { NavItem, ProjectItem };
