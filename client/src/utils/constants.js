import defaultThumb01 from "../assets/default-thumb01.png";
import defaultThumb02 from "../assets/default-thumb02.png";
import defaultThumb03 from "../assets/default-thumb03.png";

export const DEFAULT_STUDY_IMAGE = [
  defaultThumb01,
  defaultThumb02,
  defaultThumb03,
];

export const WIDTH = {
  size: "11.9",
  maxWidth: "119rem",
  marginWidth: "1.6rem",
};

export const BREAK_POINT = {
  pc: 1024,
  tablet: 768,
};

export const COLOR = {
  main: "#2e6ff2",
  mainLight: "#5c8ef2",
  point1: "#ffc533",
  point1Light: "#ffe187",
  point2: "#ff254c",
  textBlack: "#121314",
  textGray: "#47494d",
  textLightGray: "#8d9299",
  bgGray: "#d9dbe0",
  bgGrayLight: "#f3f5fa",
};

export const STUDY_TAB = [
  { id: "new", text: "최신 스터디" },
  { id: "recruit", text: "모집 중 스터디" },
  { id: "ing", text: "진행 중 스터디" },
];

export const MY_STUDY_TAB = [
  { id: "my", value: "my_study", text: "내가 만든 스터디" },
  { id: "join", value: "my_participating_study", text: "참여 중 스터디" },
  { id: "end", value: "my_closed_study", text: "완료한 스터디" },
  { id: "like", value: "my_like_study", text: "관심 스터디" },
];

export const STUDY_FILTER = [
  {
    title: "주제",
    name: "subject",
    data: [
      {
        text: "개념학습",
        value: "1",
      },
      {
        text: "응용/활용",
        value: "2",
      },
      {
        text: "프로젝트",
        value: "3",
      },
      {
        text: "챌린지",
        value: "4",
      },
      {
        text: "자격증/시험",
        value: "5",
      },
      {
        text: "취업/코테",
        value: "6",
      },
      {
        text: "특강",
        value: "7",
      },
      {
        text: "기타",
        value: "8",
      },
    ],
  },
  {
    title: "난이도",
    name: "difficulty",
    data: [
      {
        text: "초급",
        value: "1",
      },
      {
        text: "중급",
        value: "2",
      },
      {
        text: "고급",
        value: "3",
      },
    ],
  },
  {
    title: "요일",
    name: "study_day",
    data: [
      {
        text: "월",
        value: "1",
      },
      {
        text: "화",
        value: "2",
      },
      {
        text: "수",
        value: "3",
      },
      {
        text: "목",
        value: "4",
      },
      {
        text: "금",
        value: "5",
      },
      {
        text: "토",
        value: "6",
      },
      {
        text: "일",
        value: "7",
      },
    ],
  },
  {
    title: "유형",
    name: "offline",
    data: [
      {
        text: "오프라인",
        value: "True",
      },
      {
        text: "온라인",
        value: "False",
      },
    ],
  },
  {
    title: "상태",
    name: "study_status",
    data: [
      {
        text: "모집 중",
        value: "1",
      },
      {
        text: "진행 중",
        value: "3",
      },
      {
        text: "완료",
        value: "4",
      },
    ],
  },
];

export const WEEKDAY = {
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토",
  7: "일",
};

export const HOMETITLE = "스터디인";
export const PAGETITLE = [
  { path: "offline", title: "오프라인" },
  { path: "online", title: "온라인" },
  { path: "search", title: "검색" },
  { path: "join", title: "회원가입" },
  { path: "login", title: "로그인" },
  { path: "mypage", title: "마이페이지" },
  { path: "study-create", title: "스터디 생성" },
  { path: "study-edit", title: "스터디 수정" },
];
