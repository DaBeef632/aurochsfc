import React from "react";
import { BrandLogo } from "../brandLogo";
const NavabarContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
`;
export function Navbar(props){
  return <NavabarContainer>
    <BrandLogo/>
  </NavabarContainer>
}
