import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../utils/constants";
import { LINKS } from "../../../utils/link";
import SimpleHeader from "./SimpleHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <SimpleHeader flexDefault>
      <StyledNav>
        <ul>
          {LINKS.menuLinks.map((m) => (
            <li key={m.text}>
              <Link to={m.url}>{m.text}</Link>
            </li>
          ))}
        </ul>
      </StyledNav>
    </SimpleHeader>
  );
}

const StyledNav = styled.nav`
  align-self: stretch;
  ul {
    display: flex;
    gap: 1.6rem;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      padding: 4px 0.7rem 0;
      border-bottom: 4px solid transparent;
      a {
        display: block;
        width: 100%;
        text-align: center;
        padding: 1rem 0;
      }
    }
    li.active {
      border-color: ${COLOR.main};
    }
  }
`;

export default Header;
