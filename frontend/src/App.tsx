import { Container, CssBaseline, Box, AppBar, Toolbar, Typography } from '@mui/material';
import InventoryTable from './components/InventoryTable';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Portfolio - Dashboard Pro
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <InventoryTable />
        </Box>
      </Container>
    </>
  )
}

export default App
