import React from "react";
import styled from "styled-components";
import FooterLogo from "../images/FooterLogo.png";
import faceboklogo from "../images/facebooklogo.png";
import twitterlogo from "../images/twitterlogo.png";
import linkedinlogo from "../images/linkedinlogo.png";
import instagramlogo from "../images/instagramlogo.png";

const FooterSection = styled.div`
  background-color: #229851;
`;

const InnerDiv = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  padding: 63px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
`;

const Logoimage = styled.div`
  cursor: pointer;
  width: 10%;
  margin: auto;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  margin: auto;
`;

const Attributres = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: auto;
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 13.998px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Text = styled.div`
  color: #ddd;
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 13.998px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.996px;
`;

const Footer = () => {
  return (
    <FooterSection>
      <InnerDiv>
        <Logoimage>
          <img src={FooterLogo} alt="density_logo" />
        </Logoimage>
        <Attributres>
          <p>Blog</p>
          <p>Fees</p>
          <p>Leaderboard</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </Attributres>
        <Text>
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i <br />{" "}
          muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
        </Text>
        <SocialMedia>
          <img src={faceboklogo} alt="faceboklogo" />
          <img src={twitterlogo} alt="twitterlogo" />
          <img src={linkedinlogo} alt="linkedinlogo" />
          <img src={instagramlogo} alt="instagramlogo" />
        </SocialMedia>
      </InnerDiv>
    </FooterSection>
  );
};

export default Footer;