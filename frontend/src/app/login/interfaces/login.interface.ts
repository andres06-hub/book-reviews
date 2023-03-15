export interface LoginInterface {
  email: string;
  password: string;
}

export interface ResponseAuth {
  status: boolean;
  message: string;
  data?: DataToken;
}

export interface DataToken {
  token: string;
}
