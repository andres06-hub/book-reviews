export interface SignupInterface {
  username: string;
  email: string;
  password: string;
}

export interface ResponseSignup{
  status: boolean;
  message: string;
  data?: object;
}
