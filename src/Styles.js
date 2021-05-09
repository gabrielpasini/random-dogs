import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: space-evenly;
  background-color: #30a2ff;
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
  margin: 2%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 6px 6px 20px #222;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  :hover {
    width: 22%;
    margin: 1%;
  }
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

export const LargeImg = styled.img`
  position: inline-block;
  border-radius: 10px;
  width: auto;
  height: 90%;
  margin: 2%;
`;
