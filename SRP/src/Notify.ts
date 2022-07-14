import Client from "./Client";

export default class Notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    const email = this.client.email;

    console.log('enviando e-mail...')
    return true;
  }
}
