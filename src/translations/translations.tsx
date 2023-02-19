import { createContext, useContext } from "react";
import { TranslationContextType, translationFileType } from "../logic/types";
import { english } from "./english";

export const changeTranslationFile = (data: string): translationFileType => {
  switch (data) {
    default:
      return english;
  }
};

export const TranslationContext = createContext<TranslationContextType>({
  language: changeTranslationFile("English"),
  setLanguage: (data) => changeTranslationFile(data),
});

export const useTranslationContext = () => {
  return useContext(TranslationContext);
};
