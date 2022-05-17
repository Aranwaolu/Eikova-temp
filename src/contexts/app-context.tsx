import PicturesDetailsContextProvider from "./pictures-details-context";
import ImageFileContextProvider from "./pictures-files-context";
import UserContextProvider from "./user-context";

const AppContextProvider: React.FC = ({ children }) => {
  return (
    <UserContextProvider>
      <ImageFileContextProvider>
        <PicturesDetailsContextProvider>
          {children}
        </PicturesDetailsContextProvider>
      </ImageFileContextProvider>
    </UserContextProvider>
  );
};

export default AppContextProvider;
