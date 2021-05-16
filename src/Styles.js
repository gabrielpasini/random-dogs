import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: #30a2ff;
  top: 0;
  left: 0;
  ${(props) => (props.hideCroll ? `overflow: hidden;` : `overflow-y: scroll;`)}
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
  box-shadow: 0px 0px 0px #222;
  background-color: #fff;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0px 10px 10px #222;
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
  height: 50%;
  box-shadow: 0px 0px 0px #222;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-20px);
    box-shadow: 0px 20px 20px #222;
  }
  ${(props) =>
    props.effect &&
    `
  animation: effecting 2s infinite linear;
  @keyframes effecting {
    from {
      transform:skew(0deg, 180deg);
    }
    to {
      transform:skew(180deg, 0deg);
    }
  }
  `}
`;

export const Button = styled.button`
  font-family: Impact;
  font-size: 32px;
  position: fixed;
  left: 20px;
  top: 20px;
  width: 80px;
  height: 40px;
  color: #777;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: #777;
    box-shadow: 0px 0px 30px #222;
  }
  animation: bouncing 1s infinite alternate;
  @keyframes bouncing {
    from {
      box-shadow: 0px 0px 0px #222;
      transform: scale(0.8);
    }
    to {
      box-shadow: 0px 0px 20px #222;
      transform: scale(1);
    }
  }
`;
