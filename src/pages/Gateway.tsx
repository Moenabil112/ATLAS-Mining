import { AppShell } from "../components/AppShell";
import { ViewProvider } from "../components/viewContext";

export function Gateway() {
  return (
    <ViewProvider>
      <AppShell />
    </ViewProvider>
  );
}
