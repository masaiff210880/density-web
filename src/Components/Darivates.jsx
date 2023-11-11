import React from "react";
import styled from "styled-components";
import bgimg from "../images/mobile.png";
import mobiletrading from "../images/tradeimg.png";
import mobiledeposit from "../images/depoimg.png";

import accimg from "../images/accountimg.png";
import depositimg from "../images/depositimg.png";
import tradingimg from "../images/traderimg.png";


const Mainsection = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
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
  font-family: Neurial Grotesk;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -4.19px;
`;

const Imagesection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex: 2;
`;

const LeftDiv = styled.div`
  // flex: 1;
  // padding: 20px;
  margin: 50px 150px;
`;

const RightDiv = styled.div`
  // flex: 1;
  // padding: 20px;
`;

const CenteredImage = styled.img`
  display: block;
`;

const InformationText = styled.p`
  color: var(--neutrals-grey-4, #e7e7ea);
  font-family: Neurial Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const NavButton = styled.button`
  display: flex;
  height: 48px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  color: #000;
  font-family: Neurial Grotesk;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  // margin: auto;
`;

const StyledDepositText = styled.span`
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DescriptionText = styled.p`
  color: #a9a9a9;
  font-family: Neurial Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  /* You can add other styles specific to this text here */
`;

const AccountImage = styled.img`
  width: 100px;
  height: 100px;
`;

const HorizontalLine = styled.hr`
  width: 40%;
  height: 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
`;

const Darivates = () => {
  return (
    <Mainsection>
      <div>
        <Title>
          Derivates made simple
          <br />
          in <FutureText>3 Easy </FutureText> Steps
        </Title>
        <Imagesection>
          <LeftDiv>
            <CenteredImage src={bgimg} alt="Description of the left image" />
          </LeftDiv>
          <RightDiv>
            <AccountImage src={accimg} alt="Description of the left image" />
            <InformationText>
              <StyledDepositText>Create an Account</StyledDepositText>
            </InformationText>
            <DescriptionText>
              <p>
                {" "}
                Register & Complete your  <br /> Verification in less than 2 minutes{" "}
              </p>
            </DescriptionText>
            <NavButton>TRADE NOW</NavButton>
          </RightDiv>
        </Imagesection>
        <HorizontalLine />

        <Imagesection>
          <LeftDiv>
            <CenteredImage src={mobiledeposit} alt="Description of the left image" />
          </LeftDiv>
          <RightDiv>
            <AccountImage src={depositimg} alt="Description of the left image" />
            <InformationText>
              <StyledDepositText>Deposit Funds</StyledDepositText>
            </InformationText>
            <DescriptionText>
              <p>
                {" "}
                Add funds quickly using a variety <br /> of payment methods{" "}
              </p>
            </DescriptionText>
            <NavButton>TRADE NOW</NavButton>
          </RightDiv>
        </Imagesection>
        <HorizontalLine />

        <Imagesection>
          <LeftDiv>
            <CenteredImage src={mobiletrading} alt="Description of the left image" />
          </LeftDiv>
          <RightDiv>
            <AccountImage src={tradingimg} alt="Description of the left image" />
            <InformationText>
              <StyledDepositText>Become a Trader</StyledDepositText>
            </InformationText>
            <DescriptionText>
              <p>
                {" "}
                Choose Your Trading Pair & Trade<br />  Seamlessly {" "}
              </p>
            </DescriptionText>
            <NavButton>TRADE NOW</NavButton>
          </RightDiv>
        </Imagesection>
        <HorizontalLine />
      </div>
    </Mainsection>
  );
};

export default Darivates;
