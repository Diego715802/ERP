import { ModulePlaceholder } from "@/components/modules/module-placeholder";
import { getModule } from "@/config/modules";

export function FacturacionModule() {
  return <ModulePlaceholder module={getModule("facturacion")} />;
}
