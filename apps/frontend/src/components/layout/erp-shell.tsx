"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Box from "@mui/material/Box";
import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopNavbar } from "@/components/navigation/top-navbar";

const SIDEBAR_STORAGE_KEY = "comecore.sidebar.collapsed";
const SIDEBAR_CHANGE_EVENT = "comecore-sidebar-change";

function subscribeToSidebarPreference(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(SIDEBAR_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(SIDEBAR_CHANGE_EVENT, onStoreChange);
  };
}

function getSidebarPreference() {
  try {
    return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSidebarPreference() {
  return false;
}

export function ErpShell({ children }: { children: React.ReactNode }) {
  const storedCollapsed = useSyncExternalStore(
    subscribeToSidebarPreference,
    getSidebarPreference,
    getServerSidebarPreference,
  );
  const [fallbackCollapsed, setFallbackCollapsed] = useState<boolean | null>(null);
  const collapsed = fallbackCollapsed ?? storedCollapsed;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transitionsEnabled, setTransitionsEnabled] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setTransitionsEnabled(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function handleToggleCollapsed() {
    try {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(!collapsed));
      setFallbackCollapsed(null);
      window.dispatchEvent(new Event(SIDEBAR_CHANGE_EVENT));
    } catch {
      setFallbackCollapsed(!collapsed);
    }
  }

  return (
    <Box sx={{ minHeight: "100dvh", backgroundColor: "background.default" }}>
      <Box
        component="a"
        href="#contenido-principal"
        sx={{
          position: "fixed",
          zIndex: 2000,
          top: 10,
          left: 10,
          px: 2,
          py: 1,
          color: "#FFFFFF",
          backgroundColor: "primary.dark",
          borderRadius: "10px",
          textDecoration: "none",
          transform: "translateY(-160%)",
          transition: "transform 160ms ease",
          "&:focus": { transform: "translateY(0)" },
        }}
      >
        Ir al contenido
      </Box>
      <TopNavbar onOpenNavigation={() => setMobileOpen(true)} />
      <Box sx={{ display: "flex", minHeight: { xs: "calc(100dvh - 68px)", md: "calc(100dvh - 76px)" } }}>
        <SidebarNavigation
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          transitionsEnabled={transitionsEnabled}
          onCloseMobile={() => setMobileOpen(false)}
          onToggleCollapsed={handleToggleCollapsed}
        />
        <Box
          id="contenido-principal"
          component="main"
          tabIndex={-1}
          sx={{
            minWidth: 0,
            minHeight: { xs: "calc(100dvh - 68px)", md: "calc(100dvh - 76px)" },
            flex: 1,
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
