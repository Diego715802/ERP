"use client";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Brand } from "@/components/brand/brand";
import { modules } from "@/config/modules";

export const SIDEBAR_EXPANDED_WIDTH = 244;
export const SIDEBAR_COLLAPSED_WIDTH = 76;

type SidebarNavigationProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  transitionsEnabled: boolean;
  onCloseMobile: () => void;
  onToggleCollapsed: () => void;
};

type NavigationContentProps = {
  collapsed: boolean;
  mobile?: boolean;
  onCloseMobile?: () => void;
  onToggleCollapsed?: () => void;
};

function NavigationContent({
  collapsed,
  mobile = false,
  onCloseMobile,
  onToggleCollapsed,
}: NavigationContentProps) {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        minHeight: 0,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: 72,
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          px: collapsed ? 1.25 : 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {!collapsed && (
          <Brand compact />
        )}

        {mobile ? (
          <Tooltip title="Cerrar navegación">
            <IconButton
              aria-label="Cerrar navegación de módulos"
              onClick={onCloseMobile}
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                color: "text.secondary",
                "&:hover": { color: "primary.main", backgroundColor: "#EEF5FC" },
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={collapsed ? "Expandir navegación" : "Colapsar navegación"}>
            <IconButton
              aria-label={collapsed ? "Expandir navegación" : "Colapsar navegación"}
              aria-expanded={!collapsed}
              onClick={onToggleCollapsed}
              sx={{
                width: 36,
                height: 36,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "10px",
                color: "text.secondary",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "#EEF5FC",
                  borderColor: "#C9DDF1",
                },
              }}
            >
              {collapsed ? (
                <ChevronRightRoundedIcon sx={{ fontSize: 20 }} />
              ) : (
                <ChevronLeftRoundedIcon sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Box
        component="nav"
        aria-label="Módulos del ERP"
        sx={{
          display: "flex",
          minHeight: 0,
          flex: 1,
          flexDirection: "column",
          gap: 0.65,
          overflowY: "auto",
          px: collapsed ? 1 : 1.25,
          py: 1.75,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {modules.map((module) => {
          const isActive = pathname === module.href;
          const Icon = module.icon;

          return (
            <Tooltip
              key={module.slug}
              title={collapsed ? module.label : ""}
              placement="right"
              enterDelay={300}
            >
              <Box
                component={Link}
                href={module.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={collapsed ? module.label : undefined}
                onClick={mobile ? onCloseMobile : undefined}
                sx={{
                  position: "relative",
                  display: "flex",
                  minHeight: 50,
                  alignItems: "center",
                  justifyContent: collapsed ? "center" : "flex-start",
                  gap: collapsed ? 0 : 1.25,
                  px: collapsed ? 0.75 : 1,
                  color: isActive ? "primary.dark" : "text.secondary",
                  backgroundColor: isActive ? "#F1F7FD" : "transparent",
                  border: "1px solid",
                  borderColor: isActive ? "#D8E8F7" : "transparent",
                  borderRadius: "14px",
                  textDecoration: "none",
                  transition:
                    "color 180ms ease, background-color 180ms ease, border-color 180ms ease",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: isActive ? "#EDF5FC" : "#F7FAFD",
                    borderColor: isActive ? "#CFE2F5" : "#EDF2F6",
                  },
                  "&:focus-visible": {
                    outlineOffset: -2,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    width: 34,
                    height: 34,
                    flex: "0 0 34px",
                    placeItems: "center",
                    borderRadius: "10px",
                    color: isActive ? "primary.main" : "inherit",
                    backgroundColor: isActive ? "#E4F0FB" : "transparent",
                    transition: "color 180ms ease, background-color 180ms ease",
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </Box>

                {!collapsed && (
                  <Typography
                    component="span"
                    sx={{
                      minWidth: 0,
                      flex: 1,
                      overflow: "hidden",
                      fontSize: "0.73rem",
                      fontWeight: isActive ? 700 : 600,
                      letterSpacing: "0.052em",
                      textOverflow: "ellipsis",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {module.label}
                  </Typography>
                )}

                {!collapsed && isActive && (
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 6,
                      height: 6,
                      flex: "0 0 6px",
                      borderRadius: "50%",
                      backgroundColor: "secondary.main",
                    }}
                  />
                )}
              </Box>
            </Tooltip>
          );
        })}
      </Box>

      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            minHeight: 52,
            alignItems: "center",
            gap: 1,
            px: 2.25,
            color: "text.secondary",
            opacity: 0.8,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "text.disabled" }}
          />
          <Typography sx={{ fontSize: "0.66rem", letterSpacing: "0.035em" }}>
            Entorno local
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export function SidebarNavigation({
  collapsed,
  mobileOpen,
  transitionsEnabled,
  onCloseMobile,
  onToggleCollapsed,
}: SidebarNavigationProps) {
  const desktopWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH;

  return (
    <>
      <Box
        component="aside"
        sx={{
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: 76,
          width: desktopWidth,
          minWidth: desktopWidth,
          height: "calc(100dvh - 76px)",
          alignSelf: "flex-start",
          flex: "0 0 auto",
          borderRight: "1px solid",
          borderColor: "divider",
          transition: transitionsEnabled ? "width 210ms ease, min-width 210ms ease" : "none",
        }}
      >
        <NavigationContent
          collapsed={collapsed}
          onToggleCollapsed={onToggleCollapsed}
        />
      </Box>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onCloseMobile}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: "min(276px, calc(100vw - 28px))",
              backgroundImage: "none",
              borderRight: "1px solid",
              borderColor: "divider",
              boxShadow: "12px 0 36px rgba(7, 26, 58, 0.12)",
            },
          },
          backdrop: {
            sx: { backgroundColor: "rgba(7, 26, 58, 0.24)" },
          },
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <NavigationContent
          collapsed={false}
          mobile
          onCloseMobile={onCloseMobile}
        />
      </Drawer>
    </>
  );
}
