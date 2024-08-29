export type FormValues = {
	email: string;
	password: string;
};

export type AuthInfo = {
  email: string;
  authId: number,
  firstName?: string;
  lastName?: string;
};