import NumbankCard from "./NumbankCard";

export default class DebitCard extends NumbankCard{

    validate(): void {
        console.log("Validar se há saldo suficiente...");
    }
}