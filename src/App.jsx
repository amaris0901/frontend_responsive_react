import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box } from "@mui/system";
import { Container, Grid } from '@mui/material';
function App() {
  return (
    <Box>
      <Nav/>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
        <Grid item xs={3} >
        <Sidebar />
        </Grid>
        <Grid item xs={6} >
        <Content />
        </Grid>
        <Grid item xs={3} >
          <Rightbar />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}

export default App;
