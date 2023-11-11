

import React from "react";
import styled from "styled-components";
import dottedBg from "../images/dotted_bg.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";



const MainSection = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color:white;
 
`;


const Dotted = styled.div`
background-image: url(${dottedBg});
height: 237px;
width: 300px;
margin-left: 30px;
position: absolute;

 
`;

const MainCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-top: 80px;
`
const CardSecond = styled.div`
width: 335px;
height: 384px;
margin-bottom: 30px;
position: relative;
padding: 50px;
padding-right: 0px;
background: #eeefee;

  
`
const CardSecond2 = styled.div`

width: 335px;
height: 384px;
margin-bottom: 30px;
position: relative;
padding: 50px;
padding-right: 0px;
background: #eeefee;

  
`
const CardSecond3 = styled.div`

width: 335px;
height: 384px;
margin-bottom: 30px;
position: relative;
padding: 50px;
padding-right: 0px;
background: #eeefee;

  
`



const HeadingFirst = styled.h1`
text-align:center;
color: var(--Black, #0E0E0F);
font-family: 'Neurial Grotesk', sans-serif;
font-size: 72px;
font-style: normal;
font-weight: 700;
padding-top: 70px;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px; 


`;
const ParaHead = styled.p`
color: var(--neutrals-grey-8, #32333A);
text-align: center;
font-family: 'Neurial Grotesk', sans-serif;
font-size: 22.366px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 146.875% */
`;

const Asome = styled.p`
color: var(--neutrals-grey-6,#666673);
font-family: 'Neurial Grotesk',sans-serif;
font-size: 20px;
margin-right: 44px;
font-style: normal;
flex-wrap: nowrap;
font-weight: 400;
width: 100%;
`;
const Asome2 = styled.p`
color: var(--neutrals-grey-6,#666673);
font-family: 'Neurial Grotesk',sans-serif;
font-size: 17px;
margin-right: 44px;
font-style: normal;
flex-wrap: nowrap;
font-weight: 400;
width: 100%;
`;
const NamePerson = styled.p`
color: var(--White,#0E0E0F);
    font-family: 'Neurial Grotesk',sans-serif;
    font-size: 28px;
    font-style: normal;
    margin-top: 66px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -1px;
`;
const Image = styled.img`
margin-top: 58px;
`;
const Image2 = styled.img`
margin-top: 17px;
`;
const Image3 = styled.img`
margin-top: 10px;
margin-left: 30px;
`;
const FirstDiv = styled.div`
 display: flex;

`;
const Donttake = () => {
  return (
    <MainSection>
      <div>
        <HeadingFirst>Don’t take our word for it.</HeadingFirst>
        <ParaHead>Hear it from our expert community of traders who have made <br />insane amounts in a short amount of time</ParaHead>
      </div>
      <MainCard>
        <CardSecond>
          <FirstDiv>
            <Asome>As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.</Asome>
            <Dotted>
            </Dotted>
          </FirstDiv>
          <FirstDiv>
            <div>
              <NamePerson>Prakash
                Jamatia.</NamePerson>
              <Asome2>Founder Tradeshala</Asome2>
            </div>
            <Image src={person1} alt="" />
          </FirstDiv>

        </CardSecond>
        <CardSecond2>
          <FirstDiv>
            <Asome>As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.</Asome>
            <Dotted>
            </Dotted>
          </FirstDiv>
          <FirstDiv>
            <div>
              <NamePerson>Shambhavi
                Nayak.</NamePerson>
              <Asome2>Commodity Trader</Asome2>
            </div>
            <Image2 src={person2} alt="" />
          </FirstDiv>

        </CardSecond2>
        <CardSecond3>
          <FirstDiv>
            <Asome>As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.</Asome>
            <Dotted>
            </Dotted>
          </FirstDiv>
          <FirstDiv>
            <div>
              <NamePerson>Arjun
                <br /> Naik.</NamePerson>
              <Asome2>Equity Trader  </Asome2>
            </div>
            <Image3 src={person3} alt="" />
          </FirstDiv>

        </CardSecond3>
      </MainCard>
    </MainSection>
  );
};

export default Donttake;
