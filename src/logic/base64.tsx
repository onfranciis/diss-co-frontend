export const toBase64 = (
  image: Blob,
  fn: (data: string | ArrayBuffer) => void
) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const srcData = fileReader.result;
    fn(srcData!);
  };

  fileReader.readAsDataURL(image);
};
