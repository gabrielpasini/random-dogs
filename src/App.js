import React, { useEffect, useState } from "react";
import { Container, ImageBox, Img, Text, LargeImg } from "./Styles";
import Loading from "./Loading";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const getImages = async () => {
    setLoading(true);
    const resImages = await axios.get(
      "https://dog.ceo/api/breeds/image/random/50"
    );
    setImages(resImages.data.message);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Container>
      <Loading show={loading} />
      {!selectedPhoto &&
        images.length > 0 &&
        images?.map((img, index) => (
          <ImageBox key={index} onClick={() => setSelectedPhoto(img)}>
            <Img src={img} />
            <Text>Dog: {index + 1}</Text>
          </ImageBox>
        ))}
      {selectedPhoto && (
        <LargeImg src={selectedPhoto} onClick={() => setSelectedPhoto("")} />
      )}
    </Container>
  );
}

export default App;
