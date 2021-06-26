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

  const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FCB034;
  display: flex;
  flex-direction: column;
  `;
export function TopSection(props){
  return ( <TopSectionContainer>
    <BackgroundFilter>boom</BackgroundFilter>
  </TopSectionContainer>
  );
}
