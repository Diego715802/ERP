import type { Metadata } from "next";
import { InventarioModule } from "@/features/inventario/inventario-module";

export const metadata: Metadata = {
  title: "Inventario",
  description: "Módulo Inventario de ComeCore ERP.",
};

export default function InventarioPage() {
  return <InventarioModule />;
}
