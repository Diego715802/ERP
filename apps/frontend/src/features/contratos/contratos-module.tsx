import { ModulePlaceholder } from "@/components/modules/module-placeholder";
import { getModule } from "@/config/modules";

export function ContratosModule() {
  return <ModulePlaceholder module={getModule("contratos")} />;
}
