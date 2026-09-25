"use client";

import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Brand } from "@/components/brand/brand";
import { UserIdentity } from "./user-identity";

const utilityButtonStyles = {
  width: 38,
  height: 38,
  borderRadius: "11px",
  color: "#536579",
  transition: "color 180ms ease, background-color 180ms ease",
  "&:hover": {
    color: "#0B6BDC",
    backgroundColor: "#EEF5FC",
  },
} as const;

export function TopNavbar({ onOpenNavigation }: { onOpenNavigation: () => void }) {
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        color: "text.primary",
        backgroundColor: "rgba(255,255,255,0.98)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, lg: 4.5 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "68px !important", md: "76px !important" },
          }}
        >
          <Tooltip title="Abrir navegación">
            <IconButton
              aria-label="Abrir navegación de módulos"
              onClick={onOpenNavigation}
              sx={{
                ...utilityButtonStyles,
                display: { xs: "inline-flex", md: "none" },
                mr: 0.75,
              }}
            >
              <MenuRoundedIcon sx={{ fontSize: 21 }} />
            </IconButton>
          </Tooltip>
          <Brand />

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", lg: "block" },
              height: 30,
              alignSelf: "center",
              mx: 2.5,
            }}
          />
          <Typography
            sx={{
              display: { xs: "none", lg: "block" },
              color: "text.secondary",
              fontSize: "0.74rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ERP de operaciones
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
            <Tooltip title="Búsqueda disponible próximamente">
              <IconButton
                aria-label="Buscar"
                sx={{ ...utilityButtonStyles, display: { xs: "none", sm: "inline-flex" } }}
              >
                <SearchRoundedIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Centro de ayuda disponible próximamente">
              <IconButton
                aria-label="Ayuda"
                sx={{ ...utilityButtonStyles, display: { xs: "none", sm: "inline-flex" } }}
              >
                <HelpOutlineRoundedIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Sin notificaciones nuevas">
              <IconButton aria-label="Notificaciones" sx={utilityButtonStyles}>
                <Badge color="primary" variant="dot" invisible>
                  <NotificationsNoneRoundedIcon sx={{ fontSize: 21 }} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Configuración disponible próximamente">
              <IconButton
                aria-label="Configuración"
                sx={{ ...utilityButtonStyles, display: { xs: "none", sm: "inline-flex" } }}
              >
                <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 28, alignSelf: "center", mx: { xs: 1, sm: 1.5 } }}
          />
          <UserIdentity />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
