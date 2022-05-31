export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserInvite {
  email: string;
  username: string;
}

export interface IUpdateDetails {
  title?: string;
  description?: string;
  tags?: string;
  meeting?: string;
  location?: string;
  date?: string;
  minister?: string;
  songMinister?: string;
}

export interface IUploadPhotoDetails {
  title: string;
  description: string;
  tags: string;
  meeting: string;
  location: string;
  date: string;
  image: File | null;
  minister?: string;
  songMinister?: string;
}

export interface IPicturesDetailsContext {
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