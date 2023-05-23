import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header(props) {
  const { sections, title } = props;

  return (
    <Container maxWidth="lg">
      <React.Fragment>
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            sx={{ flex: 1 }}
          >
            <Link href="/" underline="none" color={"#000"}>
              {title}
            </Link>
          </Typography>
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
              underline="none"
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </React.Fragment>
    </Container>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
