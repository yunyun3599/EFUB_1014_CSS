import React from "react";
import styled from "styled-components";

const LoadCircle = styled.div`
  width: 120px;
  height: 120px;
  border: 16px solid grey;
  border-top: 16px solid #995fdb;
  border-radius: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  @keyframes bingle {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  animation: bingle 1s linear infinite;
`;

const Loading = () => {
  return <LoadCircle />;
};

export default Loading;
