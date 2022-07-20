import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

const card = new CreditCard();
const card2 = new DebitCard();
const card3 = new NubankRewards();

card.validate();
card.collectPayment();

card2.validate();
card2.collectPayment();

card3.validate();
card3.collectPayment();