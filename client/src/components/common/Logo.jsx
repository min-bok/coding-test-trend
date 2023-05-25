import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAK_POINT } from "../../utils/constants";
import { ReactComponent as SVGLogo } from "../../assets/Logo.svg";

const Logo = ({ as, fill, children }) => {
  return (
    <H1 as={as}>
      <Link to="/">
        <SVGLogo fill={fill} />
        <span className="sr-only">Studyin {children}</span>
      </Link>
    </H1>
  );
};

const H1 = styled.h1`
  a {
    display: inline-block;
  }
  svg {
    display: block;
    width: auto;
    height: clamp(2.2rem, calc(32 / ${BREAK_POINT.pc} * 100vw), 3.2rem);
  }
`;

export default Logo;
