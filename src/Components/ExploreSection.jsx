import React from "react";
import styled from "styled-components";
import bgimg from "../images/exploreimg.png";

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
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: auto;
`;


const ExploreSection = () => {
  return (
    <Mainsection>
      <div>
        <Title>
          Explore the Markets
          <br /> like it is your <FutureText>Playground.</FutureText>
        </Title>
        <InformationText>
          Search for your favorite coins and stay ahead of the market
        </InformationText>
        <CenteredImage src={bgimg} alt="Description of the image" />
        <NavButton>Explore Markets</NavButton>
      </div>
    </Mainsection>
  );
};

export default ExploreSection;
