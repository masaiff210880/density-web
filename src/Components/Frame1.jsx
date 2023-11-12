import React from "react";
import styled from "styled-components";
import devider from "../images/devider.png";
const Community = styled.div`
  width: 60%;
    height: 200px;
    border: 1.5px solid rgb(62 95 75 / 96%);
    background: rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 10px 6px rgba(235, 255, 37, 0.20);
    backdrop-filter: blur(26.25px);
    margin: auto;
    margin-bottom: 100px;
`;
const Price = styled.div`
  color: var(--electric-green-primary, #EBFF25);
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PricingSection = styled.div`
display: flex;
column-gap: 2%;
margin-top: 8%;
justify-content: space-evenly;
align-items: center;
`;
const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Traders = styled.div`
  color: #a9a9a9;
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;
const Frame1 = () => {
  return (
    <div>
      <Community>
        <PricingSection>
          <PriceCard>
            <Price>00%</Price>
            <Traders>Conversion Fee </Traders>
          </PriceCard>
          <img src={devider} alt="" />
          <PriceCard>
            <Price>500 Mn+</Price>
            <Traders>Lifetime Volume Traded</Traders>
          </PriceCard>
          <img src={devider} alt="" />
          <PriceCard>
            <Price>250+</Price>
            <Traders>Total Tradable Pairs</Traders>
          </PriceCard>
          <img src={devider} alt="" />
          <PriceCard>
            <Price>15,000+</Price>
            <Traders>Traders</Traders>
          </PriceCard>
        </PricingSection>
      </Community>
    </div>
  );
};

export default Frame1;
