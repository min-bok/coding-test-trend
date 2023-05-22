import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from "./pages/getData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetData />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
