import React from "react";
import styled from "styled-components";
import bg from "../images/mobile_bg.png";
import oneapp from "../images/oneapp.png";
import future from "../images/future.png";
import isNow from "../images/isnow.png";
const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 120px;
`;
const ChildDiv = styled.div`
  position: relative;
`;
const Topcontent = styled.div`
      position: absolute;
    top: 117px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 60px;
    left: 15px;
`;

const Text = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 33.501px;
  font-style: normal;
  font-weight: 300;
  line-height: 40.201px; /* 120% */
  letter-spacing: -0.799px;
  width: 60%;
`;
const TextLast = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 33.501px;
  font-style: normal;
  font-weight: 300;
  line-height: 40.201px; /* 120% */
  letter-spacing: -0.799px;
  width: 60%;
`

const MobileSection = () => {
  return (
    <MainDiv>
      <ChildDiv>
        <img src={bg} alt="bg" />
        <Topcontent>
          <div>
            <img src={oneapp} alt="oneapp" />
          </div>
          <Text>One App. Endless Possibilities</Text>
        </Topcontent>
      </ChildDiv>
      <ChildDiv>
        <img src={bg} alt="bg" />
        <Topcontent>
          <div>
            <img src={future} alt="oneapp" />
          </div>
          <Text>Future of Derivative Trading.</Text>
        </Topcontent>
      </ChildDiv>
      <ChildDiv>
        <img src={bg} alt="bg" />
        <Topcontent>
          <div>
            <img src={isNow} alt="oneapp" width={"120%"} />
          </div>
          <TextLast>Is now here for you</TextLast>
        </Topcontent>
      </ChildDiv>
    </MainDiv>
  );
};

export default MobileSection;
