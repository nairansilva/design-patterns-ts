import IPaymentInsturment from "./IPaymentInsturment";

export default class NubankRewards implements IPaymentInsturment {
  validate(): void {
    console.log("Varificar pontuação no rewards");
  }
  collectPayment(): void {
    console.log("Pagar com pontuação rewards.");
  }
}
