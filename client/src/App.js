import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Routers from "./routes/Routers";

// https://github.com/weniv/StudyIn_FE/blob/main/src/App.js

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routers />
      </BrowserRouter>
    </>
  );
};

export default App;
