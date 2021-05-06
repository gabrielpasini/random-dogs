import React, { useEffect, useState } from "react";
import { Container, ImageBox, Img, Text } from "./Styles";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const resImages = await axios.get(
      "https://dog.ceo/api/breeds/image/random/50"
    );
    setImages(resImages.data.message);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Container>
      {images?.map((img, index) => (
        <ImageBox key={index}>
          <Img src={img} />
          <Text>Dog: {index + 1}</Text>
        </ImageBox>
      ))}
    </Container>
  );
}

export default App;
