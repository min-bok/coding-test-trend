import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Index from "./pages/Index";
import Admin from "./pages/admin";

const App = () => {
  const sections = [
    { title: "👀 기업별리스트", url: "/" },
    { title: "🎯 정보 입력하기", url: "/admin" },
    // { title: "Culture", url: "#" },
    // { title: "Business", url: "#" },
  ];

  return (
    <>
      <BrowserRouter>
        <Header title="Logo" sections={sections} />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
