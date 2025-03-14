import { Route, Switch } from "wouter";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import References from "./pages/References";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";
import ScrollToTop from "./components/forPage/ScrollToTop";

function App() {
  return (
    <>
      <CssBaseline />
      {/* MUI SnackbarProvider (Toast Bildirimleri) */}
      <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'left' }}>
        <ScrollToTop />
        <Header />
        <Container component="main" maxWidth={false} disableGutters className="bg-dark">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/services/:slug" component={ServiceDetail} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/:id" component={PortfolioDetail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/references" component={References} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />

        {/* MUI BackToTop Butonu */}
        <Zoom in={true}>
          <Fab
            variant="contained"
            aria-label="scroll back to top"
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              borderRadius: 2, // Köşeleri yuvarlatma (0 tamamen keskin olur)
              padding: "15px 20px",
              backgroundColor: "gray"
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </SnackbarProvider>
    </>
  );
}

export default App;