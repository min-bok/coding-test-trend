import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from "./pages/getData";
import Admin from "./pages/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetData />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
