import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.17);
  margin: 0.5 em;
  margin_bottom: 1.3em;

`;

const TopContainer = styled.div`
width: 100%;
`;

const ServiceThumbnail = styled.div`
width: 100%;
height: 11em;

img{
  width: 100%;
  height: 100%;
}
`;

const ContentContainer = styled.div`
width: 100%
display: flex;
flex-direction: column;
flex: 1;
padding: 15px 14px;
`;

const BottomContainer = styled.div`
width:100%;
height: 32px;
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid rgba(15, 15, 15, 0.19);
padding: 0 10 px;
`;

export function BeerCard(props){
  const { thumb}

  return <CardContainer>
    <TopContainer>
      <ServiceThumbnail>

      </ServiceThumbnail>
    </TopContainer>
  </CardContainer>
}
