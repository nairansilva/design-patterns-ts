import NumbankCard from "./NumbankCard";

export default class CreditCard extends NumbankCard{

    validate(): void {
        console.log("verificando limite...");
    }
}