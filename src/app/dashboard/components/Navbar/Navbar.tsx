import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, User } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { ToggleTheme } from "../ToggleTheme";

export const Navbar = () => {
  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div className="bloc xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="sr-only">Menú lateral</SheetTitle>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input placeholder="Search..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute top-2 right-2" />
      </div>
      <div className="flex gap-x-2 items-center">
        <ToggleTheme />
        <User />
      </div>
    </nav>
  );
};
