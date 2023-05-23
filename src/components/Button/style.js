import styled from "styled-components";

export const Button = styled.button `

  width: 342px;
  height: 68px;
  background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
  color:#ffffff;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  margin-top:36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

`