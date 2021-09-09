import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Globalstyles from "./styles/Globalstyles";

function App() {
  return (
    <BrowserRouter>
       <Globalstyles/>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;