import type { Metadata } from "next";
import { ContratosModule } from "@/features/contratos/contratos-module";

export const metadata: Metadata = {
  title: "Contratos",
  description: "Módulo Contratos de ComeCore ERP.",
};

export default function ContratosPage() {
  return <ContratosModule />;
}
