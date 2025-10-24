import {
  PanelsTopLeft,
  ShieldCheck,
  CircleHelpIcon,
  Settings,
  Bot,
  Book,
  Tag,
  Truck,
  FileText,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/dashboard/main",
  },
  {
    icon: Book,
    label: "Catalogo",
    href: "/catalogo",
  },
  {
    icon: Tag,
    label: "Lista de precios",
    href: "/listaPrecios",
  },
  {
    icon: Truck,
    label: "Proveedores",
    href: "/proveedores",
  },
];

export const dataAdminSidebar = [
  {
    icon: ShieldCheck,
    label: "Admin",
    href: "/admin",
  },
  {
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs",
  },
];

export const dataSupportSidebar = [
  {
    icon: Bot,
    label: "Chat",
    href: "/chat",
  },
  {
    icon: FileText,
    label: "Cotizaciones",
    href: "/cotizaciones",
  },
  {
    icon: Settings,
    label: "settings",
    href: "/settings",
  },
];
