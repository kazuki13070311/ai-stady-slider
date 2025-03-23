import React from "react";
import styled from "styled-components";
import CodeBlock from "./CodeBlock";

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

const UserMessage = styled.div`
  background-color: #0a84ff;
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 90%;
  align-self: flex-end;
  color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #0a84ff;
    border-bottom: 0;
    border-right: 0;
    margin-left: -5px;
    margin-bottom: -10px;
  }
`;

const AIMessage = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 90%;
  align-self: flex-start;
  color: #333;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #f0f0f0;
    border-bottom: 0;
    border-left: 0;
    margin-right: -5px;
    margin-bottom: -10px;
  }
`;

const DialogTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 0.9em;
  color: ${(props) => (props.isUser ? "#ffffff" : "#333333")};
`;

const DialogBlock = ({ userMessage, aiMessage, codeBlock, codeTitle }) => {
  return (
    <DialogContainer>
      <UserMessage>
        <DialogTitle isUser>私の指示:</DialogTitle>
        {userMessage}
      </UserMessage>
      <AIMessage>
        <DialogTitle>Cursorの回答:</DialogTitle>
        {aiMessage}
        {codeBlock && (
          <CodeBlock title={codeTitle} maxHeight="250px" fontSize="0.85em">
            {codeBlock}
          </CodeBlock>
        )}
      </AIMessage>
    </DialogContainer>
  );
};

export default DialogBlock;
