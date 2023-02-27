import { ChangeEvent, useState } from "react";
import "../styles/ImageInput.scss";
import placeholder from "/addImage.svg";

type ImageInputProps = {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageURL: string | (string | Blob);
};

const ImageInput = ({ onImageChange, imageURL }: ImageInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onImageChange(e);
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
