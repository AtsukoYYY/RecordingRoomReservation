import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export function Header() {
  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="static">
        <Toolbar>録音室予約</Toolbar>
      </AppBar>
    </Box>
  );
}
