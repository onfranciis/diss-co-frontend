import { ChangeEvent, useState } from "react";
import "../styles/ImageInput.scss";
import placeholder from "/addImage.svg";

type ImageInputProps = {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput = ({ onImageChange }: ImageInputProps) => {
  const [imageURL, setImageURL] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onImageChange(e);
    setImageURL(URL.createObjectURL(e.currentTarget.files![0]));
  };

  return (
    <div
      id="picWrapper"
      className="specialistPicWrapper"
      style={{
        backgroundImage:
          imageURL == "" ? `url(${placeholder})` : `url(${imageURL})`,
        backgroundSize: imageURL == "" ? "8%" : "",
      }}
    >
      <input
        type="file"
        name="specialistPic"
        id="specialistPic"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageInput;
