import React from "react";
import styled from "styled-components";
import dottedBg from "../images/dotted_bg.png";
import perImage from "../images/perImage.svg"
import profilePic from "../images/profilePic.svg";


const Mainsection = styled.div`
  width: 100%;
  background-color:white;
 
`;
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
const HeadingFirst1 =styled.h1`
color: var(--Black, #0E0E0F);
font-family: 'Neurial Grotesk', sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 700;



`

const ParaHead = styled.p`
color: var(--neutrals-grey-8, #32333A);
text-align: center;
font-family: 'Neurial Grotesk', sans-serif;
font-size: 22.366px;
font-style: normal;
font-weight: 400;
line-height: 32.849px; /* 146.875% */
`;
const ParaHead1 = styled.p`
color: var(--neutrals-grey-8, #32333A);
font-family: 'Neurial Grotesk', sans-serif;
font-size: 18.366px;
height :50%;

`;






const Dotted = styled.div`
  background-image: url(${dottedBg});
  height: 264px;
  width: 354px;
  position: relative;
  left: 132px;
  bottom: 173px;
  margin: auto;
`;

const Dotted1 = styled.div`
  background-image: url(${dottedBg});
  height: 264px;
  width: 354px;
  position: relative;
  left: 132px;
  bottom: 159px;
  margin: auto;
`;



const MainCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-top: 80px;
  margin-bottom:20px;
`
const CardSecond = styled.div`
width: 520px;
height: 567px;
  padding :50px;
  margin-right:10px;
  margin-bottom: 30px;
  background: #eeefee;
  
`
const CardSecond1 = styled.div`
width: 520px;
height: 567px;
padding: 50px;
margin-right: 10px;
margin-bottom: 30px;
background: #eeefee;
  
`

const DivImg = styled.div`
  width:20px;
`;

const StartSmall = () => {
  return (
    <Mainsection>
      <HeadingFirst>Start Small. Earn Big</HeadingFirst>
      <ParaHead>Deposity a minimum of 1000 and get a Deposit bonus + <br />dedicagted relationship manager</ParaHead>
      <MainCard>

        <CardSecond>
          <DivImg>
            <img src={perImage} alt="perImage" />
          </DivImg>
          <Dotted>
          </Dotted>
          <HeadingFirst1>Deposit <br /> Bonus</HeadingFirst1>
          <ParaHead1>our assets' liquidity is unmatched in the market , with a <br /> small bid-ask spread and a well-balanced order book.</ParaHead1>
        </CardSecond>
        <CardSecond1>
          <DivImg>
            <img src={profilePic} alt="profilePic" />
          </DivImg>
          <Dotted1>
          </Dotted1>
          <HeadingFirst1>Dedicated <br /> Relationship Manager</HeadingFirst1>
          <ParaHead1>our assets' liquidity is unmatched in the market , with a <br /> small bid-ask spread and a well-balanced order book.</ParaHead1>
        </CardSecond1>

      </MainCard>

    </Mainsection>
  )
}

export default StartSmall