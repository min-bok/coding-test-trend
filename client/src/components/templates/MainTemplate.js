import { useEffect, useState } from "react";
import Layout from "../organisms/layout/Layout";
import CodingTestTable from "../organisms/codingTest/CodingTestTable";
import Grid from "@mui/material/Grid";
import axios from "axios";

// https://github.com/weniv/StudyIn_FE/blob/main/src/components/templates/MainTemplate.jsx

const MainTemplate = ({ codingTestData }) => {
  return (
    <Layout>
      <CodingTestTable codingTestData={codingTestData} />
    </Layout>
  );
};

export default MainTemplate;

// <Layout>
//   <CodingTestTable />
// </Layout>
