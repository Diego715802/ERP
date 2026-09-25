import type { ElementType } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export type ModuleSlug =
  | "clientes"
  | "contratos"
  | "planes"
  | "facturacion"
  | "inventario"
  | "servidores"
  | "nodos";

export type ModuleDefinition = {
  slug: ModuleSlug;
  label: string;
  href: string;
  icon: ElementType;
};

export const modules: readonly ModuleDefinition[] = [
  {
    slug: "clientes",
    label: "Clientes",
    href: "/clientes",
    icon: PeopleOutlineRoundedIcon,
  },
  {
    slug: "contratos",
    label: "Contratos",
    href: "/contratos",
    icon: DescriptionOutlinedIcon,
  },
  {
    slug: "planes",
    label: "Planes",
    href: "/planes",
    icon: LayersOutlinedIcon,
  },
  {
    slug: "facturacion",
    label: "Facturación",
    href: "/facturacion",
    icon: ReceiptLongOutlinedIcon,
  },
  {
    slug: "inventario",
    label: "Inventario",
    href: "/inventario",
    icon: Inventory2OutlinedIcon,
  },
  {
    slug: "servidores",
    label: "Servidores",
    href: "/servidores",
    icon: DnsOutlinedIcon,
  },
  {
    slug: "nodos",
    label: "Nodos",
    href: "/nodos",
    icon: HubOutlinedIcon,
  },
] as const;

export function getModule(slug: ModuleSlug): ModuleDefinition {
  const moduleDefinition = modules.find((module) => module.slug === slug);

  if (!moduleDefinition) {
    throw new Error(`No existe configuración para el módulo ${slug}.`);
  }

  return moduleDefinition;
}
