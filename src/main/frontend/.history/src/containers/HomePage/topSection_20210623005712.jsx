import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/aurouchs background image.jpeg";
import PartyOfTwoImg from "../../images/Party_Two Color.png"
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

  const TopSectionInnerContainer = styled.div`
  width: 100;
  height: 100;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  `;

  const StandoutImage = styled.div`
  width 37em;
  height: 32;

  img{
    width: 100%;
    height: 100%;
  }
  `;

  const Title = styled.h2`
    margin: 0;
    font-size: 24 em;
    color: #fff;
    line-height: 1.7;
  `;
export function TopSection(props){
  return ( <TopSectionContainer>
    <BackgroundFilter>
      <TopSectionContainer>
      <StandoutImage>
        <img src={PartyOfTwoImg} alt="best beer on earth"/>
      </StandoutImage>
      </TopSectionContainer>
    </BackgroundFilter>
  </TopSectionContainer>
  );
}
