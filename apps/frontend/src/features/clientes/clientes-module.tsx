import { ModulePlaceholder } from "@/components/modules/module-placeholder";
import { getModule } from "@/config/modules";

export function ClientesModule() {
  return <ModulePlaceholder module={getModule("clientes")} />;
}
