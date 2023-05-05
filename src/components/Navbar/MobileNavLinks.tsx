import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./HamburgerMenu";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 50px;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

interface MobileNavLinksProps {
  // Define the props for MobileNavLinks component
}

export function MobileNavLinks(props: MobileNavLinksProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">HOME</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">PROJECTS</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">RECOVERIES</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">RESEARCH</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">ADMIN</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">LOOKUPS</Link>
          </LinkItem>
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
