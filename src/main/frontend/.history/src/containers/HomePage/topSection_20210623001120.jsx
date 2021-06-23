import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/aurouchs background image.jpeg";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 600 px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -50px;
  background-size: cover;
  `;

export function TopSection(props){
  return <TopSectionContainer>Boom</TopSectionContainer>;
}
