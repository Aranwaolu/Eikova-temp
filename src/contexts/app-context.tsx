import PicturesDetailsContextProvider from "./pictures-details-context";
import ImageFileContextProvider from "./pictures-files-context";

const AppContextProvider: React.FC = ({ children }) => {
  return (
    <ImageFileContextProvider>
      <PicturesDetailsContextProvider>
        {children}
      </PicturesDetailsContextProvider>
    </ImageFileContextProvider>
  );
};

export default AppContextProvider;
