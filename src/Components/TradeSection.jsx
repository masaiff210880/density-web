import React from "react";
import styled from "styled-components";
import dottedBg from "../images/dotted_bg.png";
import coinCRX from "../images/coinCRX.png";
import blackLogo from "../images/black_logo.png";
import delta from "../images/delta.png";
const MainSection = styled.div`
  width: 80%;
  margin: auto;
  margin-top : 150px
`;
const Header1 = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;
`;
const Header2 = styled.div`
  color: var(--electric-green-primary, #ebff25);
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px;
  letter-spacing: -2.097px;
`;
const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px; /* 136.873% */
  margin-top: 20px;
`;
const Card = styled.div`
  width: 368px;
  height: 438px;
  background: var(--neutrals-grey-9, #19191D);
`;
const Dotted = styled.div`
  background-image: url(${dottedBg});
  height: 250px;
  width: 300px;
`;
const Heading1 = styled.div`
  color: var(--White, #fff);
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 50.625px; /* 158.203% */
  letter-spacing: -1.687px;
`;
const Infos = styled.div`
  color: var(--White, #fff);
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.687px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  row-gap: 50px;
  margin-top: 80px;
`;
const MainCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-top: 80px;
`
const CardSecond = styled.div`
  width: 368px;
  height: 438px;
  background: linear-gradient(180deg,rgb(209 245 54 / 92%) 47.68%,rgb(124 251 60 / 95%) 80.80%);
  box-shadow: 0px 0px 10px 10px #434B21;
`
const HeadingMiddle = styled.div`
  color: #000;
font-family: 'Neurial Grotesk', sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 50.625px; /* 126.563% */
letter-spacing: -1.687px;
`
const InfosMiddle = styled.div`
  color: #000;
font-family: 'Neurial Grotesk', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -1.687px;
`
const CardBody1 = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  row-gap: 50px;
  margin-top: 20px;
`
const TradeSection = () => {
  return (
    <MainSection>
      <div>
        <HeaderMain>
          <Header1>Trade More.</Header1>
          <Header2>Pay Less.</Header2>
        </HeaderMain>
        <Info>Our low Fees Supercharge Your Profits</Info>
      </div>
      <MainCard>
        <Card>
          <Dotted>
            <CardBody>
              <div>
                <img src={coinCRX} alt="" />
              </div>
              <div>
                <Heading1>0.025</Heading1>
                <Infos>Maker Fees</Infos>
              </div>
              <div>
                <Heading1>0.025</Heading1>
                <Infos>Maker Fees</Infos>
              </div>
            </CardBody>
          </Dotted>
        </Card>
        <CardSecond>
          <Dotted>
            <CardBody1>
              <div>
                <img src={blackLogo} alt="" />
              </div>
              <div>
                <HeadingMiddle>0.025</HeadingMiddle>
                <InfosMiddle>Maker Fees</InfosMiddle>
              </div>
              <div>
                <HeadingMiddle>0.025</HeadingMiddle>
                <InfosMiddle>Maker Fees</InfosMiddle>
              </div>
            </CardBody1>
          </Dotted>
        </CardSecond>
        <Card>
          <Dotted>
            <CardBody>
              <div>
                <img src={delta} alt="" />
              </div>
              <div>
                <Heading1>0.025</Heading1>
                <Infos>Maker Fees</Infos>
              </div>
              <div>
                <Heading1>0.025</Heading1>
                <Infos>Maker Fees</Infos>
              </div>
            </CardBody>
          </Dotted>
        </Card>
      </MainCard>
    </MainSection>
  );
};

export default TradeSection;
