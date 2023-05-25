import styled from "styled-components";
import { COLOR, BREAK_POINT } from "../../../utils/constants";

const SimpleHeader = ({ flexDefault, children }) => {
  return <Header>{children}</Header>;
};

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${COLOR.bgGray};
  margin-bottom: 2rem;
  .max-width {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${({ flexDefault }) => !flexDefault && "center"};
    height: clamp(5.6rem, 8 / 102.4 * 100vw, 8rem);
    gap: 3.2rem;
  }

  @media (max-width: ${BREAK_POINT.tablet}px) {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 20;
  }
`;

export default SimpleHeader;
