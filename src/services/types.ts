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

export interface IPhotoDetails {
  title: string;
  description: string;
  tags: string;
  meeting: string;
  location: string;
  date: string;
  minister?: string;
  songMinister?: string;
}
