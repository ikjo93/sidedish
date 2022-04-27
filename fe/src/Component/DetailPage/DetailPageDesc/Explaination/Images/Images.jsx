import { useContext, useState } from "react";
import DetailInfoContext from "Component/DetailPage/DetailInfoContext";
import { ImagesDiv, MainImage, SubImagesArea, SubImage } from "./Images.styled";

const Images = () => {
  const [imageNumber, setImageNumber] = useState(0);
  const { imageFiles, name } = useContext(DetailInfoContext);
  const subImageFiles = imageFiles.map((imageFile, idx) => {
    return { src: imageFile, idx };
  });

  const handleSubImageClick = ({ target: { id } }) => {
    setImageNumber(Number(id));
  };

  const subImages = subImageFiles.map(({ src, idx }) => {
    return (
      <SubImage
        onClick={handleSubImageClick}
        src={src}
        key={idx}
        id={idx}
        imageNumber={imageNumber}
        alt={name}
      />
    );
  });

  return (
    <ImagesDiv>
      <MainImage src={`${imageFiles[imageNumber]}`} alt="test" />
      <SubImagesArea id={imageNumber}>{subImages}</SubImagesArea>
    </ImagesDiv>
  );
};

export default Images;
