import React from "react";
import styled from "styled-components";

const CodeContainer = styled.div`
  background-color: #1a1e27;
  background-image: linear-gradient(to bottom, #252a37, #16191f);
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0 4px;
  overflow: auto;
  max-height: ${(props) => props.maxHeight || "240px"};
  font-family: "Source Code Pro", monospace;
  font-size: ${(props) => props.fontSize || "0.85em"};
  line-height: 1.5;
  color: #e6e6e6;
  white-space: pre-wrap;
  position: relative;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: scaleIn 0.5s ease-out;
  animation-delay: 0.2s;
  width: 100%;
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.03;
    background-image: 
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 5px,
        rgba(255, 255, 255, 0.1) 5px,
        rgba(255, 255, 255, 0.1) 10px
      );
    z-index: 0;
    pointer-events: none;
  }
`;

const CodeHeader = styled.div`
  display: ${(props) => (props.title ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 600;
  color: #b19eee;
  font-size: 0.95em;
  letter-spacing: 0.03em;
  
  &:before {
    content: "📄";
    margin-right: 10px;
    font-size: 1.1em;
  }
`;

const CodeContent = styled.div`
  position: relative;
  z-index: 1;
  letter-spacing: 0.01em;
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
  
  .keyword { color: #ff79c6; font-weight: 500; }
  .string { color: #f1fa8c; }
  .number { color: #bd93f9; }
  .comment { color: #6272a4; }
  .function { color: #50fa7b; }
  .operator { color: #ff79c6; }
  .class { color: #8be9fd; font-style: italic; }
  .tag { color: #ff5555; }
  .attribute { color: #50fa7b; }
  .punctuation { color: #f8f8f2; }
`;

const LineNumbers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 22px 10px 22px 0;
  color: rgba(255, 255, 255, 0.3);
  text-align: right;
  user-select: none;
  font-size: 0.9em;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
`;

const highlightSyntax = (code) => {
  if (!code) return '';
  
  return code
    .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|require)\b/g, '<span class="keyword">$1</span>')
    .replace(/('.*?'|".*?")/g, '<span class="string">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    .replace(/\b([A-Za-z0-9_]+)(?=\()/g, '<span class="function">$1</span>');
};

const CodeBlock = ({ children, title, maxHeight, fontSize }) => {
  const lines = (children || '').split('\n');
  
  return (
    <CodeContainer maxHeight={maxHeight} fontSize={fontSize}>
      <CodeHeader title={title}>{title}</CodeHeader>
      <CodeContent dangerouslySetInnerHTML={{ __html: highlightSyntax(children) }} />
    </CodeContainer>
  );
};

export default CodeBlock;
