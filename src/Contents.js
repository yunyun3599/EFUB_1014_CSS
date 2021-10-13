import React from "react";
import styled, { css } from "styled-components";
import Banner from "./Components/Banner";
import Boxes from "./Components/Boxes";
import Circle from "./Components/Circle";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0%;
  ${media.tablet`
  padding : 0%;
  `}
`;

const Contents = () => {
  return (
    <Wrapper>
      <Banner />
      <Boxes />
      <Circle />
    </Wrapper>
  );
};

export default Contents;
