import Cliente from "./Client";
import Notify from "./Notify";


const cliente = new Cliente()
const notificacao = new Notify(cliente)

notificacao.sendEmail();
