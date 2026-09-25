import { ModulePlaceholder } from "@/components/modules/module-placeholder";
import { getModule } from "@/config/modules";

export function PlanesModule() {
  return <ModulePlaceholder module={getModule("planes")} />;
}
