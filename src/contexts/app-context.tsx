import ImageFileContextProvider from "./pictures-files-context";

const AppContextProvider: React.FC = ({ children }) => {
  return (
    <ImageFileContextProvider>
      {children}
    </ImageFileContextProvider>
  );
};

export default AppContextProvider;
