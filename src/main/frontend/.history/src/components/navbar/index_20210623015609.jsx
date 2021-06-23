import React from "react";
import { BrandLogo } from "../brandLogo";
import styled from "styled-components";
import { Marginer } from "../marginer";
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

const Seperator = styled.div`
  min-height: 43%;
  width: 1px;
  color: #fff;
`;
export function Navbar(props){
  return <NavabarContainer>
    <BrandLogo/>
    <AccessibilityContainer>
      <AnchorLink> Club Portal </AnchorLink>
      <Marginer direction="horizontal" margin={18}/>
      <Seperator/>
      <Button size={11}> Register </Button>
      <Marginer direction="horizontal" margin={18}/>
      <AnchorLink> Login </AnchorLink>
    </AccessibilityContainer>
  </NavabarContainer>
}
