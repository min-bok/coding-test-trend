import { BrowserRouter } from "react-router-dom";

import Routers from "./routes/Routers";

// https://github.com/weniv/StudyIn_FE/blob/main/src/App.js

const App = () => {
  // const sections = [
  //   { title: "기업별리스트", url: "/" },
  //   { title: "정보 입력하기", url: "/admin" },
  //   { title: "이력서 작성", url: "#" },
  //   { title: "지원현황", url: "#" },
  // ];

  return (
    <>
      <BrowserRouter>
        <Routers />
        {/* <Header title="Logo" sections={sections} />
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
