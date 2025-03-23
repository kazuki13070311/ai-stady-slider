import React from "react";
import styled from "styled-components";

const CodeContainer = styled.div`
  background-color: #282c34;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
  overflow: auto;
  max-height: ${(props) => props.maxHeight || "400px"};
  font-family: "Source Code Pro", monospace;
  font-size: ${(props) => props.fontSize || "0.9em"};
  line-height: 1.5;
  color: #e6e6e6;
  white-space: pre-wrap;
  position: relative;
`;

const CodeHeader = styled.div`
  display: ${(props) => (props.title ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #555;
  font-weight: bold;
  color: #61dafb;
`;

const CodeBlock = ({ children, title, maxHeight, fontSize }) => {
  return (
    <CodeContainer maxHeight={maxHeight} fontSize={fontSize}>
      <CodeHeader title={title}>{title}</CodeHeader>
      {children}
    </CodeContainer>
  );
};

export default CodeBlock;
