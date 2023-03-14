export class Response {
  constructor(status: number, message: string, data?: object) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
  private status: number;
  private message: string;
  private data?: object;
}
