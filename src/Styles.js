import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    to right bottom,
    rgba(48, 162, 255, 0.95),
    rgba(48, 162, 255, 0.7)
  );
  ${(props) =>
    props.selected
      ? `overflow: hidden;
  flex-direction: column;`
      : `overflow-y: scroll;
  flex-direction: row;`}
`;

export const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  background-image: repeating-linear-gradient(
      45deg,
      rgba(48, 162, 255, 0.7),
      rgba(48, 162, 255, 0.7) 10px,
      transparent 0px,
      transparent 20px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(48, 162, 255, 0.5),
      rgba(48, 162, 255, 0.5) 10px,
      transparent 0px,
      transparent 20px
    );
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 18%;
  height: auto;
  margin: 1%;
  border-radius: 10px;
  box-shadow: 0px 0px 0px #222;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.1rem);
  -webkit-backdrop-filter: blur(0.1rem);
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0px 10px 10px #222;
    background-color: rgba(255, 255, 255, 0.9);
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
  font-size: 20px;
  color: #666;
  margin: 10px;
`;

export const Name = styled.p`
  font-family: Impact;
  font-size: 60px;
  color: #fff;
  text-shadow: 0px 10px 8px #222;
  margin: 0;
`;

export const LargeImg = styled.img`
  z-index: 3;
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
  z-index: 2;
  font-family: Impact;
  font-size: 32px;
  position: fixed;
  left: 20px;
  top: 20px;
  width: 50px;
  height: 50px;
  padding: 9px;
  color: #666;
  border: none;
  border-radius: 100%;
  background-color: #fff;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: #666;
    box-shadow: 0px 0px 30px #222;
  }
  animation: bouncing 1s infinite alternate;
  @keyframes bouncing {
    from {
      box-shadow: 0px 0px 0px #222;
      transform: scale(0.9);
    }
    to {
      box-shadow: 0px 0px 20px #222;
      transform: scale(1);
    }
  }
`;
