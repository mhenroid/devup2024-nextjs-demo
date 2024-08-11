import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export default async function AppBarComponent() {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar variant="regular">
        <Typography variant="h6" noWrap>
          Next.js Demo
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <span></span>
      </Toolbar>
    </AppBar>
  );
}
