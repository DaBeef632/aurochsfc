import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/logo-full.png"
const BrandLogoContainer = styled.div`
  display: fles;
  alight-items: center;
`;

const LogoImage = styled.div`
width: ${({ size }) => size ? size + "px" : "5em"};
height: ${({ size }) => size ? size + "px" : "5em"};

img {
  width: 100%;
  height: 100%;
}
`;

const LogoTitle = styled.h2`
margin: 0;
font-size: ${({ size }) => (size ? size + "px" : "25px")};
color: #fff;
font-weight: 900;
`;

export function BrandLogo(props){
  return <BrandLogoContainer>

  </BrandLogoContainer>

}
