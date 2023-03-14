export class ResponseBook {
  constructor(status: boolean, message: string, data?: object) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
  private status: boolean;
  private message: string;
  private data?: object;
}
