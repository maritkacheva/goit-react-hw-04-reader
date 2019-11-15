import styled from "styled-components";

export const StyledControl = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  min-width: 240px;
  border: 0;
  padding: 8px 16px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  background-color: ${props => (props.disabled ? "#bdbdbd" : "#3884ff")};
  pointer-events: ${props => (props.disabled ? "none" : true)};

  :hover,
  :focus {
    background-color: #1f65d6;
  }
`;
