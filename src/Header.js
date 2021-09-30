import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 30px 80px;
  box-shadow: 0 0 10px grey;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-size: xx-large;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.div`
  outline: none;
  cursor: pointer;
  &:hover {
    color: brown;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>EFUB</Logo>
      <Menu>
        <Button>About</Button>
        <Button>Contents</Button>
        <Button>Contact</Button>
      </Menu>
    </Wrapper>
  );
};

export default Header;
