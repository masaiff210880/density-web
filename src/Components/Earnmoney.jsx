import React from "react";
import styled from "styled-components";
import bgimg from "../images/notification.png";
import accimg from "../images/Frame.png";
import trade from "../images/doubletradeimg.png";
import invite from "../images/inviteimg.png";
import share from "../images/shareimg.png";

const MainSection = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
`;
const Notifiction = styled.div`
  width: 247.722px;
  height: 228.77px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Heading1 = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;
`;
const Heading2 = styled.div`
  color: var(--electric-green-primary, #ebff25);
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px;
  letter-spacing: -2.097px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  color: var(--neutrals-grey-4, #e7e7ea);
  font-family: Neurial Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px; /* 136.873% */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Card = styled.div`
  width: 323px;
  height: 327px;
  flex-shrink: 0;
  /* border: 1px solid white; */
  background-color: #19191d;
`;
const MainCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  column-gap: 15px;
`;
const CardBg = styled.div`
  background-image: url(${accimg});
  width: 100%;
  height: 60%;
`;
const Text = styled.div`
  width: 220px;
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -1px;
  position: relative;
  top: 80px;
  left: 40px;
`;
const Image = styled.img`
  position: relative;
  left: 30px;
  top: 25px;
`;
const Button = styled.button`
  color: #000;
  font-family: Neurial Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  height: 48px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  margin: auto;
  margin-top: 80px;
`;
const Earnmoney = () => {
  return (
    <MainSection>
      <Notifiction>
        <img src={bgimg} alt="" />
      </Notifiction>
      <div>
        <Heading>
          <Heading1>Earn Money.</Heading1>
          <Heading2>The Easy Way.</Heading2>
        </Heading>
        <Info>No Complexity of Trading Fee, generate volume and win</Info>
      </div>
      <MainCard>
        <Card>
          <CardBg>
            <div>
              <Image src={share} alt="" width={"40%"} />
              <Text>Share your your referral link</Text>
            </div>
          </CardBg>
        </Card>
        <Card>
          <CardBg>
            <div>
              <Image src={invite} alt="" width={"40%"} />
              <Text>Invite Friends to Trade on Density</Text>
            </div>
          </CardBg>
        </Card>
        <Card>
          <CardBg>
            <div>
              <Image src={trade} alt="" width={"35%"} />
              <Text>Trade and Earn</Text>
            </div>
          </CardBg>
        </Card>
      </MainCard>
      <Button>start earning now</Button>
    </MainSection>
  );
};

export default Earnmoney;
