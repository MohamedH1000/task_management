import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8 "
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#73C088" : "#397D54")};
  background-color: ${(props) => (props.border ? "transparent" : "#397D54")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#73C088" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#235D3A")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#235D3A" : "#fff")};
  }
`;
