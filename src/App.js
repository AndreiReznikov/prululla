import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
