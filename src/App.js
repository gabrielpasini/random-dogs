import React, { useEffect, useState } from "react";
import { Container, ImageBox, Img, Text, LargeImg, Button } from "./Styles";
import Loading from "./Loading";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [effect, setEffect] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const getImages = async () => {
    setLoading(true);
    const resImages = await axios.get(
      "https://dog.ceo/api/breeds/image/random/50"
    );
    setImages(resImages.data.message);
    setLoading(false);
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
    getImages();
  }, []);

  return (
    <Container hideCroll={selectedPhoto}>
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
        <>
          <Button onClick={() => setSelectedPhoto("")}>{"<"}</Button>
          <LargeImg
            src={selectedPhoto}
            effect={effect}
            onClick={() => runEffect()}
          />
        </>
      )}
    </Container>
  );
}

export default App;
