"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataAdminSidebar,
} from "./SidebarRoutes.data";

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6 ">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">Admin</p>
          {dataAdminSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
