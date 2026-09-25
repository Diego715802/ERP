import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { ModuleDefinition } from "@/config/modules";

export function ModulePlaceholder({ module }: { module: ModuleDefinition }) {
  const Icon = module.icon;

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "grid",
        minHeight: { xs: "calc(100dvh - 68px)", md: "calc(100dvh - 76px)" },
        placeItems: "center",
        px: 3,
        py: { xs: 6, md: 8 },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 520, textAlign: "center" }}>
        <Box
          sx={{
            position: "relative",
            width: { xs: 128, sm: 148 },
            height: { xs: 128, sm: 148 },
            mx: "auto",
            mb: { xs: 4.5, sm: 5.5 },
          }}
        >
          <Box
            aria-hidden="true"
            component="svg"
            viewBox="0 0 148 148"
            sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          >
            <circle cx="74" cy="74" r="57" fill="#FFFFFF" stroke="#DCE7F1" />
            <path
              d="M5 91C27 91 28 55 54 55c27 0 23 40 50 40 17 0 19-18 39-18"
              fill="none"
              stroke="#0CA8CF"
              strokeLinecap="round"
              strokeWidth="1.25"
              opacity="0.34"
            />
            <circle cx="54" cy="55" r="3" fill="#0B6BDC" opacity="0.48" />
            <circle cx="104" cy="95" r="2.5" fill="#0CA8CF" opacity="0.52" />
            <circle cx="143" cy="77" r="2.5" fill="#0B6BDC" opacity="0.42" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              inset: { xs: 31, sm: 37 },
              display: "grid",
              placeItems: "center",
              color: "primary.main",
              backgroundColor: "#F1F7FD",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "20px",
              boxShadow: "0 14px 30px rgba(7, 45, 91, 0.08)",
            }}
          >
            <Icon sx={{ fontSize: { xs: 36, sm: 42 }, strokeWidth: 1 }} />
          </Box>
        </Box>

        <Typography
          component="h1"
          sx={{
            color: "text.primary",
            fontSize: { xs: "1.75rem", sm: "2.25rem" },
            fontWeight: 650,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            textTransform: "uppercase",
          }}
        >
          {module.label}
        </Typography>

        <Box
          component="p"
          role="status"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            mt: 2,
            mb: 0,
            px: 1.5,
            py: 0.75,
            color: "#52677E",
            backgroundColor: "#EDF3F8",
            borderRadius: "999px",
            fontSize: "0.77rem",
            fontWeight: 650,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "secondary.main",
            }}
          />
          Próximamente
        </Box>
      </Box>
    </Container>
  );
}
