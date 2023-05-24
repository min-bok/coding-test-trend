import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mainpage from "./pages/Main";
import Admin from "./pages/admin";

const App = () => {
  const sections = [
    { title: "👀 기업별리스트", url: "/" },
    { title: "🎯 정보 입력하기", url: "/admin" },
    { title: "📑 이력서 작성", url: "#" },
  ];

  return (
    <>
      <BrowserRouter>
        <Header title="Logo" sections={sections} />
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
