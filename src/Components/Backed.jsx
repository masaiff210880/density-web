import React from "react";
import backed1 from "../images/backed1.png";
import backed2 from "../images/backed2.png";
import backed3 from "../images/backed3.png";
import backed4 from "../images/backed4.png";
import backed5 from "../images/backed5.png";
import backed6 from "../images/backed6.png";
import backed7 from "../images/backed7.png";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import avatar5 from "../images/avatar5.png";
import avatar6 from "../images/avatar6.png";
import avatar7 from "../images/avatar7.png";
import avatar8 from "../images/avatar8.png";
import styled from "styled-components";
const Mainsection = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 200px;
`;
const Heading = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;
`;
const ChildSection1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 80px;
`;
const ChildSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 80px;
`;

const AvatarSection = styled.div`
  width: 60%;
  margin: auto;
`;
const AvatarCard = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 40px;
`;
const AvatarBody = styled.div`
  width: 135;
  height: 205;
`;
const AvatarName = styled.div`
  color: var(--White, #fff);
  /* text-align: center; */
  font-family: Neurial Grotesk;
  font-size: 20.48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  width: 180px;
  margin-top: 10px;
`;
const AvatarPosition = styled.div`
  color: var(--neutrals-grey-7, #808090);
  font-family: Neurial Grotesk;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  text-align: center;
`;

const CenteredDiv = styled.div`
  text-align: center;
`;

const CenteredImage = styled.img`
  display: inline-block;
`;

const Backed = () => {
  return (
    <Mainsection>
      <Heading>Backed by the Best.</Heading>
      <ChildSection1>
        <img src={backed1} alt="backed1" width={"10%"} />
        <img src={backed2} alt="backed2" />
        <img src={backed3} alt="backed3" />
        <img src={backed4} alt="backed4" />
      </ChildSection1>
      <ChildSection2>
        <img src={backed5} alt="backed5" />
        <img src={backed6} alt="backed6" />
        <img src={backed7} alt="backed7" />
      </ChildSection2>
      <AvatarSection>
        <AvatarCard>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar1} alt="avatar1" />
            </CenteredDiv>
            <div>
              <AvatarName>Utsav Somani</AvatarName>
            </div>
          </AvatarBody>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar2} alt="avatar2" />
            </CenteredDiv>
            <div>
              <AvatarName>Aditya Nagarsheth</AvatarName>
              <AvatarPosition>Perpetual Value Partners</AvatarPosition>
            </div>
          </AvatarBody>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar3} alt="avatar3" />
            </CenteredDiv>
            <div>
              <AvatarName>Gokul Rajaram</AvatarName>
            </div>
          </AvatarBody>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar4} alt="avatar4" />
            </CenteredDiv>
            <div>
              <AvatarName>Sajid Rehman</AvatarName>
              <AvatarPosition>My Asia VC</AvatarPosition>
            </div>
          </AvatarBody>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar5} alt="avatar5" />
            </CenteredDiv>
            <div>
              <AvatarName>Arjun Sethi</AvatarName>
              <AvatarPosition>Tribe Capital</AvatarPosition>
            </div>
          </AvatarBody>
        </AvatarCard>
      </AvatarSection>


      <AvatarSection>
        <AvatarCard>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar6} alt="avatar6" />
            </CenteredDiv>
            <div>
              <AvatarName>Kunal Shah</AvatarName>
            </div>
          </AvatarBody>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar7} alt="avatar7" />
            </CenteredDiv>
            <div>
              <AvatarName>Sandeep Nailawal</AvatarName>
              <AvatarPosition>Polygon Labs</AvatarPosition>
            </div>
          </AvatarBody>
          <AvatarBody>
            <CenteredDiv>
              <CenteredImage src={avatar8} alt="avatar8" />
            </CenteredDiv>
            <div>
              <AvatarName>Karn Vivek Nagpal</AvatarName>
            </div>
          </AvatarBody>
        </AvatarCard>
      </AvatarSection>
    </Mainsection>
  );
};

export default Backed;
