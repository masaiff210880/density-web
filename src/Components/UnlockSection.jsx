import React from "react";
import styled from "styled-components";
import bgimg from "../images/unlockimg.png";


import devider from "../images/devider.png";

const Mainsection = styled.div`
  width: 100%;
  margin-top: 150px
`;

const Title = styled.h1`
  color: var(--White, #fff);
  text-align: center;
  font-family: 'Neurial Grotesk', sans-serif;
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
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -4.19px;
`;

const InformationText = styled.p`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const CenteredImage = styled.img`
  display: block;
  margin: 100px auto;
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
  color: var(--White, #fff);
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PricingSection = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
column-gap: 2%;
margin-top: 6%;
`;
const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UnlockSection = () => {
  return (
    <Mainsection>
      <div>
        <Title>
          <FutureText>Unlock</FutureText> New Frontiers.
        </Title>
        <InformationText>
          Are you a stock trader looking for new opportunities to make <br />{" "}
          money? We got you covered!
        </InformationText>
        <Community>
          <PricingSection>
            <PriceCard>
              <Price>Same</Price>
              <Price>Strategies</Price>
            </PriceCard>
            <img src={devider} alt="" />
            <PriceCard>
              <Price>Same</Price>
              <Price>Indicators</Price>
            </PriceCard>
            <img src={devider} alt="" />
            <PriceCard>
              <Price>Better</Price>
              <Price>Leverage</Price>
            </PriceCard>
            <img src={devider} alt="" />
            <PriceCard>
              <Price>24x7</Price>
              <Price>Trading</Price>
            </PriceCard>
          </PricingSection>
        </Community>
        <CenteredImage src={bgimg} alt="Description of the image" />
        
      </div>
    </Mainsection>
  );
};

export default UnlockSection;
