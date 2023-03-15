export interface Book {
  id: number;
  title: string;
  description: string;
  linkImg: string;
  author: string;
}

export interface ResponseBook {
  status: boolean;
  message: string;
  data?: object;
}
