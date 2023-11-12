import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
const Navheader = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  background: #09130b;
  backdrop-filter: blur(20px);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
`;

const Navmenus = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;
  color: #fcfcfc;
  font-family: 'Neurial Grotesk', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const Navmenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
`;

const NavButton = styled.button`
  display: flex;
  height: 48px;
  padding: 16px 25px;
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
  font-weight: 780;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
const Logoimage = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Navheader>
      <Logoimage>
        <img src={logo} alt="density_logo" />
      </Logoimage>
      <Navmenu>
        <Navmenus>
          <p>Career</p>
          <p>Blogs</p>
          <p>Leaderboard</p>
          <p>Fees</p>
        </Navmenus>
        <NavButton>TRADE NOW</NavButton>
      </Navmenu>
    </Navheader>
  );
};

export default Navbar;
