import { ModulePlaceholder } from "@/components/modules/module-placeholder";
import { getModule } from "@/config/modules";

export function NodosModule() {
  return <ModulePlaceholder module={getModule("nodos")} />;
}
