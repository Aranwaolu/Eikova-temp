interface PictureFilesActionProps {
    pictures: {
        files: File[] | null;
        links: string[] | null
    }
    type: string;
}

export const PictureFilesReducer = (
    state: PictureFilesActionProps["pictures"],
    action: { files: File[] | null, type: string }
) => {
    switch (action.type) {
        case "SET_PICTURE_FILES":
            const pictureLinks = action.files && action.files.map(file => URL.createObjectURL(file));
            return { files: action.files, links: pictureLinks };
        default:
            return { files: null, links: [""] };
    }
};

