import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import Globalstyle from "styles/Globalstyle";

function App() {
  return (
    <BrowserRouter>
        <Globalstyle/>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;