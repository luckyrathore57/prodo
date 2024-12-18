import DownArrow from "./ui/arrow";
import { AddTask, BellIcon, CalenderIcon, CollapseWindow, FourSquareIcon, InboxIcon, SearchIcon, UpcomingIcon } from "./ui/icons";
import { NavItem } from "./ui/navItem";

function SideBar() {
  return (
    <aside className="w-72 bg-[--side-bar-color] border-r border-gray-200 py-4 px-3 flex flex-col justify-between">
      {/* Profile */}
      <div className="flex flex-col justify-start gap-6">
        <div>
          <div className="text-sm font-bold mb-4 flex justify-between">
            <div className="text-sm font-bold flex justify-start items-center gap-2 pl-1">
              <img src="/todoist.png" className="rounded-full size-6"></img>
              Lucky
              <DownArrow size={12} />
            </div>
            <div className="flex justify-end gap-3 text-[--icon-gray-light]">
              <BellIcon />
              <CollapseWindow />
            </div>
          </div>
          <nav>
            <ul>
              <NavItem>
                <span className="flex gap-1 items-center">
                  <AddTask color="[--add-task-red]" size={24} filled />
                  <span className="text-sm text-[--dark-red] font-bold">Add task</span></span>
              </NavItem>
              <NavItem>
                <span className="text-sm flex items-center">
                  <SearchIcon color="[--icon-gray-light]" />
                  Search
                </span>
              </NavItem>
              <NavItem>
                <span className="text-sm flex items-center">
                  <InboxIcon color="[--icon-gray-light]" />
                  Inbox</span>
                <span className="text-xs text-[--icon-gray-light]">2</span>
              </NavItem>
              <NavItem>
                <span className="text-sm flex items-center">
                  <CalenderIcon color="[--icon-gray-light]" date={19} />
                  Today</span>
                <span className="text-xs text-[--icon-gray-light]">2</span>
              </NavItem>
              <NavItem>
                <span className="text-sm flex items-center">
                  <UpcomingIcon color="[--icon-gray-light]" />
                  Upcoming
                </span>
              </NavItem>
              <NavItem>
                <span className="text-sm flex items-center">
                  <FourSquareIcon color="[--icon-gray-light]" />
                  Filters & Labels
                </span>
              </NavItem>
            </ul>
          </nav>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-sm font-bold text-gray-600 mb-2">My Projects</h3>
          <ul>
            <li className="flex justify-between items-center py-2 px-2 text-gray-700 hover:bg-gray-200 rounded cursor-pointer">
              🏠 Home
              <span className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">5</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer */}
      <div>
        <a href="#" className="text-gray-600 text-sm block mb-2 hover:underline">
          + Add a team
        </a>
        <a href="#" className="text-gray-600 text-sm hover:underline">
          Browse templates
        </a>
      </div>
    </aside>


  )
}

export default SideBar;
