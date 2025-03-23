import React from "react";
import styled from "styled-components";
import CodeBlock from "./CodeBlock";

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
  animation: fadeIn 0.6s ease-out;
  max-width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const UserMessage = styled.div`
  background: linear-gradient(135deg, #4c64fb, #0d41e1);
  border-radius: 16px;
  padding: 20px 24px;
  max-width: 88%;
  align-self: flex-end;
  color: white;
  position: relative;
  box-shadow: 0 10px 25px rgba(76, 100, 251, 0.25);
  transform-origin: bottom right;
  animation: scaleIn 0.4s ease-out;
  letter-spacing: 0.03em;
  line-height: 1.6;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -14px;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: #0d41e1;
    border-bottom: 0;
    border-right: 0;
    margin-left: -5px;
    margin-bottom: -14px;
  }
`;

const AIMessage = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px 24px;
  max-width: 88%;
  align-self: flex-start;
  color: #292929;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transform-origin: bottom left;
  animation: scaleIn 0.4s ease-out;
  animation-delay: 0.1s;
  letter-spacing: 0.03em;
  line-height: 1.6;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -14px;
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    border-left: 0;
    margin-right: -5px;
    margin-bottom: -14px;
  }
`;

const DialogTitle = styled.div`
  font-weight: 600;
  margin-bottom: 14px;
  font-size: 1.05em;
  color: ${(props) => (props.isUser ? "#ffffff" : "#292929")};
  display: flex;
  align-items: center;
  
  &:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-color: ${(props) => (props.isUser ? "#ffffff" : "#7B68EE")};
    border-radius: 50%;
    box-shadow: 0 0 0 3px ${(props) => (props.isUser ? "rgba(255,255,255,0.2)" : "rgba(123,104,238,0.2)")};
  }
`;

const DialogContent = styled.div`
  font-size: 1.05em;
  line-height: 1.65;
  margin-bottom: ${(props) => props.hasCodeBlock ? "10px" : "0"};
`;

const DialogBlock = ({ userMessage, aiMessage, codeBlock, codeTitle }) => {
  return (
    <DialogContainer>
      <UserMessage>
        <DialogTitle isUser>私の指示:</DialogTitle>
        <DialogContent>{userMessage}</DialogContent>
      </UserMessage>
      <AIMessage>
        <DialogTitle>Cursorの回答:</DialogTitle>
        <DialogContent hasCodeBlock={!!codeBlock}>{aiMessage}</DialogContent>
        {codeBlock && (
          <CodeBlock title={codeTitle} maxHeight="280px" fontSize="0.95em">
            {codeBlock}
          </CodeBlock>
        )}
      </AIMessage>
    </DialogContainer>
  );
};

export default DialogBlock;
