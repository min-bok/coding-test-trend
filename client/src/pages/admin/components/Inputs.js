import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { handleOnchange } from "./Func";

export default function InputAdornments() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [career, setCareer] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlepPositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handlepCareerChange = (e) => {
    setCareer(e.target.innerText);
  };

  console.log(career);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          fullWidth
          label="기업명"
          id="fullWidth"
          onChange={handleNameChange}
        />
        <TextField
          fullWidth
          label="포지션"
          id="fullWidth"
          onChange={handlepPositionChange}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["신입", "경력"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="경력" />}
          onChange={handlepCareerChange}
        />
        <fieldset>
          <legend>1차 코딩테스트</legend>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              "프로그래머스",
              "HackerRank",
              "Codility",
              "Alice",
              "LeetCode",
              "BaekJoon",
              "SWEA",
              "기타",
            ]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="플랫폼" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["유", "무"]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="화상감독" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["가능", "불가능"]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="외부 IDE 사용여부" />
            )}
          />
        </fieldset>
        <fieldset>
          <legend>2차 코딩테스트</legend>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              "프로그래머스",
              "HackerRank",
              "Codility",
              "Alice",
              "LeetCode",
              "BaekJoon",
              "SWEA",
              "기타",
            ]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="플랫폼" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["유", "무"]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="화상감독" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["가능", "불가능"]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="외부 IDE 사용여부" />
            )}
          />
        </fieldset>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["공채", "수시"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="채용종류" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["2020", "2021", "2022", "2023"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="연도" />}
        />
        <TextField fullWidth label="정보출처(링크)" id="fullWidth" />
        <Button variant="contained" disableElevation>
          작성완료
        </Button>
      </div>
    </Box>
  );
}
