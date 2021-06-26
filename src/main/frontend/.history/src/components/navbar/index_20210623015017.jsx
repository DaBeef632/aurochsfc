import React from "react";
import { BrandLogo } from "../brandLogo";
import styled from "styled-components";
const NavabarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccessibilityContainer = styled.div`
  display: flex;
`;

const AnchorLink = styled.a`
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

export function Navbar(props){
  return <NavabarContainer>
    <BrandLogo/>
    <AccessibilityContainer>
      <AnchorLink> Club Portal </AnchorLink>
      <Button size={11}> Register </Button>

      <AnchorLink> Login </AnchorLink>
    </AccessibilityContainer>
  </NavabarContainer>
}
