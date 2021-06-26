import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/devicesize";
import TopSectionBackgroundImg from "../../images/aurouchs background image.jpeg";
import PartyOfTwoImg from "../../images/Party_Two Color.png";
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
  width: 37em;
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

  const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 500;
    font-size: 25px;
  `;

  const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

export function TopSection(props){
  const { children } = props;

  return (
  <TopSectionContainer>
    <BackgroundFilter>
      {children}
      <TopSectionInnerContainer>
        <LogoContainer>
          <BrandLogo logoSize = {60} textSize ={ 50}/>
          <Marginer direction = "vertical" margin={10} />
          <SloganText>Find the correct locations</SloganText>
          <SloganText>Serving Aurochs</SloganText>
          <Marginer direction = "vertical" margin={15}/>
          <Button>Join Now</Button>
         </LogoContainer>
      <StandoutImage>
        <img src={PartyOfTwoImg} alt="best beer on earth"/>
      </StandoutImage>
      </TopSectionInnerContainer>
    </BackgroundFilter>
  </TopSectionContainer>
  );
}
