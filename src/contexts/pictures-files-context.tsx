import { createContext, useReducer } from "react";
import { PictureFilesReducer } from "../reducers/picture-files-reducer";

interface IFileContext {
  pictures: {
    files: File[] | null;
    links: string[] | null;
  };
  setPictureFiles: (files: File[]) => void;
}

const defaultValue = {
  pictures: { files: null, links: [""] },
  setPictureFiles: (pictureFiles: File[]) => {},
};
export const PictureFilesContext = createContext<IFileContext>(defaultValue);

const PictureFilesContextProvider: React.FC = ({ children }) => {
  const [pictures, dispatch] = useReducer(
    PictureFilesReducer,
    defaultValue.pictures
  );
  const setPictureFiles = (files: File[]) =>
    dispatch({ type: "SET_PICTURE_FILES", files });
  return (
    <PictureFilesContext.Provider value={{ pictures, setPictureFiles }}>
      {children}
    </PictureFilesContext.Provider>
  );
};

export default PictureFilesContextProvider;
