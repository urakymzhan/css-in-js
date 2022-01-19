import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid;
  width: 300px;
  padding: 20px;
  background: #fff;
`;
export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Stats = styled.h1`
  color: green;
  margin-bottom: 0;
`;
export const Comment = styled.p`
  color: gray;
  margin-top: 5px;
`;
export const ProgresBar = styled.progress`
  width: 100%;
  display: ${(props) => (props.progressbar === false ? "none" : "inline")};
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
