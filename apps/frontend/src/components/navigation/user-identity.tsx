import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function UserIdentity() {
  return (
    <Box
      aria-label="Usuario actual: Diego Reyes"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.15,
        pl: { xs: 0.5, md: 1.25 },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" }, textAlign: "right" }}>
        <Typography
          sx={{
            color: "text.primary",
            fontSize: "0.82rem",
            fontWeight: 650,
            lineHeight: 1.2,
          }}
        >
          Diego Reyes
        </Typography>
        <Typography
          sx={{
            mt: 0.35,
            color: "text.secondary",
            fontSize: "0.69rem",
            lineHeight: 1.1,
          }}
        >
          Sesión local
        </Typography>
      </Box>
      <Avatar
        sx={{
          width: 38,
          height: 38,
          color: "#0756B5",
          backgroundColor: "#E8F2FC",
          border: "1px solid #D3E4F6",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        DR
      </Avatar>
    </Box>
  );
}
