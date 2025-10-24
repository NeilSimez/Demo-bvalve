import { SidebarRoutes } from "../SidebarRoutes";

export const Sidebar = () => {
  return (
    <div className="h-screen ">
      <div className="h-full flex flex-col border-r">
        <p>Logo</p>
        <SidebarRoutes />
      </div>
    </div>
  );
};
