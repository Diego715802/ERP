import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ConnectivityLine } from "./connectivity-line";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Box
      aria-label="ComeCore — Controla, conecta y crece"
      sx={{
        position: "relative",
        display: "flex",
        minWidth: compact ? 146 : { xs: 168, sm: 208 },
        height: compact ? 44 : 58,
        alignItems: "center",
        isolation: "isolate",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          top: compact ? -7 : 0,
          left: compact ? 8 : 15,
          width: compact ? 154 : "auto",
          overflow: compact ? "hidden" : "visible",
          color: "rgba(12, 168, 207, 0.28)",
          pointerEvents: "none",
          transform: compact ? "scale(0.72)" : "none",
          transformOrigin: "left center",
        }}
      >
        <ConnectivityLine />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: compact ? 38 : 48,
          height: compact ? 38 : 48,
          flex: compact ? "0 0 38px" : "0 0 48px",
          overflow: "hidden",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Image
          src="/brand/comecore-logo.jpeg"
          alt=""
          aria-hidden="true"
          width={compact ? 92 : 116}
          height={compact ? 92 : 116}
          priority
          style={{
            position: "absolute",
            top: compact ? -21 : -27,
            left: compact ? -27 : -34,
            maxWidth: "none",
          }}
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, ml: compact ? 0.9 : 1.15 }}>
        <Typography
          component="div"
          sx={{
            color: "text.primary",
            fontSize: compact ? "1.08rem" : { xs: "1.25rem", sm: "1.4rem" },
            fontWeight: 650,
            lineHeight: 1,
            letterSpacing: "-0.035em",
            whiteSpace: "nowrap",
          }}
        >
          Come
          <Box component="span" sx={{ color: "primary.main" }}>
            Core
          </Box>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: compact ? "none" : { xs: "none", sm: "block" },
            mt: 0.65,
            color: "#60738A",
            fontSize: "0.48rem",
            fontWeight: 650,
            letterSpacing: "0.22em",
            lineHeight: 1,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Controla · conecta · crece
        </Typography>
      </Box>
    </Box>
  );
}
