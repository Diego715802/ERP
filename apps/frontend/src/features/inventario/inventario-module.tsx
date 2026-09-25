import { ModulePlaceholder } from "@/components/modules/module-placeholder";
import { getModule } from "@/config/modules";

export function InventarioModule() {
  return <ModulePlaceholder module={getModule("inventario")} />;
}
