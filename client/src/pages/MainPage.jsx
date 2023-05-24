// https://github.com/weniv/StudyIn_FE/blob/main/src/pages/MainPage.jsx
// 템플릿에 다 넘겨줌
import { useEffect, useState } from "react";
import axios from "axios";

import { MainTemplate } from "../components/templates";

const MainPage = () => {
  const [codingTestData, setCodingTestData] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const url = "/api/data";
    const result = await axios.get(url);

    // console.log(result);

    setCodingTestData(result.data);
  };

  return <MainTemplate codingTestData={codingTestData} />;
};

export default MainPage;
