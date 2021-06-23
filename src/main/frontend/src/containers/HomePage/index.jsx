import React from "react";
import { Navbar } from "../../components/navbar";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";

export function HomePage(props){
  return<pageContainer>
    <TopSection >
      <Navbar/>
    </TopSection>
  </pageContainer>

}
