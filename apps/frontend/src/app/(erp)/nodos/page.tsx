import type { Metadata } from "next";
import { NodosModule } from "@/features/nodos/nodos-module";

export const metadata: Metadata = {
  title: "Nodos",
  description: "Módulo Nodos de ComeCore ERP.",
};

export default function NodosPage() {
  return <NodosModule />;
}
