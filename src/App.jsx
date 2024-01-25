import Routers from "./routes/Routers";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
