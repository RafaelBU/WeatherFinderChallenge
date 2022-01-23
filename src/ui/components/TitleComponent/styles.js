import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  background: url(${require("../../../img/bg.jpg")}) center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  width: 40%;
`;

export const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 2px;
  line-height: 1.3;
  font-family: "Roboto Slab", serif;
`;

export const Subtitle = styled.h3`
  font-style: italic;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 1.5;
  font-family: "Merriweather", serif;
`;
