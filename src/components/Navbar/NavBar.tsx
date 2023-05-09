import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./DeviceSize";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileNavLinks } from "./MobileNavLinks";
import { Box } from "@mui/material";

const NavbarContainer = styled.div`
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background-color: "#488AC7";
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

interface NavbarProps {
  // define props here if any
}

export function Navbar(props: NavbarProps) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  console.log(isMobile);

  return (
    <Box
      bgcolor="#488AC7"
      display="flex"
      justifyContent="space-between"
      width="100% "
    >
      {/* <NavbarContainer> */}
      <Box>
        <Logo />
      </Box>
      {!isMobile ? (
        <Box mr="1rem">
          <NavLinks />
        </Box>
      ) : (
        <Box>
          <MobileNavLinks />
        </Box>
      )}
      {/* <Box bgcolor="red"> */}
      {/* <MiddleSection>
        {!isMobile ? (
          <NavLinks />
        ) : (
          <Box bgcolor="red">{isMobile && <MobileNavLinks />}</Box>
        )}
      </MiddleSection> */}
      {/* </Box> */}
      {/* </NavbarContainer> */}
    </Box>
  );
}
