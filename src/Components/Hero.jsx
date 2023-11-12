import React from "react";
import styled from "styled-components";
import bgimg from "../images/heroimg.png";

const Mainsection = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: var(--White, #fff);
  text-align: center;
  font-family: 'Neurial Grotesk', sans-serif;;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -4.19px;
`;
const FutureText = styled.span`
  background: linear-gradient(97deg, #78e65d 47.68%, #d5fa39 70.85%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Neurial Grotesk', sans-serif;;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -4.19px;
`;

const InformationText = styled.p`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: 'Neurial Grotesk', sans-serif;;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  // margin:
`;
const CenteredImage = styled.img`
  display: block;
  margin: 100px auto;
  position: relative;
  z-index: 3;
`;

const BackgroundCircle = styled.div`
position: absolute;
width: 950px;
height: 800px;
background: radial-gradient(circle,#78e65d,transparent);
filter: blur(50px);
border-radius: 50%;
top: 155%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 1;
`;
const Hero = () => {
  return (
    <Mainsection>
      <div>
        <Title>
          It’s time to trade,
          <br /> the <FutureText>future</FutureText>
        </Title>
        <InformationText>
          Trade BTC, ETH Futures with 125x leverage and earn rewards.
        </InformationText>
        <BackgroundCircle />
        <CenteredImage src={bgimg} alt="Description of the image" />
      </div>
    </Mainsection>
  );
};

export default Hero;
