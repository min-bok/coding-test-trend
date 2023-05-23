import { useEffect, useState } from "react";
import CustomPaginationActionsTable from "./components/Table";
import axios from "axios";

const GetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const url = "/api/data";
    const result = await axios.get(url);

    console.log(result);

    setData(result.data);
  };

  return <CustomPaginationActionsTable data={data} />;
};

export default GetData;
