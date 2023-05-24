// https://github.com/weniv/StudyIn_FE/blob/main/src/routes/Routers.jsx
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "../components/organisms/layout/Layout";
import { MainPage } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
};

export default Routers;
