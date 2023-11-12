
import React from "react";
import styled from "styled-components";
import dottedBg from "../images/dotted_bg.png";
import Te1 from "../images/Te1.png";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import link1 from "../images/link1.png";
const MainSection = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom:140px;
  padding-top:100px;
  background: var(--neutrals-grey-9, #19191D);
`;
const Header1 = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: 'Neurial Grotesk',sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;
`;
const Image = styled.img`
margin-left: 138px;
    margin-top: -71px;
`;
const Image2 = styled.img`
margin-left: 183px;
margin-top: -57px;
`;
const Image3 = styled.img`
margin-left: 168px;
margin-top: -46px;
`;

const Header2 = styled.div`
  color: var(--electric-green-primary, #ebff25);
  font-family: 'Neurial Grotesk',sans-serif;
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

const Card = styled.div`
background-image: url(${Te1});
background-color: #19191d;
  width: 368px;
  height: 372px;
 
`;
const Dotted = styled.div`
  background-image: url(${dottedBg});
  height: 237px;
  border: .1px solid #0f0f12;
  width: 282px;
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





const Asome2 = styled.p`
color: var(--neutrals-grey-6,#666673);
font-family: 'Neurial Grotesk',sans-serif;
font-size: 17px;
margin-left: 64px;
font-style: normal;
flex-wrap: nowrap;
font-weight: 400;
width: 100%;
`;
const FirstDiv = styled.div`
padding: 140px 0px
display: flex;
`;
const NamePerson = styled.p`
color: white;
    font-family: 'Neurial Grotesk',sans-serif;
    font-size: 28px;
    font-style: normal;
    margin-left: 64px;
    margin-top: -31px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -1px;

`;
const Image1 = styled.img`
margin-left: 29px;
margin-top: 75px;

`;
const Meet = () => {
  return (
    <MainSection>
      <FirstDiv>
        <HeaderMain>
          <Header1>Meet the</Header1>
          <Header2>Visionaries </Header2><br />
        </HeaderMain>
        <Header1>behind Density.</Header1>
      </FirstDiv>
      <MainCard>
        <Card>
          <Dotted>
            <CardBody>
              <FirstDiv>
                <div>
                  <NamePerson>Aakash Neeraj <br />Mittal</NamePerson>
                  <Asome2>CEO, Density</Asome2>
                </div>
                <Image src={p1} alt="" />

              </FirstDiv>

            </CardBody>
          </Dotted>
          <Image1 src={link1} alt="" />
        </Card>
        <Card>
          <Dotted>
            <CardBody>
              <FirstDiv>
                <div>
                  <NamePerson>Bhupendra
                    <br />Bule</NamePerson>
                  <Asome2>CTO, Density</Asome2>
                </div>
                <Image2 src={p2} alt="" />

              </FirstDiv>

            </CardBody>
          </Dotted>
          <Image1 src={link1} alt="" />
        </Card>
        <Card>
          <Dotted>
            <CardBody>
              <FirstDiv>
                <div>
                  <NamePerson>Deepak
                    <br />Vasman </NamePerson>
                  <Asome2>CBO, Density</Asome2>
                </div>
                <Image3 src={p3} alt="" />

              </FirstDiv>

            </CardBody>
          </Dotted>
          <Image1 src={link1} alt="" />
        </Card>
      </MainCard>
    </MainSection>
  );
};

export default Meet;
