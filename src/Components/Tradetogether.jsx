import React from "react";
import styled from "styled-components";
import bg_image from "../images/bg_image.png";
import devider from "../images/devider.png";
const Mainsection = styled.div`
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 25%,
      rgba(42, 93, 50, 0.4) 92.71%
    ),
    url(${bg_image}), lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 650px;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 100px;
`;
const Header1 = styled.p`
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;
`;
const Header2 = styled.span`
  color: var(--electric-green-primary, #ebff25);
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px;
  letter-spacing: -2.097px;
`;
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Info = styled.span`
  color: var(--neutrals-grey-4, #e7e7ea);
  font-family: Neurial Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px; /* 136.873% */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 50px;
`;
const Community = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
  margin: auto;
`;
const Price = styled.div`
color: var(--White, #FFF);
font-family: Neurial Grotesk;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Traders = styled.div`
  color: #A9A9A9;
font-family: Neurial Grotesk;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; /* 162.5% */
`
const PricingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 80px;
  margin-top: 5%;
`
const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  display: flex;
height: 48px;
padding: 24px 48px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
background: linear-gradient(86deg, #D4F938 23.09%, #32D875 108.69%);
box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.80);
backdrop-filter: blur(5px);
color: #000;
font-family: Neurial Grotesk;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
margin: auto;
border: none;
margin-top: 80px;
`
const Tradetogether = () => {
  return (
    <Mainsection>
      <div>
        <HeaderSection>
          <Header1>Trade Together.</Header1>
          <Header2>Thrive Together.</Header2>
        </HeaderSection>
        <Info>Join the fun-filled community on our platform.</Info>
      </div>
      <Community>
        <PricingSection>
          <PriceCard>
            <Price>10,000+</Price>
            <Traders>Traders</Traders>
          </PriceCard>
          <img src={devider} alt="" />
          <PriceCard>
            <Price>100Mn</Price>
            <Traders>Daily Volume Traded</Traders>
          </PriceCard>
          <img src={devider} alt="" />
          <PriceCard>
            <Price>Daily</Price>
            <Traders>Trade Analysis</Traders>
          </PriceCard>
          <img src={devider} alt="" />
          <PriceCard>
            <Price>Live</Price>
            <Traders>Signals</Traders>
          </PriceCard>
        </PricingSection>
      </Community>
      <Button>Join community</Button>
    </Mainsection>
  );
};

export default Tradetogether;
