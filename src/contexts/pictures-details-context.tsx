import { createContext, useReducer } from "react";
import { PictureDetailsReducer } from "../reducers/picture-details-reducers";

interface IPicturesDetailsContext {
  picturesDetails: {
    title: string;
    description: string;
    tags: string;
    meeting: string;
    location: string;
    date: string;
    minister: string;
    songMinister: string;
  }[];
  setPictureDetails: (
    pictureDetails: IPicturesDetailsContext["picturesDetails"]
  ) => void;
}

const defaultValue: IPicturesDetailsContext = {
  picturesDetails: [
    {
      title: "",
      description: "",
      tags: "",
      meeting: "",
      location: "",
      date: "",
      minister: "",
      songMinister: "",
    },
  ],
  setPictureDetails: (
    pictureDetails: IPicturesDetailsContext["picturesDetails"]
  ) => {},
};
export const PicturesDetailsContext =
  createContext<IPicturesDetailsContext>(defaultValue);

const PicturesDetailsContextProvider: React.FC = ({ children }) => {
  const [picturesDetails, dispatch] = useReducer(
    PictureDetailsReducer,
    defaultValue.picturesDetails
  );
  const setPictureDetails = (
    pictureDetails: IPicturesDetailsContext["picturesDetails"]
  ) => dispatch({ type: "SET_PICTURE_DETAILS", pictureDetails });
  return (
    <PicturesDetailsContext.Provider
      value={{ picturesDetails, setPictureDetails }}
    >
      {children}
    </PicturesDetailsContext.Provider>
  );
};

export default PicturesDetailsContextProvider;
