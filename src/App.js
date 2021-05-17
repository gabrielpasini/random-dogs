import React, { useEffect, useState } from "react";
import {
  Background,
  Container,
  ImageBox,
  Img,
  Text,
  LargeImg,
  Button,
  Name,
} from "./Styles";
import Loading from "./Loading";
import axios from "axios";
import { HiRefresh, HiOutlineArrowLeft } from "react-icons/hi";

function App() {
  const [images, setImages] = useState([]);
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [effect, setEffect] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);

  const getDogs = async () => {
    setLoading(true);
    await Promise.all([getImages(), getNames()]);
    setLoading(false);
  };

  const getImages = async () => {
    const resImages = await axios.get(
      "https://dog.ceo/api/breeds/image/random/50"
    );
    setImages(resImages.data?.message);
  };

  const getNames = async () => {
    const resNames = await axios.get(
      "https://randomuser.me/api/?inc=name&results=50&nat=br"
    );
    const fullNames = resNames.data?.results.map(
      (people) => `${people.name.first} ${people.name.last}`
    );
    setNames(fullNames);
  };

  const runEffect = () => {
    if (!effect) {
      setEffect(true);
      setTimeout(() => {
        setEffect(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!images.length) {
      getDogs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <>
      <Background />
      <Loading show={loading} />
      <Container selected={selectedDog?.img}>
        {!selectedDog?.img && (
          <>
            <Button onClick={() => setImages([])}>
              <HiRefresh />
            </Button>
            {images.length > 0 &&
              images?.map((img, index) => (
                <ImageBox
                  key={index}
                  onClick={() => setSelectedDog({ img, name: names[index] })}
                >
                  <Img src={img} />
                  <Text>{names[index]}</Text>
                </ImageBox>
              ))}
          </>
        )}
        {selectedDog?.img && (
          <>
            <Button onClick={() => setSelectedDog(null)}>
              <HiOutlineArrowLeft />
            </Button>
            <Name>{selectedDog.name}</Name>
            <LargeImg
              src={selectedDog.img}
              effect={effect}
              onClick={() => runEffect()}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
