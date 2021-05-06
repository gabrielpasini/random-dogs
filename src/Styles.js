import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-evenly;
  background-color: #ccc;
  overflow-y: scroll;
  top: 0;
  left: 0;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  height: auto;
  margin: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px #aaa;
`;

export const Img = styled.img`
  position: inline-block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Text = styled.p`
  word-wrap: break-word;
  word-break: break-all;
  font-family: Impact;
  color: #777;
  margin: 10px;
`;
