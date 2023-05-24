import { useEffect, useState } from "react";
import Layout from "../organisms/layout/Layout";
import CodingTestTable from "../organisms/codingTest/CodingTestTable";
import Grid from "@mui/material/Grid";
import axios from "axios";

// https://github.com/weniv/StudyIn_FE/blob/main/src/components/templates/MainTemplate.jsx

const MainTemplate = ({ codingTestData }) => {
  return (
    <Grid item xs={12}>
      <CodingTestTable codingTestData={codingTestData} />
    </Grid>
  );
};

export default MainTemplate;

// <Layout>
//   <CodingTestTable />
// </Layout>
