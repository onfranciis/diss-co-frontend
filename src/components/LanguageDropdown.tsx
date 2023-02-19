import { ChangeEvent, useState } from "react";
import "../styles/LanguageDropdown.scss";

const LanguageDropdown = ({
  onChange,
}: {
  onChange: (data: string) => void;
}) => {
  const [select, setSelect] = useState("English");
  return (
    <select
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.currentTarget.value);
        setSelect(e.currentTarget.value);
      }}
      value={select}
    >
      <option value="English">English</option>
      <option value="Spanish">Spanish</option>
      <option value="French">French</option>
      <option value="Chineese">Chineese</option>
    </select>
  );
};

export default LanguageDropdown;
