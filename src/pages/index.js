
import * as React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createGlobalStyle } from 'styled-components';
import Hero from "../Components/Hero";
import Frame1 from "../Components/Frame1";
import MobileSection from "../Components/MobileSection";
import TradeSection from "../Components/TradeSection";
import ExploreSection from "../Components/ExploreSection";
import UnlockSection from "../Components/UnlockSection";
import StartSmall from "../Components/StartSmall";
import Darivates from "../Components/Darivates";
import Backed from "../Components/Backed";
import Donttake from "../Components/Donttake";
import Earnmoney from "../Components/Earnmoney";
import Tradetogether from "../Components/Tradetogether";
import Meet from "../Components/Meet";
import GetStart from "../Components/GetStart";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
  }
`;


const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <div>
       <Navbar />
       <Hero />
       <Frame1 />
       <MobileSection/>
       <TradeSection/>
       <ExploreSection />
       <UnlockSection/>
       <StartSmall/>
       <Darivates/>
       <Backed/>
       <Donttake/>
       <Earnmoney/>
       <Tradetogether/>
       <Meet/>
       <GetStart/>
       <Footer/>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Density</title>
