import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

export default function InputAdornments() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [career, setCareer] = useState("");
  const [firstPlatform, setFirstPlatform] = useState("");
  const [firstDirector, setFirstDirector] = useState("");
  const [firstIDE, setFirstIDE] = useState("");
  const [secondPlatform, setSecondPlatform] = useState("");
  const [secondDirector, setSecondDirector] = useState("");
  const [secondIDE, setSecondIDE] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlepPositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handlepCareerChange = (e) => {
    setCareer(e.target.innerText);
  };

  const handleFirstPlatform = (e) => {
    setFirstPlatform(e.target.innerText);
  };

  const handleFirstDirector = (e) => {
    setFirstDirector(e.target.innerText);
  };

  const handleFirstIDE = (e) => {
    setFirstIDE(e.target.innerText);
  };

  const handleSecondPlatform = (e) => {
    setSecondPlatform(e.target.innerText);
  };

  const handleSecondDirector = (e) => {
    setSecondDirector(e.target.innerText);
  };

  const handleSecondIDE = (e) => {
    setSecondIDE(e.target.innerText);
  };

  const handleType = (e) => {
    setType(e.target.innerText);
  };

  const handleYear = (e) => {
    setYear(e.target.innerText);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const submitBtn = async (e) => {
    e.preventDefault();
    const url = "/api/data";

    const firstTest = [firstPlatform, firstDirector, firstIDE];
    const secondTest = [secondPlatform, secondDirector, secondIDE];

    const data = [
      name,
      position,
      career,
      firstTest,
      secondTest,
      type,
      year,
      link,
    ];

    try {
      const result = await axios.post(url, data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form method="POST" onSubmit={submitBtn}>
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
          onChange={handleFirstPlatform}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["유", "무"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="화상감독" />}
          onChange={handleFirstDirector}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["가능", "불가능"]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="외부 IDE 사용여부" />
          )}
          onChange={handleFirstIDE}
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
          onChange={handleSecondPlatform}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["유", "무"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="화상감독" />}
          onChange={handleSecondDirector}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["가능", "불가능"]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="외부 IDE 사용여부" />
          )}
          onChange={handleSecondIDE}
        />
      </fieldset>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["공채", "수시"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="채용종류" />}
        onChange={handleType}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["2020", "2021", "2022", "2023"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="연도" />}
        onChange={handleYear}
      />
      <TextField
        fullWidth
        label="정보출처(링크)"
        id="fullWidth"
        onChange={handleLink}
      />
      <Button variant="contained" disableElevation type="submit">
        작성완료
      </Button>
    </form>
  );
}
