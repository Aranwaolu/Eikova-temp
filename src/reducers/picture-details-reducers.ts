interface PictureDetailsActionProps {
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
    setPictureFiles: (files: File[]) => void;
}
export const PictureDetailsReducer = (
    state: PictureDetailsActionProps["picturesDetails"],
    action: {
        pictureDetails?: PictureDetailsActionProps["picturesDetails"],
        pictureDetail?: PictureDetailsActionProps["picturesDetails"][0],
        type: string
    }
) => {
    switch (action.type) {
        case "SET_PICTURE_DETAILS":
            return action.pictureDetails ? action.pictureDetails : state;
        case "ADD_PICTURE_DETAILS":
            return action.pictureDetail ? [...state, action.pictureDetail] : state;
        default:
            return state;
    }
};

