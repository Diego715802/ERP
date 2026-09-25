import type { Metadata } from "next";
import { ServidoresModule } from "@/features/servidores/servidores-module";

export const metadata: Metadata = {
  title: "Servidores",
  description: "Módulo Servidores de ComeCore ERP.",
};

export default function ServidoresPage() {
  return <ServidoresModule />;
}
