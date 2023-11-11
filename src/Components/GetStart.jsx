import React from "react";
import styled from "styled-components";
import mobile_bg from "../images/getstarted_bg.png";
import vector_image from "../images/vector_image.png";
import logo from "../images/density_logo.png";
const Header = styled.div`
  font-family: Neurial Grotesk;
  font-size: 132.195px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.783px;
  background: linear-gradient(
    177deg,
    #fff 2.77%,
    rgba(255, 255, 255, 0) 139.85%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainSection = styled.div`
  position: relative;
  margin-top: 100px;
`
const MobileSection = styled.div`
  background-image: url(${mobile_bg});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 1000px;
  width: 30%;
  z-index: 1;
  position: relative;
  bottom: 60px;
`
const Image = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  right: 60px;
  bottom: 100px;
`
const Button = styled.div`
  display: flex;
width: 866.226px;
height: 134.978px;
padding: 11.132px 33.397px;
justify-content: center;
align-items: center;
gap: 6.958px;
flex-shrink: 0;
background: linear-gradient(269deg, #D4F938 38.89%, rgba(50, 216, 117, 0.96) 103.19%);
color: #000;
font-family: Neurial Grotesk;
font-size: 38.267px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: auto;
z-index: 1;
position: relative;
bottom: 280px;

`
const Logo = styled.div`
  margin-left: 100px;
  margin-bottom: 100px;
`
const GetStart = () => {
  return (
    <MainSection>
      <Header>Get started now.</Header>
      <MobileSection>
        <Image>
          <Logo><img src={logo} alt="logo" /></Logo>
          <div><img src={vector_image} alt="" width={"150%"} /></div>
        </Image>
      </MobileSection>
      <Button>Start Trading!</Button>
    </MainSection>
  );
};

export default GetStart;
