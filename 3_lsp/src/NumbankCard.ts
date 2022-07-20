import IPaymentInsturment from "./IPaymentInsturment";
import paymentInsturment from "./IPaymentInsturment";

export default abstract class  NumbankCard implements IPaymentInsturment{
    validate(): void {
        console.log('validação')
    }
    collectPayment(): void {
        console.log("pagamento realizado")
    }

}